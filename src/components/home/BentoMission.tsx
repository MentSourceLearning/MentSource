import { Target, Globe, Sparkles, Users, Heart, Zap } from "lucide-react";

export function BentoMission() {
  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium mb-4">
            Why We Exist
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Knowledge Should Be{" "}
            <span className="text-[#ff5b3e]">Free</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're building a world where anyone can learn, contribute, and grow—without financial or geographic barriers.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Large Card - Mission */}
          <div className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl bg-gradient-hero p-8 lg:p-12 group">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary-foreground/10 blob opacity-50" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 blob" style={{ animationDelay: "-3s" }} />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl lg:text-4xl font-bold text-primary-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
                  To create a supportive ecosystem where anyone regardless of their experience level can learn, grow, and succeed. By offering hands-on training, mentorship programs, and real-world projects
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground">5+</div>
                  <div className="text-sm text-primary-foreground/60">Countries</div>
                </div>
                <div className="w-px h-12 bg-primary-foreground/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground">100+</div>
                  <div className="text-sm text-primary-foreground/60">Learners</div>
                </div>
                <div className="w-px h-12 bg-primary-foreground/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground">20+</div>
                  <div className="text-sm text-primary-foreground/60">Mentors</div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Reach */}
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 p-6 lg:p-8 card-hover group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary-light mb-4">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Global Reach
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Breaking down geographical barriers to create a truly global learning community across 5+ countries.
              </p>
            </div>
          </div>

          {/* Open Source */}
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 p-6 lg:p-8 card-hover group">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-light mb-4">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Open Source First
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All materials are open source; transparency, collaboration, and community-driven development.
              </p>
            </div>
          </div>

          {/* Community Driven */}
          <div className="relative overflow-hidden rounded-3xl bg-secondary p-6 lg:p-8 card-hover group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur-sm mb-4">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-secondary-foreground mb-2">
                Community Driven
              </h3>
              <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                Built by the community, for the community. Every contribution matters.
              </p>
            </div>
          </div>

          {/* Volunteer Led */}
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 p-6 lg:p-8 card-hover group">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-light mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Volunteer Led
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Powered by passionate volunteers who believe in giving back.
              </p>
            </div>
          </div>

          {/* Always Evolving */}
          <div className="relative overflow-hidden rounded-3xl bg-accent p-6 lg:p-8 card-hover group">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur-sm mb-4">
                <Zap className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-accent-foreground mb-2">
                Always Evolving
              </h3>
              <p className="text-accent-foreground/80 text-sm leading-relaxed">
                Constantly updating content to match industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
