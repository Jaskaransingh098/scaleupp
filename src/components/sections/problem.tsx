"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DarkGradientBgProps {
  children?: React.ReactNode;
  className?: string;
}

function DarkGradientBg({ children, className }: DarkGradientBgProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-100"
          //   style={{
          //     background:
          //       "radial-gradient(100% 100% at 0% 0%, rgb(46, 46, 46) 0%, rgb(0, 0, 0) 100%)",
          //     mask: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
          //   }}
        >
          <div
            className="absolute inset-0 opacity-20"
            // style={{
            //   background:
            //     "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)",
            //   mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
            //   transform: "skewX(45deg)",
            // }}
          />
          <div
            className="absolute inset-0 opacity-20"
            // style={{
            //   background:
            //     "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)",
            //   mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
            //   transform: "skewX(45deg)",
            // }}
          />
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-5 bg-repeat"
        // style={{
        //   backgroundImage:
        //     'url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png")',
        //   backgroundSize: "149.76px",
        // }}
      />

      <div
        className="absolute inset-0 opacity-20"
        // style={{
        //   backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
        //   backgroundSize: "20px 20px",
        // }}
      />

      {/* <div className="absolute inset-0 bg-gradient-radial from-slate-800/20 via-transparent to-transparent" /> */}

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function ContentClientsSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <DarkGradientBg>
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <section className="relative py-0 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative z-10"
          >
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 mb-8"
              >
                {/* <Sparkles className="h-4 w-4 text-cyan-400" /> */}
                <span className="text-sm font-medium text-white">
                  The Problem
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
              >
                <span className="text-white font-bold">
                  Content ≠{" "}
                  <span
                    className="bg-[linear-gradient(to_right,#d38312,#a83279)] bg-clip-text text-transparent font-bold px-4 inline-block"
                    style={{
                      fontFamily: "Times New Roman, serif",
                      fontStyle: "italic",
                    }}
                  >
                    Client
                  </span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="space-y-6 mb-12"
              >
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
                  Most founders grind out videos, hire editors, chase trends…
                  and still have an{" "}
                  <span className="text-white font-medium relative inline-block">
                    empty calendar
                    {/* <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></span> */}
                  </span>
                  .
                </p>

                <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
                  The missing piece isn't effort — it's a{" "}
                  <span className="text-[#fcb045] font-medium">system</span>{" "}
                  that makes content{" "}
                  <span className="text-white font-semibold relative inline-block">
                    sell
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    />
                  </span>
                  .
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                {[
                  {
                    icon: <TrendingUp className="h-6 w-6 " />,
                    label: "Effort Without Results",
                    value: "Endless grind",
                  },
                  {
                    icon: <Calendar className="h-6 w-6" />,
                    label: "Empty Calendars",
                    value: "No bookings",
                  },
                  {
                    icon: <Users className="h-6 w-6" />,
                    label: "Missing Clients",
                    value: "Zero conversions",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemFadeIn}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300 blur-2xl"></div>
                    <div className="relative space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-cyan-500/10 p-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
                          {stat.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-400">
                          {stat.label}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Discover The System
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div> */}

              {/* <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1 }}
                  className="mt-16 flex flex-wrap items-center gap-6 text-sm text-gray-400"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>No more wasted effort</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"
                      style={{ animationDelay: "0.3s" }}
                    />
                    <span>Proven conversion system</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"
                      style={{ animationDelay: "0.6s" }}
                    />
                    <span>Fill your calendar</span>
                  </div>
                </motion.div> */}
            </div>
          </motion.div>

          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" /> */}
        </section>
      </div>
    </div>
    // </DarkGradientBg>
  );
}

export default function problem() {
  return <ContentClientsSection />;
}
