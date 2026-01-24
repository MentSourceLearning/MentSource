import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Is MentSource really free?",
    answer: "Yes! MentSource is 100% free for all learners. Our programs, courses, and mentorship are funded by donations and corporate sponsors who believe in accessible education.",
  },
  {
    question: "Do I need any prior experience to join?",
    answer: "Not at all! We have learning paths for complete beginners as well as advanced practitioners. Our mentors will help you find the right starting point based on your current skills.",
  },
  {
    question: "How does the mentorship program work?",
    answer: "You can browse our mentor directory and request to connect with mentors who match your interests. Mentors offer 1-on-1 sessions, code reviews, career guidance, and more.",
  },
  {
    question: "Can I become a mentor?",
    answer: "Absolutely! If you have expertise to share, we'd love to have you. Just visit our 'Become a Mentor' page and fill out the application. We welcome mentors at all experience levels.",
  },
  {
    question: "What technologies do you cover?",
    answer: "We cover a wide range including Web Development (HTML, CSS, JavaScript, React, Node.js), UI/UX Design, Data Science, Cybersecurity, Cloud Computing, and more. New courses are added regularly.",
  },
  {
    question: "How can my company partner with MentSource?",
    answer: "We offer various partnership opportunities including sponsorship, employee volunteering programs, and curriculum development. Contact us at partnerships@MentSource.org to discuss.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
              Common Questions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked{" "}
              <span className="text-[#ff5b3e]">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions? We've got answers. If you can't find what you're looking for, feel free to reach out.
            </p>

            <div className="p-6 rounded-2xl bg-muted/50 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-light">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Still have questions?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Can't find the answer you're looking for? Our team is here to help.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-2xl px-6 data-[state=open]:bg-muted/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
