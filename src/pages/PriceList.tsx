import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { PageTransition } from "@/components/PageTransition";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PriceList = () => {
  const categories = [
    {
      title: "Business Cards",
      description: "Professional business cards that make lasting impressions",
      items: [
        { name: "Standard Business Cards (500pcs)", price: "Ksh. 2,500", features: ["Matt/Gloss Finish", "Single Sided", "Standard Size"] },
        { name: "Premium Business Cards (500pcs)", price: "Ksh. 4,000", features: ["Matt/Gloss Finish", "Double Sided", "Premium Quality"] },
        { name: "Luxury Business Cards (500pcs)", price: "Ksh. 6,500", features: ["Embossed Finish", "Double Sided", "Premium Card Stock"] },
      ],
    },
    {
      title: "Marketing Materials",
      description: "Eye-catching promotional materials for your business",
      items: [
        { name: "Flyers A5 (1000pcs)", price: "Ksh. 5,000", features: ["Full Color", "Single Sided", "128gsm Paper"] },
        { name: "Flyers A4 (500pcs)", price: "Ksh. 4,500", features: ["Full Color", "Single Sided", "128gsm Paper"] },
        { name: "Brochures A4 Tri-fold (500pcs)", price: "Ksh. 8,000", features: ["Full Color", "Double Sided", "Premium Finish"] },
        { name: "Posters A3 (100pcs)", price: "Ksh. 6,000", features: ["Full Color", "Single Sided", "Photo Quality"] },
      ],
    },
    {
      title: "Business Stationery",
      description: "Complete stationery solutions for your business",
      items: [
        { name: "Letterheads A4 (500pcs)", price: "Ksh. 4,000", features: ["Full Color", "Single Sided", "Quality Paper"] },
        { name: "Envelopes DL (500pcs)", price: "Ksh. 3,500", features: ["Custom Printed", "Standard Size", "Quality Stock"] },
        { name: "Compliment Slips (500pcs)", price: "Ksh. 2,500", features: ["Full Color", "Single Sided", "Standard Size"] },
        { name: "Invoice Books (50 sets)", price: "Ksh. 3,000", features: ["2-Part NCR", "Numbered", "Perforated"] },
      ],
    },
    {
      title: "Outdoor Branding",
      description: "Large format printing for maximum visibility",
      items: [
        { name: "Pull-up Banners (1pc)", price: "Ksh. 4,500", features: ["850mm x 2000mm", "Full Color", "Includes Stand"] },
        { name: "X-Banners (1pc)", price: "Ksh. 3,500", features: ["800mm x 1800mm", "Full Color", "Includes Frame"] },
        { name: "PVC Banners (per sq. meter)", price: "Ksh. 800", features: ["Full Color", "Weather Resistant", "Eyelets Included"] },
        { name: "Vinyl Banners (per sq. meter)", price: "Ksh. 600", features: ["Full Color", "Indoor/Outdoor", "Custom Sizes"] },
      ],
    },
    {
      title: "Stickers & Labels",
      description: "Custom stickers and labels for any purpose",
      items: [
        { name: "Vinyl Stickers (1000pcs)", price: "Ksh. 5,000", features: ["Full Color", "Die Cut", "Weather Proof"] },
        { name: "Paper Labels (1000pcs)", price: "Ksh. 3,000", features: ["Full Color", "Custom Shapes", "Premium Adhesive"] },
        { name: "Clear Stickers (500pcs)", price: "Ksh. 4,500", features: ["Transparent", "Die Cut", "High Quality"] },
      ],
    },
    {
      title: "Branded Merchandise",
      description: "Custom branded items for promotions and gifts",
      items: [
        { name: "T-Shirts (20pcs)", price: "Ksh. 10,000", features: ["Screen Printing", "Quality Cotton", "Custom Design"] },
        { name: "Mugs (50pcs)", price: "Ksh. 12,500", features: ["Full Color", "11oz Ceramic", "Dishwasher Safe"] },
        { name: "Tote Bags (50pcs)", price: "Ksh. 8,000", features: ["Screen Printing", "Canvas Material", "Custom Design"] },
        { name: "Water Bottles (30pcs)", price: "Ksh. 9,000", features: ["BPA Free", "Full Color Print", "500ml Capacity"] },
      ],
    },
    {
      title: "Calendars",
      description: "Custom calendars for branding and organization",
      items: [
        { name: "Wall Calendars (100pcs)", price: "Ksh. 15,000", features: ["A3 Size", "13 Pages", "Wire-O Binding"] },
        { name: "Desk Calendars (100pcs)", price: "Ksh. 10,000", features: ["DL Size", "Full Color", "Stand Included"] },
        { name: "Pocket Calendars (500pcs)", price: "Ksh. 8,000", features: ["Credit Card Size", "Laminated", "Custom Design"] },
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Price List
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for premium quality printing services. All prices are inclusive of design support.
            </p>
          </div>

          {/* Price Categories */}
          {/* <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card 
                      key={item.name} 
                      className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (itemIndex * 0.05)}s` }}
                    >
                      <CardHeader>
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        <CardDescription>
                          <span className="text-3xl font-bold text-primary">{item.price}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {item.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full mt-4" asChild>
                          <Link to="/contact">Order Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div> */}

          {/* Call to Action */}
          <Card className="mt-12 bg-accent/10 border-accent/20 animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Need a Custom Quote?</h3>
                <p className="text-muted-foreground">
                  Have a special project in mind? Contact us for a personalized quote tailored to your specific needs.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/contact">Get Custom Quote</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/feedback">Request a Callback</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Volume Discounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Order in bulk and save! We offer attractive discounts for large quantity orders.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fast Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Most orders are completed within 3-5 business days. Rush services available.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quality Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  100% satisfaction guaranteed. We'll reprint if you're not completely happy.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        <FooterNew />
      </div>
    </PageTransition>
  );
};

export default PriceList;
