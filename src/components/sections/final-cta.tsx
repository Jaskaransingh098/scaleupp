"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Check } from "lucide-react";

const features = [
  { text: "24/7 support" },
  { text: "Unlimited funnel" },
  { text: "Youtube Management" },
];

const FinalCtaSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full py-[120px] bg-transparent text-foreground overflow-x-clip"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className="inline-block bg-black/30 backdrop-blur-2xl border border-white/30 
  rounded-full shadow-lg px-10 py-5 mx-auto text-center"
        >
          <h1 className="flex items-center justify-center gap-0 text-[50px] font-bold leading-[60px] text-text-primary whitespace-nowrap">
            Stop posting
            <X
              className="w-20 h-20 stroke-[2.5]"
              style={{
                // stroke: "url(#grad)",
                fill: "white",
              }}
            />
            <span
              className="bg-[linear-gradient(to_right,#d38312,#a83279)] bg-clip-text text-transparent text-[55px] font-bold italic"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Start selling
            </span>
            <Check
              className="w-20 h-20 stroke-[2.5]"
              style={{
                stroke: "url(#grad)",
                fill: "transparent",
              }}
            />
            {/* gradient definition */}
            <svg width="0" height="0">
              <defs>
                <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                  <stop stopColor="#d38312" offset="0%" />
                  <stop stopColor="#a83279" offset="100%" />
                </linearGradient>
              </defs>
            </svg>
          </h1>
        </div>

        <div className="mt-[50px] max-w-3xl mx-auto">
          <div className="relative p-[1px] ">
            <div className="bg- rounded-[19px] p-10 flex flex-col items-center">
              <h2 className="text-[40px] font-semibold leading-[48px] text-text-primary text-center">
                Get your{" "}
                <span
                  className="inline-block px-5 py-2 rounded-full 
    bg-white/10 backdrop-blur-md border border-white/20 
    shadow-[0_0_15px_rgba(255,255,255,0.1)] text-white"
                >
                  free strategy audit
                </span>
              </h2>

              

              <p className="mt-2.5 text-base text-secondary-foreground text-center">
                And see how The Social Selling System™ can fill your calendar
                in 111 days.
              </p>

              {/* <div className="mt-10 flex justify-center items-center gap-10 flex-wrap">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 flex-shrink-0">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/kWedhcFiMFVAegynh5rxadiQA0-21.svg?"
                        alt="Tick icon"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="text-lg text-secondary-foreground whitespace-nowrap">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div> */}

              <div className="relative mt-10 w-fit">
                {/* Calendly Embed */}
                <div
                  className="calendly-inline-widget w-full md:w-[1030px] h-[900px] md:h-[900px] mx-auto"
                  data-url="https://calendly.com/aevolabs/30min?primary_color=8a15a0"
                />

                {/* CTA Button */}
                {/* <Link
                  href="#contact"
                  className="relative z-10 inline-block mt-6 py-4 px-8 text-lg font-semibold text-white bg-gradient-to-b from-primary to-[#3c78da] rounded-xl shadow-[0_10px_30px_0_rgba(66,133,244,0.3)] transition-transform hover:-translate-y-0.5"
                >
                  Claim Your Free Audit
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
