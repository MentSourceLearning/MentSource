import { useEffect, useRef } from "react";

const partners = [
  { name: "GitHub", logo: "🐙" },
  { name: "Mozilla", logo: "🦊" },
  { name: "Linux Foundation", logo: "🐧" },
  { name: "freeCodeCamp", logo: "🔥" },
  { name: "Khan Academy", logo: "📚" },
  { name: "Coursera", logo: "📖" },
  { name: "MIT OpenCourseWare", logo: "🎓" },
  { name: "The Odin Project", logo: "⚔️" },
  { name: "W3Schools", logo: "🌐" },
  { name: "Stack Overflow", logo: "📋" },
];

export function PartnersMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5;
      if (scrollPos >= scrollElement.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollElement.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 bg-muted/50 overflow-hidden border-y border-border/50">
      <div className="container-main mb-6">
        <p className="text-center text-sm text-muted-foreground font-medium uppercase tracking-wider">
          Trusted by learners from organizations worldwide
        </p>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-12 overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/50 shrink-0"
          >
            <span className="text-2xl">{partner.logo}</span>
            <span className="text-sm font-medium text-foreground">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
