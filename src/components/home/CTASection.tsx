import { ArrowRight, Heart, Users, BookOpen, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigateTo } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 sm:p-10 lg:p-12 lg:row-span-2">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 blob" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 blob" style={{ animationDelay: "-4s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
                  <Rocket className="h-4 w-4" />
                  Start Your Journey
                </div>
                
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                  Ready to Transform Your Future?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                  Join dedicated learners worldwide. Whether you want to learn, teach, or contribute; there's a place for you here.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero-outline" size="xl" asChild>
                    <div onClick={()=>navigateTo("/projects")} className="cursor-pointer">
                      <BookOpen className="h-5 w-5" />
                      Explore Projects
                    </div>
                  </Button>
                  <Button variant="warm" size="xl" asChild>
                    <div onClick={()=>navigateTo("/community")} className="cursor-pointer">
                      <Users className="h-5 w-5" />
                      Get Involved
                    </div>
                  </Button>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="mt-10 pt-8 border-t border-primary-foreground/20">
                <p className="text-primary-foreground/70 italic mb-4">
                  "Being a mentor at MentSource is incredibly rewarding"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQGyCnHyrthPtQ/profile-displayphoto-crop_800_800/B4EZuDvfpOIwAI-/0/1767441838409?e=1770854400&v=beta&t=2RMjJBBfnZwWs4JeeymvhxcGjlfFIgSESf588CQcgZw"
                    alt="Peculiar C Umeh"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-primary-foreground">Peculiar C Umeh</p>
                    <p className="text-xs text-primary-foreground/60">Project Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary CTA - Become a Mentor */}
          <div className="relative overflow-hidden rounded-3xl bg-[#ff5b3e] p-8 group card-hover">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-6">
                <Users className="h-7 w-7 text-secondary-foreground" />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-secondary-foreground mb-3">
                Become a Mentor
              </h3>
              <p className="text-secondary-foreground/80 mb-6">
                Share your expertise and help shape the next generation of developers.
              </p>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-secondary-foreground hover:bg-secondary-foreground/10 p-0 h-auto"
                asChild
              >
                <div onClick={()=>navigateTo("/mentorship")} className="flex items-center gap-2 cursor-pointer">
                  Apply Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Button>
            </div>
          </div>

          {/* Tertiary CTA - Support */}
          <div className="relative overflow-hidden rounded-3xl bg-[#5a85fe] p-8 group card-hover">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-6">
                <Heart className="h-7 w-7 text-accent-foreground" />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-accent-foreground mb-3">
                Support Our Mission
              </h3>
              <p className="text-accent-foreground/80 mb-6">
                Help us reach more learners and keep education free for everyone.
              </p>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-white hover:bg-accent-foreground/10 p-0 h-auto"
                asChild
              >
                <div onClick={()=>navigateTo("/")} className="flex items-center cursor-pointer gap-2 cursor-pointer">
                  Donate Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
