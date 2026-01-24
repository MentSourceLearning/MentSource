import { TrendingUp, Users, BookOpen, Globe, Code, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Active Learners", icon: Users, color: "primary" },
  { value: 20, suffix: "+", label: "Volunteer Mentors", icon: Award, color: "secondary" },
  { value: 5, suffix: "+", label: "Countries Reached", icon: Globe, color: "accent" },
  { value: 20, suffix: "+", label: "Learning Paths", icon: BookOpen, color: "primary" },
  { value: 30, suffix: "+", label: "Contributors", icon: Code, color: "secondary" },
  { value: 95, suffix: "%", label: "Completion Rate", icon: TrendingUp, color: "accent" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const stepValue = value / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            setCount(Math.min(Math.round(stepValue * currentStep), value));
            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/80 mb-4">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm font-medium">Our Impact in Numbers</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Making a Difference Together
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div 
                className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 transition-transform group-hover:scale-110 ${
                  stat.color === "primary" 
                    ? "bg-primary-foreground/10" 
                    : stat.color === "secondary"
                    ? "bg-secondary/20"
                    : "bg-accent/20"
                }`}
              >
                <stat.icon className={`h-6 w-6 ${
                  stat.color === "primary" 
                    ? "text-primary-foreground" 
                    : stat.color === "secondary"
                    ? "text-secondary"
                    : "text-accent"
                }`} />
              </div>

              {/* Value */}
              <div className="text-primary-foreground mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="text-sm font-medium text-primary-foreground/70">
                {stat.label}
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-4 right-4 w-8 h-8 rounded-full opacity-20 ${
                stat.color === "primary" 
                  ? "bg-primary-foreground" 
                  : stat.color === "secondary"
                  ? "bg-secondary"
                  : "bg-accent"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
