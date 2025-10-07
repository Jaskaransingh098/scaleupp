"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Scissors, Workflow, PhoneCall } from "lucide-react";
// import { BarChart3, CalendarClock, Frown } from "lucide-react";

interface PainPoint {
  icon: React.ElementType;
  title: string;
  description: string;
}

const painPointsData: PainPoint[] = [
  {
    icon: Scissors,
    title: "Turn Long Videos into a Waterfall of Content",
    description:
      "We repurpose your long-form videos into shorts, posts, and more — giving you consistent content without extra effort.",
  },
  {
    icon: Workflow,
    title: "Pull Prospects into a Simple Pre-Call Flow",
    description:
      "Guide your prospects smoothly from content → pre-call flow → strategy call with a proven system.",
  },
  {
    icon: PhoneCall,
    title: "Book 10–15 Qualified Strategy Calls/Month — Guaranteed",
    description:
      "Our process is designed to fill your calendar with qualified calls — not just views or likes.",
  },
];

const PainPoints = () => {
  return (
    <section className="relative z-10 pt-10 pb-30 bg-transparent text-white ">
      <div className="container mx-auto px-6 z-20">
        <div className="flex justify-center relative mb-16">
          {/* The Solution pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 -top-5
               inline-flex items-center gap-2 
               rounded-full bg-[linear-gradient(to_right,rgba(211,131,18,0.3),rgba(168,50,121,0.3))] 
               backdrop-blur-sm px-4 py-2 border border-white/30 shadow-md z-30"
          >
            <span className="text-sm font-medium text-white">The Solution</span>
          </motion.div>

          {/* The Social Selling System */}
          <div className="text-center">
            <h2
              className="inline-block px-7 pt-7 py-3 text-4xl md:text-5xl font-bold leading-tight md:leading-[56px] 
      bg-black/30 backdrop-blur-2xl border border-white/30 
      rounded-full shadow-lg"
            >
              The Social{" "}
              <span
                className="bg-[linear-gradient(to_right,#d38312,#a83279)] bg-clip-text text-transparent font-bold"
                style={{
                  fontFamily: "Times New Roman, serif",
                  fontStyle: "italic",
                }}
              >
                Selling System™
              </span>
            </h2>

            <p className="pt-7 text-2xl">A 111-day content funnel that:</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-30">
          {painPointsData.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="relative  bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-border rounded-3xl p-8 overflow-hidde h-full"
              >
                {/* <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/WcrHWFTN7cBpOOCJ3uhVkpsJXQ-4.svg?"
                  alt="Card background pattern"
                  width={378}
                  height={237}
                  className="absolute top-0 left-0 w-full h-auto object-cover pointer-events-none mix-blend-plus-lighter"
                /> */}
                <div className="absolute top-0 left-0 w-full h-0.5 z-20" />
                <div className="relative z-20 flex flex-col items-start gap-6 h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold text-text-primary leading-7">
                      {point.title}
                    </h3>
                    <p className="text-white">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            <span className="text-white font-medium">
              You record. We handle the rest.
            </span>
          </p>
          <motion.a
            href="#apply"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-full shadow-lg"
          >
            <Link
              href="#contact"
              // className="inline-block mb-6 px-8 py-4 text-base font-medium "
            >
              Apply for Your 111-Day Sprint
            </Link>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
