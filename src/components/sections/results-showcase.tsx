"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

const gridItems = [
  {
    src: "/testimonials/first.jpg",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    src: "/testimonials/fourth.png",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    src: "/testimonials/fifth.png",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    src: "/testimonials/second.jpg",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    src: "/testimonials/third.jpg",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    src: "/testimonials/six.png",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    src: "/testimonials/seven.png",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    src: "/testimonials/eight.png",
    className: "md:col-span-2 lg:col-span-2",
  },
];

const ResultsShowcase = () => {
  return (
    <section className="relative isolate z-20 p-10 lg:py-32 w-[93vw] mx-auto rounded-4xl overflow-hidden min-h-[600px]">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/pics-bg1.mp4" type="video/mp4" />
      </video>

      {/* Overlay to make content readable */}
      <div className="absolute inset-0 bg-gray-900 rounded-4xl z-10"></div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-4xl lg:text-[48px] lg:leading-[56px] font-semibold text-white">
            We Actually{" "}
            <span className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent font-bold">
              Get Results
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-6 [grid-auto-flow:dense]">
          {gridItems.map((item, index) => (
            <div key={index} className={item.className}>
              <Image
                src={item.src}
                alt=""
                width={700}
                height={700}
                unoptimized
                className="w-[80vw] mx-auto h-auto rounded-4xl p-5 border-2 border-white/20 bg-white/0 backdrop-blur-sm shadow-sm"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-20">
          <a
            href="#contact"
            className="inline-block  p-4 text-white bg-white/20 backdrop-blur-2xl 
             border border-white/30 
             rounded-full shadow-lg 
             hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Apply To Work With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
