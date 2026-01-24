import { useState } from "react";
import { Mail, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container-main">
        <div className="relative rounded-3xl bg-gradient-hero p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          {/* Floating Icons */}
          <div className="absolute top-8 right-8 lg:right-16 animate-float">
            <div className="p-3 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <div className="absolute bottom-8 left-8 lg:left-16 animate-float" style={{ animationDelay: "-2s" }}>
            <div className="p-3 rounded-2xl bg-secondary/30 backdrop-blur-sm">
              <Sparkles className="h-6 w-6 text-secondary-foreground" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
              <Mail className="h-4 w-4" />
              Stay Updated
            </span>
            
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Join 100+ Learners
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Get weekly learning tips, new course announcements, and community highlights delivered to your inbox.
            </p>

            {isSubscribed ? (
              <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-secondary" />
                <span className="text-primary-foreground font-medium">
                  Thanks for subscribing! Check your inbox for a welcome email.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  className="h-12 px-8"
                >
                  Subscribe
                </Button>
              </form>
            )}

            <p className="mt-4 text-xs text-primary-foreground/60">
              No spam, unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
