import { Button } from "@/components/ui/button";
import {
  Users, Code, PenTool, Globe, ArrowRight,
  MessageCircle, BookOpen, Megaphone, Briefcase
} from "lucide-react";
import { navigateTo } from "@/lib/utils";

const volunteerRoles = [
  {
    icon: Users,
    title: "Mentor",
    description: "Guide learners 1-on-1 through their journey. Just 2-4 hours per month.",
    commitment: "2-4 hrs/month",
    color: "primary",
  },
  {
    icon: Code,
    title: "Content Creator",
    description: "Help create courses, tutorials, and learning materials.",
    commitment: "5-10 hrs/month",
    color: "secondary",
  },
  {
    icon: PenTool,
    title: "Designer",
    description: "Improve our learning experience with better design and UX.",
    commitment: "5-10 hrs/month",
    color: "accent",
  },
  {
    icon: MessageCircle,
    title: "Community Moderator",
    description: "Help maintain our welcoming community spaces.",
    commitment: "3-5 hrs/week",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Translator",
    description: "Help translate our content to reach more learners globally.",
    commitment: "Flexible",
    color: "secondary",
  },
  {
    icon: Megaphone,
    title: "Ambassador",
    description: "Spread the word about MentSource in your community.",
    commitment: "Flexible",
    color: "accent",
  },
];

const partnerTypes = [
  {
    icon: Briefcase,
    title: "Corporate Partners",
    description: "Sponsor programs, provide mentors, or offer job opportunities to our learners.",
  },
  {
    icon: BookOpen,
    title: "Educational Institutions",
    description: "Collaborate on curriculum, research, or student programs.",
  },
  {
    icon: Code,
    title: "Tech Companies",
    description: "Sponsor open-source projects or provide learning resources.",
  },
];

const GetInvolved = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
              Join Our Community
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Make a{" "}
              <span className="text-gradient-primary">Difference</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Whether you have 2 hours or 20, there's a way for you to contribute. Join thousands of volunteers making education accessible worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-muted-foreground">
              Find the role that matches your skills and availability
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role) => (
              <div key={role.title} className="group p-6 rounded-2xl bg-card border border-border/50 card-hover">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${role.color === "primary"
                      ? "bg-primary-light text-primary"
                      : role.color === "secondary"
                        ? "bg-secondary-light text-secondary"
                        : "bg-accent-light text-accent"
                    }`}
                >
                  <role.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{role.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{role.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    {role.commitment}
                  </span>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Apply <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="default" size="lg" asChild>
              <div>
                Apply to Volunteer
                <ArrowRight className="h-4 w-4" />
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-light text-secondary text-sm font-medium mb-4">
                Partnerships
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Partner With Us
              </h2>
              <p className="text-muted-foreground mb-8">
                Join leading organizations in our mission to democratize education. Together, we can reach more learners and create greater impact.
              </p>
              <div className="space-y-6">
                {partnerTypes.map((partner) => (
                  <div key={partner.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center">
                      <partner.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{partner.title}</h3>
                      <p className="text-sm text-muted-foreground">{partner.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" className="mt-8" asChild>
                <div onClick={()=> navigateTo("/contact")} className="cursor-pointer">
                  Become a Partner
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-hero p-8 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-6xl font-bold mb-2">50+</div>
                  <div className="text-xl font-medium opacity-80">Partner Organizations</div>
                  <div className="mt-6 text-sm opacity-60">Including Fortune 500 companies</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 blob" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
