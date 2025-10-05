"use client";

import { ArrowRight, Youtube, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative min-h-screen bg-[#020B1F] overflow-hidden flex flex-col z-20">
      {/* 3D Perspective Grid Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
            </linearGradient>
          </defs>

          {/* Vertical lines with perspective - converging to center */}
          {Array.from({ length: 20 }).map((_, i) => {
            const xStart = (i / 19) * 100;
            const centerX = 50;
            const topConverge = centerX + (xStart - centerX) * 0.3;
            const bottomConverge = centerX + (xStart - centerX) * 0.3;

            return (
              <path
                key={`v-${i}`}
                d={`M ${xStart}% 0 Q ${topConverge}% 50, ${xStart}% 100`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                fill="none"
                opacity="0.4"
              />
            );
          })}

          {/* Horizontal lines - top half converging down */}
          {Array.from({ length: 12 }).map((_, i) => {
            const y = (i / 23) * 100;
            if (y <= 50) {
              const convergeFactor = 1 - (y / 50) * 0.7;
              const leftX = 50 - 50 * convergeFactor;
              const rightX = 50 + 50 * convergeFactor;

              return (
                <line
                  key={`h-top-${i}`}
                  x1={`${leftX}%`}
                  y1={`${y}%`}
                  x2={`${rightX}%`}
                  y2={`${y}%`}
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="1"
                  opacity="0.4"
                />
              );
            }
            return null;
          })}

          {/* Horizontal lines - bottom half converging up */}
          {Array.from({ length: 12 }).map((_, i) => {
            const y = 50 + (i / 23) * 100;
            if (y > 50 && y <= 100) {
              const convergeFactor = 1 - ((y - 50) / 50) * 0.7;
              const leftX = 50 - 50 * convergeFactor;
              const rightX = 50 + 50 * convergeFactor;

              return (
                <line
                  key={`h-bottom-${i}`}
                  x1={`${leftX}%`}
                  y1={`${y}%`}
                  x2={`${rightX}%`}
                  y2={`${y}%`}
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="1"
                  opacity="0.4"
                />
              );
            }
            return null;
          })}
        </svg>
      </div>

      {/* Animated diagonal laser lines */}
      <div className="absolute inset-0 opacity-50">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-[pulse_2s_ease-in-out_infinite]"
            style={{
              top: `${20 + i * 15}%`,
              transform: "rotate(-15deg)",
              animationDuration: `${2 + i * 0.5}s`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Logo */}
        <div className="mb-12 flex items-center gap-3">
          <div className="w-50 h-30 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center">
            <img src="/logo-madhav.jpg" alt="" />
          </div>
          {/* <span className="text-white text-2xl font-bold">Scaleup Media</span> */}
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 max-w-4xl leading-tight">
          Need more clarity?{" "}
          <span className="inline-flex items-center">
            Get in touch
            <span className="ml-2 w-1 h-12 bg-yellow-400 animate-pulse" />
          </span>
        </h1>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="#contact" className="px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10">
        <p className="text-gray-400 text-sm">
          © 2025 AEVO Labs. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="TikTok"
          >
            <FaTiktok className="w-5 h-5" />
          </a>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
