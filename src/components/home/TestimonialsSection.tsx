import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "MentSource changed my life. As a self-taught developer from Kenya, I never thought I'd land a job at a tech company. The mentorship program connected me with amazing people who believed in me.",
    name: "Sarah Wanjiku",
    role: "Frontend Developer",
    company: "Safaricom",
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    featured: true,
  },
  {
    quote: "The open-source contribution program helped me build real skills and confidence. Now I'm contributing to projects used by millions.",
    name: "Carlos Rodriguez",
    role: "Full Stack Developer",
    company: "Shopify",
    location: "Mexico City",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    featured: false,
  },
  {
    quote: "As a career changer in my 40s, I was scared to start learning to code. The supportive community here made all the difference. Age is truly just a number!",
    name: "Priya Sharma",
    role: "Data Analyst",
    company: "Infosys",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    featured: false,
  },
  {
    quote: "Being a mentor at MentSource is incredibly rewarding. Seeing learners grow and achieve their goals reminds me why I fell in love with technology.",
    name: "Peculiar C Umeh",
    role: "Project Manager",
    company: "Superbloom",
    location: "New York",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGyCnHyrthPtQ/profile-displayphoto-crop_800_800/B4EZuDvfpOIwAI-/0/1767441838409?e=1770854400&v=beta&t=2RMjJBBfnZwWs4JeeymvhxcGjlfFIgSESf588CQcgZw",
    rating: 5,
    featured: true,
  },
  {
    quote: "From complete beginner to landing my first dev job in 8 months. The structured learning paths and mentor support made it possible.",
    name: "Emma Thompson",
    role: "Junior Developer",
    company: "Basecamp",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    featured: false,
  },
  {
    quote: "The community here is unlike anything I've experienced. Everyone genuinely wants to help each other succeed.",
    name: "Ahmed Hassan",
    role: "Cloud Engineer",
    company: "Microsoft",
    location: "Cairo, Egypt",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    featured: false,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-soft overflow-hidden">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-light text-accent text-sm font-medium mb-4">
            Community Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Voices From Our{" "}
            <span className="text-gradient-primary">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real people whose lives were transformed through learning.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`break-inside-avoid group relative bg-card rounded-3xl p-6 border border-border/50 card-hover ${
                testimonial.featured ? "md:p-8" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className={`inline-flex items-center justify-center rounded-2xl mb-4 ${
                testimonial.featured 
                  ? "w-12 h-12 bg-primary" 
                  : "w-10 h-10 bg-primary-light"
              }`}>
                <Quote className={`${
                  testimonial.featured 
                    ? "h-6 w-6 text-primary-foreground" 
                    : "h-5 w-5 text-primary"
                }`} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className={`text-foreground leading-relaxed mb-6 ${
                testimonial.featured 
                  ? "text-lg lg:text-xl font-display" 
                  : "text-sm"
              }`}>
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-light"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                  <div className="text-xs text-muted-foreground/70">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
