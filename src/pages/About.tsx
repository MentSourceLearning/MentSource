import { Heart, Target, Eye, Users, Award, Globe } from "lucide-react";

const team = [
  {
    name: "Peculiar C Umeh",
    role: "Program Manager",
    bio: "Open-source advocate and community builder",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGyCnHyrthPtQ/profile-displayphoto-crop_800_800/B4EZuDvfpOIwAI-/0/1767441838409?e=1770854400&v=beta&t=2RMjJBBfnZwWs4JeeymvhxcGjlfFIgSESf588CQcgZw",
  },
  {
    name: "Marcus Thompson",
    role: "Head of Programs",
    bio: "Open-source advocate and community builder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Aisha Patel",
    role: "Director of Mentorship",
    bio: "Passionate about accessible education globally",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "CTO",
    bio: "Former tech lead building learning platforms",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
];

const values = [
  {
    icon: Heart,
    title: "Accessibility First",
    description: "Every decision we make prioritizes accessibility for learners of all backgrounds.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "We design for a worldwide audience, respecting cultural differences and needs.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our community shapes our direction through open feedback and collaboration.",
  },
  {
    icon: Award,
    title: "Quality Education",
    description: "We never compromise on the quality of learning materials and experiences.",
  },
];

const milestones = [
  { year: "2026", title: "1K Community", description: "Growing stronger every day" },
  { year: "2025", title: "Partnerships", description: "Partnered with major tech companies" },
  { year: "2024", title: "Open Source", description: "All curriculum made open source" },
  { year: "2023", title: "Global Expansion", description: "Launched in 3+ countries" },
  { year: "2022", title: "50+ Learners", description: "Reached our first major milestone" },
  { year: "2021", title: "Founded", description: "Started with 10 learners and 5 mentors" },
];

const About = () => {
  return (
    <>
      {/* Hero */}
        <section className="section-padding bg-gradient-hero relative overflow-hidden">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
                About MentSource
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Empowering Learners{" "}
                <span className="text-[#5a85fe]">Worldwide</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                We're an open-source community dedicated to empowering beginners and developers by equipping them with the skills they need to thrive in the tech industry. Our community serves as a hub for learning, collaboration, and innovation, helping individuals build meaningful careers while contributing to impactful open-source projects.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
              <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container-main">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 rounded-3xl bg-gradient-card border border-border/50">
                <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center mb-6">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At NICUB, our mission is to create a supportive ecosystem where anyone regardless of their experience level can learn, grow, and succeed. By offering hands-on training, mentorship programs, and real-world projects, we aim to transform beginners into skilled developers and enable experienced contributors to refine their expertise while giving back to the open-source ecosystem.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-gradient-card border border-border/50">
                <div className="w-14 h-14 rounded-2xl bg-secondary-light text-secondary flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a world where technology is accessible to everyone, and collaboration drives innovation. NICUB strives to: Cultivate a global network of developers passionate about open source. Lead the way in bridging the gap between education and industry needs. Create inclusivity, ensuring equal opportunities for individuals from diverse backgrounds to succeed in tech.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-main">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground">
                These principles guide everything we do
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-6 rounded-2xl bg-card border border-border/50 card-hover">
                  <value.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding">
          <div className="container-main">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground">
                From humble beginnings to a global community
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center gap-8 mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                      <div className="p-6 rounded-2xl bg-card border border-border/50 inline-block">
                        <span className="text-primary font-bold text-lg">{milestone.year}</span>
                        <h3 className="font-display font-semibold text-foreground mt-1">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-gradient-soft" id="team">
          <div className="container-main">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground">
                Passionate individuals dedicated to our mission
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="relative mb-4 inline-block">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto ring-4 ring-border group-hover:ring-primary transition-all"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
};

export default About;
