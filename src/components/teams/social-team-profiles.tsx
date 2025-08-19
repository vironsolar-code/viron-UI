"use client"

import { Github, Twitter, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";

// Use DiceBear API for avatars
const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Rajesh%20Kumar",
    bio: "Rajesh founded Viron Solar with 15+ years in renewable energy, dedicated to making solar accessible to every Indian household.",
    social: { twitter: "#", github: "#" },
  },
  {
    name: "Priya Sharma",
    role: "Technical Head",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Priya%20Sharma",
    bio: "Priya leads our technical team with expertise in solar system design and installation across diverse Indian climates.",
    social: { twitter: "#", github: "#" },
  },
  {
    name: "Amit Patel",
    role: "Operations Manager",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Amit%20Patel",
    bio: "Amit ensures seamless project execution and quality installations with 12+ years in solar operations management.",
    social: { twitter: "#" },
  },
  {
    name: "Sunita Reddy",
    role: "Customer Success Lead",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sunita%20Reddy",
    bio: "Sunita guides customers through their solar journey, ensuring maximum satisfaction and energy savings.",
    social: { twitter: "#" },
  },
  {
    name: "Vikram Singh",
    role: "Installation Specialist",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Vikram%20Singh",
    bio: "Vikram leads our certified installation team with expertise in rooftop solar systems across India.",
    social: { twitter: "#" },
  },
  {
    name: "Kavya Menon",
    role: "Energy Consultant",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Kavya%20Menon",
    bio: "Kavya helps customers optimize their energy usage and maximize solar savings with personalized consultations.",
    social: { twitter: "#" },
  },
];

const SocialTeamProfiles = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container">
        <div className="flex flex-col gap-6 py-4 lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm border-primary/20"
          >
            <Users className="size-4 text-primary" />
            <span className="text-primary font-medium">Our Team</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl text-neutral-black font-[var(--font-display)]">
            Meet the Solar Experts
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-neutral-gray font-[var(--font-body)]">
            Our mission at Viron Solar is to make clean, affordable solar energy accessible to every home across India. Meet the passionate experts making this vision a reality.
          </p>
        </div>
        <div className="mt-10 grid gap-x-12 gap-y-16 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="group flex flex-col">
              <img
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full object-contain"
              />
              <div className="mt-6 flex flex-col tracking-[-0.32px]">
                <h3 className="text-lg text-neutral-black font-[var(--font-display)] font-semibold">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="mt-4 text-sm tracking-[-0.36px] text-neutral-gray font-[var(--font-body)]">
                  {member.bio}
                </p>
                <div className="mt-6 flex gap-2">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-neutral-gray hover:text-primary transition-colors"
                    >
                      <Twitter />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-neutral-gray hover:text-primary transition-colors"
                    >
                      <Github />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SocialTeamProfiles };