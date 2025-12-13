import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  Plus,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Menu,
  X,
  LogOut,
  Megaphone,
  ChevronDown
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "react-hot-toast";
import AdminOrders from "./AdminOrders";
import AdminProducts from "./AdminProducts";
import AdminCustomers from "./AdminCustomers";
import AdminAnalytics from "./AdminAnalytics";
import AdminSettings from "./AdminSettings";
import AdminAdvertisements from "./AdminAdvertisements";

type TabType = "overview" | "orders" | "products" | "customers" | "analytics" | "settings" | "advertisements";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    totalProducts: 0,
  });

  useEffect(() => {
    checkAdminAccess();
    fetchStats();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast.error("Please login to access admin panel");
        navigate("/auth");
        return;
      }

      setUserEmail(session.user.email || "");
      setUserName(session.user.user_metadata?.full_name || session.user.email?.split("@")[0] || "Admin");

      const { data: roles, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin");

      if (error || !roles || roles.length === 0) {
        toast.error("Access denied. Admin privileges required.");
        navigate("/");
        return;
      }

      setIsAdmin(true);
    } catch (error) {
      console.error("Error checking admin access:", error);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const { data: orders } = await supabase.from("orders").select("*");
      const { data: profiles } = await supabase.from("profiles").select("*");
      const { data: products } = await supabase.from("products").select("*");

      const totalRevenue = orders?.reduce((sum, order) => sum + Number(order.total_amount || 0), 0) || 0;

      setStats({
        totalOrders: orders?.length || 0,
        totalRevenue,
        totalCustomers: profiles?.length || 0,
        totalProducts: products?.length || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const menuItems = [
    { id: "overview" as TabType, label: "Dashboard", icon: LayoutDashboard },
    { id: "orders" as TabType, label: "Orders", icon: ShoppingCart },
    { id: "products" as TabType, label: "Products", icon: Package },
    { id: "customers" as TabType, label: "Customers", icon: Users },
    { id: "advertisements" as TabType, label: "Advertisements", icon: Megaphone },
    { id: "analytics" as TabType, label: "Analytics", icon: BarChart3 },
  ];

  const statCards = [
    { title: "Total Orders", value: stats.totalOrders, icon: ShoppingBag, color: "bg-blue-500" },
    { title: "Total Revenue", value: `KSh ${stats.totalRevenue.toLocaleString()}`, icon: DollarSign, color: "bg-green-500" },
    { title: "Customers", value: stats.totalCustomers, icon: Users, color: "bg-purple-500" },
    { title: "Products", value: stats.totalProducts, icon: Package, color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background rounded-lg shadow-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-card border-r transform lg:translate-x-0 transition-transform duration-200 ease-in-out flex flex-col`}
      >
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
          <p className="text-sm text-muted-foreground">Store Management</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-foreground"
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Settings button at bottom */}
        <div className="p-4 border-t space-y-2">
          <button
            onClick={() => {
              setActiveTab("settings");
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "settings"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted text-foreground"
            }`}
          >
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </button>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 lg:ml-0 flex flex-col min-h-screen">
        {/* Top Header with Profile */}
        <header className="sticky top-0 z-20 bg-background/95 backdrop-blur border-b px-4 lg:px-8 py-4 flex items-center justify-between">
          <div className="lg:hidden w-10" /> {/* Spacer for mobile menu button */}
          <h2 className="text-lg font-semibold hidden lg:block">
            {menuItems.find(item => item.id === activeTab)?.label || "Settings"}
          </h2>
          
          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 h-auto py-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                    {userName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                  <span className="text-sm font-medium">{userName}</span>
                  <span className="text-xs text-muted-foreground">{userEmail}</span>
                </div>
                <ChevronDown size={16} className="text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => setActiveTab("settings")}>
                <Settings size={16} className="mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut size={16} className="mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-4 lg:p-8">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold">Dashboard Overview</h2>
                  <p className="text-muted-foreground">Welcome to your admin dashboard</p>
                </div>
                <Button onClick={() => setActiveTab("products")}>
                  <Plus className="mr-2" size={20} />
                  Add Product
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">{stat.title}</p>
                            <p className="text-2xl font-bold mt-1">{stat.value}</p>
                          </div>
                          <div className={`p-3 rounded-full ${stat.color}`}>
                            <stat.icon className="text-white" size={24} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp size={20} />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" onClick={() => setActiveTab("orders")}>
                      View Orders
                    </Button>
                    <Button variant="outline" onClick={() => setActiveTab("products")}>
                      Manage Products
                    </Button>
                    <Button variant="outline" onClick={() => setActiveTab("advertisements")}>
                      Manage Ads
                    </Button>
                    <Button variant="outline" onClick={() => setActiveTab("analytics")}>
                      View Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "orders" && <AdminOrders />}
          {activeTab === "products" && <AdminProducts />}
          {activeTab === "customers" && <AdminCustomers />}
          {activeTab === "analytics" && <AdminAnalytics />}
          {activeTab === "settings" && <AdminSettings />}
          {activeTab === "advertisements" && <AdminAdvertisements />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
