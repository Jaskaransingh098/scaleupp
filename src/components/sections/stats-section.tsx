"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import WhyChart from "../ui/why-chart";

const stats = [
  { value: "3+", label: "Years Of Experience" },
  { value: "₹8,399", label: "Revenue In Pipeline Generated" },
  { value: "34,999+", label: "Organic Views Generated" },
  { value: "1,999+", label: "Accumulated Client Followers" },
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
      { threshold: 0.5 } // trigger when 50% visible
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // extract only digits for animation
  const numericValue = value.replace(/[^\d]/g, "");

  // Keep only suffix symbols like "+" but remove ₹ or $
  const suffix = value.replace(/[\d.,₹$]/g, "");

  const isCurrency = value.includes("₹") || value.includes("$");

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center p-8 bg-card border border-border rounded-3xl overflow-hidden text-center min-h-[200px]"
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      <div className="relative z-10 flex flex-col gap-2">
        <p className="text-[50px] leading-tight font-semibold text-text-primary">
          {startCount ? (
            <>
              {isCurrency && "₹"}
              <CountUp
                end={parseInt(numericValue)}
                duration={2.5}
                separator=","
              />
              {suffix}
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
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
        <div className="bg-[rgba(53,58,82,0.4)] border border-border/50 rounded-full px-4 py-2 inline-block">
          <p className="text-lg text-text-secondary">Results & Analytics</p>
        </div>
        <div
          className=" bg-black/30 backdrop-blur-2xl border border-white/30 
      rounded-full shadow-lg p-4 relative z-20"
        >
          <h2 className="text-5xl font-light text-text-primary">
            Why{" "}
            <span className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent font-light">
              Choose us?
            </span>
          </h2>
        </div>
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
