const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "200+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
  { number: "99%", label: "Satisfaction Rate" },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-primary-foreground mb-2 bg-gradient-to-r from-accent-foreground to-brand-blue bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-lg text-primary-foreground/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
