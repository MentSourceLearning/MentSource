import { ArrowRight, Palette, Users, HeartPulse, GraduationCap, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { navigateTo } from "@/lib/utils";

const programs = [
  {
    icon: HeartPulse, // or Stethoscope
    title: "HelCare",
    description: "Simplifying healthcare management through smart, accessible digital solutions.",
    stack: "Python",
    color: "primary",
    gradient: "from-primary to-primary-dark",
    contributors: 25,
    level: "Beginner to Advanced",
  },
  {
    icon: GraduationCap,
    title: "LEMAs",
    description: "Empowering educational systems with scalable and efficient learning tools.",
    stack: "Kotlin",
    color: "secondary",
    gradient: "from-base to-orange-600",
    contributors: 40,
    level: "Beginner Friendly",
  },
  {
    icon: Users,
    title: "MENTSOURCE",
    description: "Fostering a thriving open-source community for learning, mentorship, and collaboration.",
    stack: "React",
    color: "accent",
    gradient: "from-accent to-indigo-700",
    contributors: 60,
    level: "All Levels",
  },
  {
    icon: Palette,
    title: "SmartArt",
    description: "Transforming digital art through modern, intuitive creative experiences.",
    stack: "React, TypeScript",
    color: "primary",
    gradient: "from-primary to-teal-700",
    contributors: 30,
    level: "Intermediate",
  },
];

export function ProgramsPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-main">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium mb-4">
              Learning Paths
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Explore Our{" "}
              <span className="text-[#ff5b3e]">Projects</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Structured learning paths designed by industry experts. Pick your interest and start learning today.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
                aria-label="Scroll left"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
                aria-label="Scroll right"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <Button variant="outline" size="lg" asChild>
              <div onClick={() => navigateTo("/projects")} className="cursor-pointer">
                View All
                <ArrowRight className=" h-4 w-4" />
              </div>
            </Button>
          </div>
        </div>

        {/* Horizontal Scroll Cards */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group relative flex-shrink-0 w-[320px] sm:w-[360px] snap-start"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="h-full rounded-3xl bg-card border border-border/50 overflow-hidden card-hover">
                {/* Gradient Header */}
                <div className={`relative h-32 bg-gradient-to-br ${program.gradient} p-6`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm mb-2">
                      <program.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      {program.level}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Languages className="h-4 w-4 text-base" />
                      <span className={`text-sm text-base`}>{program.stack}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{program.contributors} contributors</span>
                    </div>
                  </div>

                  {/* Hover CTA */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Start Learning <ArrowRight className="h-4 w-4" />
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
