import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Palette,
  ArrowRight, Clock, Users, Star, BookOpen,
  HeartPulse,
  GraduationCap
} from "lucide-react";

const programs = [
  {
    icon: HeartPulse, // or Stethoscope
    title: "HelCare",
    description: "Simplifying healthcare management through smart, accessible digital solutions.",
    stack: "Python",
    topics: ["Python", "Django", "REST APIs", "Healthcare Tech"],
    color: "primary",
    gradient: "from-primary to-primary-dark",
    contributors: 25,
    level: "Beginner to Advanced",
    duration: "8 Weeks",
  },
  {
    icon: GraduationCap,
    title: "LEMAs",
    description: "Empowering educational systems with scalable and efficient learning tools.",
    stack: "Kotlin",
    topics: ["Kotlin", "Android", "Firebase", "UI/UX Design"],
    color: "secondary",
    gradient: "from-base to-orange-600",
    contributors: 40,
    level: "Beginner Friendly",
    duration: "6 Weeks",

  },
  {
    icon: Users,
    title: "MENTSOURCE",
    description: "Fostering a thriving open-source community for learning, mentorship, and collaboration.",
    stack: "React",
    topics: ["React", "TypeScript", "GraphQL", "Tailwind CSS"],
    color: "accent",
    gradient: "from-accent to-indigo-700",
    contributors: 60,
    level: "All Levels",
    duration: "Ongoing",
  },
  {
    icon: Palette,
    title: "SmartArt",
    description: "Transforming digital art through modern, intuitive creative experiences.",
    stack: "React, TypeScript",
    topics: ["React", "TypeScript", "Canvas API", "WebGL"],
    color: "primary",
    gradient: "from-primary to-teal-700",
    contributors: 30,
    level: "Intermediate",
    duration: "10 Weeks",
  },
];
const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-hero relative overflow-hidden">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-light text-[#ff5b3e] text-sm font-medium mb-4">
                Learning Paths
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Free Learning Programs for{" "}
                <span className="text-[#5a85fe]">Everyone</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Structured learning paths designed by industry experts. From complete beginner to job-ready professional—all completely free.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>50+ Courses</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <Users className="h-5 w-5 text-primary" />
                  <span>10,000+ Learners</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <Star className="h-5 w-5 text-primary" />
                  <span>4.8 Avg Rating</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
              <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="section-padding">
          <div className="container-main">
            <div className="grid gap-8">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 p-6 sm:p-8 card-hover"
                >
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 lg:w-1/3">
                      <div
                        className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${program.color === "primary"
                            ? "bg-primary-light text-primary"
                            : program.color === "secondary"
                              ? "bg-secondary-light text-secondary"
                              : "bg-accent-light text-accent"
                          }`}
                      >
                        <program.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {program.title}
                        </h3>
                        <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                          {program.level}
                        </span>
                      </div>
                    </div>

                    {/* Description & Topics */}
                    <div className="lg:w-1/3">
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {program.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats & CTA */}
                    <div className="lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end justify-between">
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground font-medium">{program.duration}</span>
                        </div>
                      </div>
                      <Button variant="default" asChild>
                        <div>
                          Start Building
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-hero relative overflow-hidden">
          <div className="container-main text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Explore our documentation to discover the learning path that fits your goals and experience level.
            </p>
            <Button variant="hero-outline" size="lg">
              Explore our doc
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
              <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
