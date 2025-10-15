import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "Excellent quality prints! Very professional service and fast delivery.",
    date: "2 weeks ago"
  },
  {
    name: "David Kimani",
    rating: 5,
    comment: "Best printing service in Nairobi. Highly recommend for business cards!",
    date: "1 month ago"
  },
  {
    name: "Grace Wanjiru",
    rating: 5,
    comment: "Amazing work on our wedding invitations. Thank you so much!",
    date: "3 weeks ago"
  },
  {
    name: "Michael Ochieng",
    rating: 4,
    comment: "Great quality and reasonable prices. Will definitely come back.",
    date: "1 week ago"
  },
  {
    name: "Patricia Akinyi",
    rating: 5,
    comment: "Professional team and beautiful results. Very satisfied with the mugs!",
    date: "2 months ago"
  },
  {
    name: "John Mwangi",
    rating: 5,
    comment: "Fast turnaround and excellent customer service. Highly recommended!",
    date: "3 days ago"
  },
  {
    name: "Lucy Wambui",
    rating: 5,
    comment: "Perfect quality for our company letterheads. Very impressed!",
    date: "1 month ago"
  },
  {
    name: "James Otieno",
    rating: 5,
    comment: "Outstanding print quality and great attention to detail.",
    date: "2 weeks ago"
  }
];

const ReviewCard = ({ name, rating, comment, date }: typeof reviews[0]) => (
  <div className="flex-shrink-0 w-80 bg-card border rounded-lg p-6 mx-4">
    <div className="flex items-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-accent text-accent" : "text-muted"
          }`}
        />
      ))}
    </div>
    <p className="text-foreground mb-3 line-clamp-3">{comment}</p>
    <div className="flex items-center justify-between text-sm">
      <p className="font-semibold text-foreground">{name}</p>
      <p className="text-muted-foreground">{date}</p>
    </div>
  </div>
);

export const RatingsSection = () => {
  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-center mb-2">What Our Customers Say</h2>
        <p className="text-muted-foreground text-center">Trusted by hundreds of satisfied clients</p>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee-rtl">
          {duplicatedReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};
