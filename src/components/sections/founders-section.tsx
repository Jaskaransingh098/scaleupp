import Image from "next/image";
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import React from "react";
import InfoCards from "../ui/profile-cards";

interface SocialItem {
  icon: React.ElementType;
  href: string;
  name: string;
}

interface Founder {
  name: string;
  description: string;
  image: string;
  socials: SocialItem[];
}
const card1Data = {
  name: "Madhav Singhla",
  title: "Co-Founder, Production & Ops",
  description:
    "Madhav left his job to pursue his passion for media, launching his own agency Madnis Media before co-founding Aevo Media Labs. With 3 years in video production and editing, he specializes in building efficient workflows — from batch recording sessions to multi-platform repurposing. His role ensures clients can record once and walk away with a full funnel of content.",
  // Using a high-quality placeholder image
  imageUrl:
    "/other.png",
};

// Data for a second, example card
const card2Data = {
  name: "Waleed",
  title: "Co-Founder, Growth & Strategy",
  description:
    "Waleed has spent the past years building content systems end-to-end for agencies, founders, and consultants. From scripting to editing to scaling funnels, he’s refined the exact process that consistently drives inbound leads. At Aevo Media Labs, he focuses on strategy and growth — making sure every piece of content leads to qualified calls, not vanity metrics.",
  imageUrl:
    "/maddy.png",
};

const SocialIcon: React.FC<SocialItem> = ({ icon: Icon, href, name }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Link to ${name}`}
  >
    <div className="w-11 h-11 flex items-center justify-center bg-primary/10 rounded-lg group hover:bg-primary/20 transition-colors">
      <Icon className="w-5 h-5 text-primary" />
    </div>
  </a>
);

export default function FoundersSection() {
  return (
    <section id="founders" className="relative py-[100px] bg- overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* <Image
          src="https://framerusercontent.com/images/XBtz1phaWuFmJnHyQtKgezPJHUU.png"
          alt="Background Design"
          width={1440}
          height={729}
          className="absolute top-[-193px] left-[-140px] pointer-events-none"
        />
        <Image
          src="https://framerusercontent.com/images/XBtz1phaWuFmJnHyQtKgezPJHUU.png"
          alt="Background Design"
          width={1440}
          height={729}
          className="absolute bottom-[-202px] left-[-140px] pointer-events-none"
        /> */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-[60px] ">
          <div
            className="bg-black/30 backdrop-blur-2xl border border-white/30 
      rounded-full shadow-lg p-4"
          >
            <h2 className="text-[48px] font-semibold text-text-primary leading-[56px]">
              Meet our{" "}
              <span className="bg-[linear-gradient(to_right,#d38312,#a83279)] bg-clip-text text-transparent font-bold">
                Founders
              </span>
            </h2>
          </div>
          <p className="mt-4 text-lg text-white">
            Wonder who's behind all this creative goodness? Say hello to our
            crew of superheroes.
          </p>
        </div>
        {/* <InfoCards /> */}
        <div className="bg-transparent min-h-screen w-full flex flex-wrap items-center justify-center gap-8 p-0">
          <InfoCards {...card1Data} />
          <InfoCards {...card2Data} />
        </div>
      </div>
    </section>
  );
}
