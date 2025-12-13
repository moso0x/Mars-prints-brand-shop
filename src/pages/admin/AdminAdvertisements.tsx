import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Megaphone,
  ImageIcon,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-hot-toast";

interface Advertisement {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  animation: string;
  is_active: boolean;
  created_at: string;
}

const animations = [
  "slideRight",
  "slideLeft",
  "fadeUp",
  "fadeDown",
  "zoomIn",
  "rotateIn",
];

const AdminAdvertisements = () => {
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingAd, setEditingAd] = useState<Advertisement | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    image: "",
    link: "",
    animation: "slideRight",
    is_active: true,
  });

  // Local storage key for advertisements
  const STORAGE_KEY = "admin_advertisements";

  useEffect(() => {
    loadAdvertisements();
  }, []);

  const loadAdvertisements = () => {
    setLoading(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setAdvertisements(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Error loading advertisements:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveAdvertisements = (ads: Advertisement[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ads));
    setAdvertisements(ads);
  };

  const openDialog = (ad?: Advertisement) => {
    if (ad) {
      setEditingAd(ad);
      setFormData({
        title: ad.title,
        subtitle: ad.subtitle,
        image: ad.image,
        link: ad.link,
        animation: ad.animation,
        is_active: ad.is_active,
      });
    } else {
      setEditingAd(null);
      setFormData({
        title: "",
        subtitle: "",
        image: "",
        link: "",
        animation: "slideRight",
        is_active: true,
      });
    }
    setDialogOpen(true);
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.image) {
      toast.error("Please fill in title and image URL");
      return;
    }

    try {
      if (editingAd) {
        const updated = advertisements.map((ad) =>
          ad.id === editingAd.id
            ? { ...ad, ...formData }
            : ad
        );
        saveAdvertisements(updated);
        toast.success("Advertisement updated successfully");
      } else {
        const newAd: Advertisement = {
          id: crypto.randomUUID(),
          ...formData,
          created_at: new Date().toISOString(),
        };
        saveAdvertisements([newAd, ...advertisements]);
        toast.success("Advertisement created successfully");
      }

      setDialogOpen(false);
    } catch (error) {
      console.error("Error saving advertisement:", error);
      toast.error("Failed to save advertisement");
    }
  };

  const deleteAdvertisement = (id: string) => {
    if (!confirm("Are you sure you want to delete this advertisement?")) return;

    try {
      const updated = advertisements.filter((ad) => ad.id !== id);
      saveAdvertisements(updated);
      toast.success("Advertisement deleted successfully");
    } catch (error) {
      console.error("Error deleting advertisement:", error);
      toast.error("Failed to delete advertisement");
    }
  };

  const filteredAds = advertisements.filter((ad) =>
    ad.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Advertisements</h2>
          <p className="text-muted-foreground">Manage your promotional banners</p>
        </div>
        <Button onClick={() => openDialog()}>
          <Plus className="mr-2" size={20} />
          Add Advertisement
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search advertisements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Advertisements Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Megaphone size={20} />
            All Advertisements ({filteredAds.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Preview</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Animation</TableHead>
                <TableHead>Link</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAds.map((ad) => (
                <TableRow key={ad.id}>
                  <TableCell>
                    <div className="w-20 h-12 bg-muted rounded-lg overflow-hidden">
                      {ad.image ? (
                        <img
                          src={ad.image}
                          alt={ad.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon size={20} className="text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{ad.title}</p>
                      <p className="text-xs text-muted-foreground">{ad.subtitle}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-muted rounded text-xs capitalize">
                      {ad.animation}
                    </span>
                  </TableCell>
                  <TableCell>
                    {ad.link ? (
                      <a
                        href={ad.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:underline text-sm"
                      >
                        <ExternalLink size={14} />
                        Link
                      </a>
                    ) : (
                      <span className="text-muted-foreground text-sm">None</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        ad.is_active
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {ad.is_active ? "Active" : "Inactive"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openDialog(ad)}
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => deleteAdvertisement(ad.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredAds.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No advertisements found. Create your first ad!
            </div>
          )}
        </CardContent>
      </Card>

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editingAd ? "Edit Advertisement" : "Add New Advertisement"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Title *</Label>
              <Input
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Ad title"
              />
            </div>
            <div>
              <Label>Subtitle</Label>
              <Input
                value={formData.subtitle}
                onChange={(e) =>
                  setFormData({ ...formData, subtitle: e.target.value })
                }
                placeholder="Ad subtitle"
              />
            </div>
            <div>
              <Label>Image URL *</Label>
              <Input
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                placeholder="https://example.com/image.jpg"
              />
              {formData.image && (
                <div className="mt-2 w-full h-32 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
            <div>
              <Label>Link URL</Label>
              <Input
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
                placeholder="https://example.com"
              />
            </div>
            <div>
              <Label>Animation</Label>
              <Select
                value={formData.animation}
                onValueChange={(value) =>
                  setFormData({ ...formData, animation: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select animation" />
                </SelectTrigger>
                <SelectContent>
                  {animations.map((anim) => (
                    <SelectItem key={anim} value={anim}>
                      {anim}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Label>Active</Label>
              <Switch
                checked={formData.is_active}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, is_active: checked })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              {editingAd ? "Update" : "Create"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default AdminAdvertisements;
