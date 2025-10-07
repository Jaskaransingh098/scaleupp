import Image from "next/image";
import { Check } from "lucide-react";

const processSteps = [
  {
    step: "Step 01",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/jJ6toYSKz9DtEMWJDpteC9pF1HM-10.svg?",
    title: "Blueprint",
    description: [
      "We design your funnel around your offer",
      "Define your customer journey & positioning",
      "Map out content pillars and funnel touchpoints",
    ],
  },
  {
    step: "Step 02",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/AXgyjaoddAArynSnELMK0OyXdTc-11.svg?",
    title: "Create",
    description: [
      "You record, we handle the rest",
      "Strategy, scripting, editing, publishing done-for-you",
      "Content adapted for YouTube, Shorts, Reels & more",
    ],
  },
  {
    step: "Step 03",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/7YvpqdgJKVCiaafRYxXpuUlwE-12.svg?",
    title: "Convert",
    description: [
      "Calls booked directly into your calendar",
      "Leads nurtured with strategic CTAs & funnels",
      "Turn viewers into clients with clear conversion flows",
    ],
  },
  {
    step: "Step 04",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/JQVOSvT8HSfik1as2hcjm0MO3I-13.svg?",
    title: "Scale",
    description: [
      "Analyze results & double down on what works",
      "Optimize campaigns monthly for higher ROI",
      "Expand reach across new platforms & audiences",
      "Build a repeatable system for growth",
    ],
  },
];

interface ProcessCardProps {
  step: string;
  icon: string;
  title: string;
  description: string[];
}

const ProcessCard = ({ step, icon, title, description }: ProcessCardProps) => {
  return (
    <div
      className="relative z-20 flex flex-col rounded-3xl border border-bord  bg-white/10 backdrop-blur-xl
 p-8 overflow-hidden"
    >
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/Vy5fY5tvzYvO3kc3PMsfNrzzvDY-8.svg?"
        alt="Card Background"
        layout="fill"
        className="object-cover"
      />
      {/* <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/3Cd1qIpK57EaM3E6bmDPd5xQ4-9.svg?"
        alt=""
        width={40}
        height={40}
        className="absolute top-4 left-4"
      /> */}
      <div className="absolute top-6 right-6 rounded-full px-3 py-1">
        <p className="text-sm text-white bg-gradient-to-r via-[#d38312] to-[#a83279]  md:rounded-full px-5 py-1">
          {step}
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        <div
          className="mt-8 w-10 h-10 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
          style={{
            WebkitMaskImage: `url(${icon})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
            maskImage: `url(${icon})`,
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
          }}
        />
        <h3 className="text-6xl font-semibold text-foreground">{title}</h3>
        <ul className="flex flex-col gap-3">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-success-green" />
              <span className="text-base leading-6 text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="relative z-20 bg-transparent py-32 overflow-hidden mt-[150px]"
    >
      {/* <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/pics-bg1.mp4" type="video/mp4" />
      </video> */}

      {/* Overlay to make content readable */}
      <div className="absolute inset-0 bg- rounded-4xl z-10"></div>
      <div className="container relative z-10 flex flex-col items-center gap-6">
        <div className="relative inline-flex items-center justify-center rounded-full border border-[rgba(107,163,255,0.2)]">
          {/* <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/IJB1pgcBugatOTAc7yAHhqLQu0-7.svg?"
            alt="Heading Background"
            layout="fill"
            className="rounded-full object-cover"
          /> */}
          <span className="relative border-2 border-amber-50 rounded-2xl z-10 py-2 px-4 text-base text-secondary-foreground">
            Process
          </span>
        </div>
        <div
          className=" bg-black/30 backdrop-blur-2xl border border-white/30 
      rounded-full shadow-lg p-4"
        >
          <h2 className="text-center text-[48px] font-bold leading-[56px] text-foreground max-w-3xl">
            Four steps,{" "}
            <span
              className="bg-[linear-gradient(to_right,#d38312,#a83279)] bg-clip-text text-transparent px-3 font-bold"
              style={{
                fontFamily: "Times New Roman, serif",
                fontStyle: "italic",
              }}
            >
              No fluff
            </span>
          </h2>
        </div>

        <div className="mt-20 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {processSteps.map((step) => (
            <ProcessCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
