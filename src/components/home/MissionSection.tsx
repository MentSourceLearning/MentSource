import { Target, Globe, Sparkles } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To democratize education by providing free, high-quality learning resources and mentorship opportunities to everyone, regardless of their background.",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "We connect learners and mentors across 120+ countries, breaking down geographical barriers to create a truly global learning community.",
    color: "secondary",
  },
  {
    icon: Sparkles,
    title: "Open Source First",
    description: "All our educational materials are open source. We believe in transparency, collaboration, and the power of community-driven development.",
    color: "accent",
  },
];

export function MissionSection() {
  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
            Why We Exist
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Knowledge Should Be{" "}
            <span className="text-gradient-primary">Free</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're building a world where anyone can learn, contribute, and grow—without financial or geographic barriers standing in their way.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative p-8 rounded-3xl bg-gradient-card border border-border/50 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform group-hover:scale-110 ${
                  value.color === "primary"
                    ? "bg-primary-light text-primary"
                    : value.color === "secondary"
                    ? "bg-secondary-light text-secondary"
                    : "bg-accent-light text-accent"
                }`}
              >
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
