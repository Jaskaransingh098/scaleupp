"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import WhyChart from "../ui/why-chart";

const stats = [
  { value: "4+", label: "Years Of Experience" },
  { value: "$306,999", label: "Revenue In Pipeline Generated" },
  { value: "100 Millions", label: "Organic Views Generated" },
  { value: "549,999", label: "Accumulated Client Followers" },
];

const StatCard = ({ value, label }: { value: string; label: string }) => {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Extract only digits for CountUp
  const numericValue = value.replace(/[^\d]/g, "");

  // Keep only suffix symbols like "+" or "Millions"
  const suffix = value.replace(/[\d.,$]/g, "").trim();

  // Add $ only for revenue
  const isRevenue = label.toLowerCase().includes("revenue");

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center p-8  bg-white/5 backdrop-blur-sm rounded-3xl hover:bg-white/10 transition-all duration-300 overflow-hidden text-center min-h-[200px]"
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      <div className="relative z-10 flex flex-col gap-2">
        <p className="text-[50px] leading-tight font-semibold text-text-primary">
          {startCount ? (
            <>
              {isRevenue && "$"}
              <CountUp
                end={parseInt(numericValue)}
                duration={2.5}
                separator=","
              />
              {suffix && ` ${suffix}`}
            </>
          ) : (
            "0"
          )}
        </p>
        <p className="text-lg text-text-secondary">{label}</p>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const animationName = "stats-scroll";

  return (
    <section
      id="result-analytics"
      className="w-full pt-32 px-6 overflow-x-hidden mt-[10px]"
    >
      <style>
        {`
                @keyframes ${animationName} {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
                .animate-${animationName} {
                    animation: ${animationName} 40s linear infinite;
                }
                `}
      </style>
      <div className="flex flex-col items-center text-center">
        {/* Top badge */}
        <div className="bg-[rgba(53,58,82,0.4)] border border-border/50 rounded-full px-4 py-2 top-2">
          <p className="text-lg text-text-secondary">Results & Analytics</p>
        </div>

        {/* Main heading */}
        <h2
          className="px-7 pt-7 pb-3 text-4xl md:text-5xl font-bold leading-tight md:leading-[56px]
      bg-black/30 backdrop-blur-2xl border border-white/30 
      rounded-full shadow-lg"
        >
          Why{" "}
          <span
            className="bg-[linear-gradient(to_right,#d38312,#a83279)] bg-clip-text text-transparent font-bold"
            style={{
              fontFamily: "Times New Roman, serif",
              fontStyle: "italic",
            }}
          >
            Choose us?
          </span>
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto mt-20">
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
      <div>
        <WhyChart />
      </div>
    </section>
  );
};

export default StatsSection;
