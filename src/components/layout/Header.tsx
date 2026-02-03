import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", icon: null },
  { name: "About Us", href: "/about", icon: null },
  { name: "Projects", href: "/projects", icon: null },
  { name: "Mentorship", href: "/mentorship", icon: null },
  { name: "Community", href: "/community", icon: null },
  { name: "Contact", href: "/contact", icon: null },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "bg-background/80 backdrop-blur-md border-b border-transparent"
      )}
    >
      <nav className="container-main">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group flex-shrink-0"
            aria-label="MentSource Home"
          >
            <img src="./logo4.png" className="h-[50px] w-[60px]" alt="" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-0" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold transition-all duration-300",
                  "group overflow-hidden",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-gray-900 hover:text-foreground"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Underline animation */}
                <span
                  className={cn(
                    "absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-secondary",
                    "transform origin-left transition-all duration-300",
                    location.pathname === item.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-primary/30 hover:border-primary/60 hoverbg-primary/5"
            >
              <Link to="/community">Volunteer</Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="gap-2 shadow-lg hover:shadow-xl transition-shadow bg-base"
            >
              {/* <Link to="/donate"> */}
              <div>
                <Heart className="h-4 w-4" />
                <span>Donate</span>
              </div>
              {/* </Link> */}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              "lg:hidden p-2.5 rounded-lg transition-all duration-200",
              "hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/40"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden animate-in fade-in slide-in-from-top-2 duration-300"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="border-t border-border/40 bg-gradient-to-b from-background/50 to-background/80 py-4 px-0">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200",
                      "relative overflow-hidden group",
                      location.pathname === item.href
                        ? "text-primary bg-primary-light"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {location.pathname === item.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 -z-0" />
                    )}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-border/40">
                <Button
                  variant="outline"
                  className="w-full rounded-lg"
                  asChild
                >
                  <Link to="/get-involved">Volunteer</Link>
                </Button>
                <Button
                  variant="warm"
                  className="w-full gap-2 shadow-md"
                  asChild
                >
                  <Link to="/donate">
                    <Heart className="h-4 w-4" />
                    Donate
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
