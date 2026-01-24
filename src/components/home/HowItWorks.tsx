import { BookOpen, Users, Award, Globe } from "lucide-react";

const steps = [
  {
    icon: Globe,
    step: "01",
    title: "Explore Open Resources",
    description: "Dive straight into open-source learning materials, projects, and documentation—no sign-up required.",
    color: "primary",
  },
  {
    icon: BookOpen,
    step: "02",
    title: "Choose Your Path",
    description: "Discover learning tracks, real-world projects, and contribution areas that match your interests.",
    color: "secondary",
  },
  {
    icon: Users,
    step: "03",
    title: "Collaborate & Learn",
    description: "Learn in public, collaborate with contributors, and get guidance from experienced community members.",
    color: "accent",
  },
  {
    icon: Award,
    step: "04",
    title: "Contribute & Give Back",
    description: "Apply what you’ve learned by contributing to projects, mentoring others, and growing the community.",
    color: "primary",
  },
];


export function HowItWorks() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium mb-4">
            Getting Started
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It{" "}
            <span className="text-[#ff5b3e]">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your learning journey starts here. Four simple steps to unlock your potential.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:top-20 z-10">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-transform group-hover:scale-110 ${
                      step.color === "primary" 
                        ? "bg-primary text-primary-foreground" 
                        : step.color === "secondary"
                        ? "bg-base text-secondary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Card */}
                <div className="pt-12 lg:pt-32">
                  <div 
                    className={`relative p-6 rounded-2xl border transition-all duration-300 group-hover:-translate-y-2 ${
                      step.color === "primary"
                        ? "bg-primary-light/30 border-primary/20 hover:border-primary/40"
                        : step.color === "secondary"
                        ? "bg-secondary-light/30 border-secondary/20 hover:border-secondary/40"
                        : "bg-accent-light/30 border-accent/20 hover:border-accent/40"
                    }`}
                  >
                    <div 
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
                        step.color === "primary"
                          ? "bg-primary text-primary-foreground"
                          : step.color === "secondary"
                          ? "bg-base text-secondary-foreground"
                          : "bg-accent text-accent-foreground"
                      }`}
                    >
                      <step.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[4.5rem] -right-4 z-20">
                    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-muted-foreground/30">
                      <path d="M20 4L28 12L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
