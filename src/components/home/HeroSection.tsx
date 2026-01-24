import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Code, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCommunity from "@/assets/hero-community.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 blob float opacity-60" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/10 blob float opacity-40" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 blob float opacity-30" style={{ animationDelay: "-5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-foreground/5 to-transparent rounded-full" />

      <div className="container-main relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">
                100+ learners worldwide
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in stagger-1">
              Open Source Collaboration for{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Everyone</span>
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-secondary/60" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 8 Q50 0 100 8 T200 8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in stagger-2">
              MentSource drives open source innovation, enabling impactful collaborations and fostering a thriving global community of contributors.We strive to cultivate a global network of developers passionate about open source
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in stagger-3">
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/projects">
                  Become a Contributor
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="warm" size="xl" asChild className="group">
                <Link to="/mentorship">
                  <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Join the community
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in stagger-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground border-2 border-primary">
                  +9K
                </div>
              </div>
              <div className="text-primary-foreground/80">
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm">Rated 4.9/5 by our community</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-fade-in stagger-3 hidden lg:block">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroCommunity}
                alt="Diverse community of learners collaborating"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-8 top-1/4 p-4 rounded-2xl bg-card shadow-xl border border-border/50 animate-float">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary-light">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">20+ Mentors</p>
                  <p className="text-xs text-muted-foreground">Ready to help</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-1/3 p-4 rounded-2xl bg-card shadow-xl border border-border/50 animate-float" style={{ animationDelay: "-2s" }}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-secondary-light">
                  <BookOpen className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">50+ Projects</p>
                  <p className="text-xs text-muted-foreground">All free</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 bottom-1/4 p-4 rounded-2xl bg-card shadow-xl border border-border/50 animate-float" style={{ animationDelay: "-4s" }}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-accent-light">
                  <Code className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Open Source</p>
                  <p className="text-xs text-muted-foreground">Contribute today</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats - Mobile */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto mt-16 lg:hidden animate-fade-in stagger-4">
          <div className="flex flex-col items-center p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
            <Users className="h-6 w-6 text-secondary mb-2" />
            <span className="text-2xl sm:text-3xl font-bold text-primary-foreground">10K+</span>
            <span className="text-xs sm:text-sm text-primary-foreground/60">Learners</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
            <BookOpen className="h-6 w-6 text-secondary mb-2" />
            <span className="text-2xl sm:text-3xl font-bold text-primary-foreground">50+</span>
            <span className="text-xs sm:text-sm text-primary-foreground/60">Courses</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
            <Code className="h-6 w-6 text-secondary mb-2" />
            <span className="text-2xl sm:text-3xl font-bold text-primary-foreground">500+</span>
            <span className="text-xs sm:text-sm text-primary-foreground/60">Mentors</span>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
          <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}
