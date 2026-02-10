import { Link } from "react-router-dom";
import { Heart, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { navigateTo } from "@/lib/utils";

const footerLinks = {
  organization: [
    { name: "About Us", href: "/about" },
    { name: "Our Mentors", href: "/about" },
  ],
  programs: [
    { name: "Learning Paths", href: "/programs" },
    { name: "Mentorship", href: "/mentorship" },
  ],
  getInvolved: [
    { name: "Become a Mentor", href: "/mentorship#become-mentor" },
    { name: "Volunteer", href: "/get-involved" },
    { name: "Partner With Us", href: "/contact" },
  ],
  resources: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Email", icon: Mail, href: "mailto:hello@MentSource.org" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-main py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div onClick={() => navigateTo("/")} className="flex items-center gap-2 mb-4">
              <img src="./logo3.png" className="h-[60px] w-[80px]" alt="" />
            </div>
            <p className="text-background/60 mb-6 max-w-sm">
              Making learning, open-source collaboration, and mentorship accessible to everyone, everywhere.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background/60 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-display font-semibold text-background mb-4">Organization</h3>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <p
                    onClick={()=> navigateTo(link.href)}
                    className="text-background/60 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-background mb-4">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <p
                    onClick={()=> navigateTo(link.href)}
                    className="text-background/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-background mb-4">Get Involved</h3>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <p
                    onClick={()=> navigateTo(link.href)}
                    className="text-background/60 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-background mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <p
                    onClick={()=> navigateTo(link.href)}
                    className="text-background/60 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} MentSource Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
