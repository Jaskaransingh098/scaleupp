import React from "react";
import Link from "next/link";
import ScrollStack from "../ui/ScrollStack";

const CaseStudiesHeader = () => {
  const projects = [
    {
      title: "YouTube Growth System",
      description:
        "Scaled client channels from zero to consistent leads with a plug-and-play video system tailored for their niche and audience.",
      link: "https://images.unsplash.com/photo-1581276879432-15a19d654956?w=500&auto=format&fit=crop&q=60", // replace with your own
      color: "#d38312",
    },
    {
      title: "High-Converting Funnels",
      description:
        "Designed and optimized funnels that turned viewers into ready-to-buy leads, filling calendars with booked calls.",
      link: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60", // replace with relevant
      color: "#a83279",
    },
    {
      title: "Content That Converts",
      description:
        "Created short-form and long-form content strategies that positioned clients as market leaders and boosted conversion rates.",
      link: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60", // replace with relevant
      color: "#833ab4",
    },
  ];

  return (
    <section className="bg-transparent py-[20px] z-20">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 text-center">
        <div
          className="flex w-full max-w-[800px] flex-col items-center  bg-black/30 backdrop-blur-2xl border border-white/30 
      rounded-full shadow-lg p-2 relative z-20"
        >
          <h1 className="text-[48px] font-light leading-[56px] text-text-primary">
            Look at
          </h1>
          <h1 className="text-[48px] font-semibold leading-[56px]">
            <span className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent font-light">
              What We’ve Achieved So Far
            </span>
          </h1>
        </div>
        <ScrollStack projects={projects} />

        {/* <Link
          href="#contact"
          className="inline-block p-4 text-white bg-white/20 backdrop-blur-2xl 
             border border-white/30 
             rounded-full shadow-lg 
             hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Apply To Work With Us
        </Link> */}
      </div>
    </section>
  );
};

export default CaseStudiesHeader;
