import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, MapPin, MessageCircle, Send, CheckCircle
} from "lucide-react";
import { toast } from "sonner";
import { EMAILJS_CONFIG, RECIPIENT_EMAIL } from "@/config/emailjs";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries",
    value: "mentsource.1@gmail.com",
    action: "mailto:mentsource.1@gmail.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    value: "Nigeria",
    action: null,
  },
  {
    icon: MessageCircle,
    title: "Community",
    description: "Join our Github",
    value: "github.com/MentSource",
    action: "https://github.com/MentSource",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Send the email
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: RECIPIENT_EMAIL,
          subject: formData.subject,
          message: formData.message,
        }
      );

      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-hero">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
                Get in Touch
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                We'd Love to{" "}
                <span className="text-gradient-primary">Hear From You</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Have a question, suggestion, or want to partner with us? We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12">
          <div className="container-main">
            <div className="grid sm:grid-cols-3 gap-6">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className="p-6 rounded-2xl bg-card border border-border/50 text-center card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  {method.action ? (
                    <a
                      href={method.action}
                      target={method.action.startsWith("http") ? "_blank" : undefined}
                      rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-primary font-medium hover:underline"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="text-foreground font-medium">{method.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding">
          <div className="container-main">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-3xl border border-border/50 p-8 sm:p-10 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-main text-center">
            <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Looking for Quick Answers?
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out our docs for immediate help on common issues
            </p>
            <Button variant="outline" asChild>
              <a href="">Read Docs</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
