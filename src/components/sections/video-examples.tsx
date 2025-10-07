"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
const longFormVideos = [
  {
    id: "mylMiFCeTyA",
    img: "https://i.ytimg.com/vi_webp/mylMiFCeTyA/sddefault.webp",
  },
  {
    id: "B3mG3DO8BH4",
    img: "https://i.ytimg.com/vi_webp/B3mG3DO8BH4/sddefault.webp",
  },
  {
    id: "sIi3o4U0cRo",
    img: "https://i.ytimg.com/vi_webp/sIi3o4U0cRo/sddefault.webp",
  },
  {
    id: "tGnoVfkw8nQ",
    img: "https://i.ytimg.com/vi_webp/tGnoVfkw8nQ/sddefault.webp",
  },
];

const shortFormVideos = [
  {
    id: "LvgXr0pUh0Y",
    img: "https://i.ytimg.com/vi_webp/LvgXr0pUh0Y/sddefault.webp",
  },
  {
    id: "tfTYam0E9rU",
    img: "https://i.ytimg.com/vi_webp/tfTYam0E9rU/sddefault.webp",
  },
  {
    id: "FuOFomtlADo",
    img: "https://i.ytimg.com/vi_webp/FuOFomtlADo/sddefault.webp",
  },
  {
    id: "P10fBSdOpmM",
    img: "https://i.ytimg.com/vi_webp/P10fBSdOpmM/sddefault.webp",
  },
];

const VideoExamples = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  React.useEffect(() => {
    const el = document.getElementById("shortScroll");
    if (!el) return;

    const interval = setInterval(() => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 400, behavior: "smooth" });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="video-examples"
      className="relative w-full py-[0px] overflow-hidden z-20"
    >
      {/* === Background Decorations === */}
      {/* <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/JmnNBcgGwOAnsO70g5notRa1v1k-17.svg?"
        alt="Left Side Background"
        width={622}
        height={1118}
        className="absolute top-[0px] left-[-188px] z-[1] hidden lg:block pointer-events-none"
        unoptimized
      />
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/XUV3B79RFYJmks4RdcuhqtsLo1k-16.svg?"
        alt="Right Side Background"
        width={590}
        height={1121}
        className="absolute top-[0px] right-[-212px] z-[1] hidden lg:block pointer-events-none"
        unoptimized
      /> */}

      {/* === Long-Form Section === */}
      <div className="container relative z-10 py-[0px]">
        <div className="flex py-[60px] flex-col items-center gap-6 text-center mb-16">
          <h2
            className="text-5xl font-semibold leading-[56px] text-white 
    bg-white/10 backdrop-blur-md border border-white/20 
    rounded-full px-8 py-4 inline-block shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Long-Form <br /> Video Examples
          </h2>
          <p className="max-w-xl text-lg text-text-secondary">
            Get more leads without sending 1000s cold emails/day, spending a
            dime on paid ads, or creating boring content
          </p>
        </div>

        {/* === Long-Form Video Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {longFormVideos.map((video, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden group aspect-video bg-black cursor-pointer"
              onClick={() => setActiveVideo(video.id)}
            >
              {activeVideo === video.id ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&rel=0&controls=1`}
                  title={`YouTube video ${video.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <Image
                    src={video.img}
                    alt={`Video thumbnail ${index + 1}`}
                    width={384}
                    height={216}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center justify-center w-20 h-20 bg-card/80 backdrop-blur-sm rounded-full">
                      <Play className="w-10 h-10 ml-1 text-white fill-white" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* === Short-Form Section === */}
        <div className="flex flex-col items-center gap-6 text-center mt-[120px]">
          <h2
            className="text-5xl font-semibold leading-[56px] text-white 
    bg-white/10 backdrop-blur-md border border-white/20 
    rounded-full px-8 py-4 inline-block shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Short-Form <br /> Video Examples
          </h2>
        </div>

        {/* === Short-Form Horizontal Scroll === */}
        <div className="relative mt-16">
          {/* Scroll Buttons */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
            onClick={() => {
              document
                .getElementById("shortScroll")
                ?.scrollBy({ left: -400, behavior: "smooth" });
            }}
          >
            ‹
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
            onClick={() => {
              document
                .getElementById("shortScroll")
                ?.scrollBy({ left: 400, behavior: "smooth" });
            }}
          >
            ›
          </button>

          {/* Scrollable Row */}
          <div
            id="shortScroll"
            className="flex gap-6 overflow-x-auto no-scrollbar px-4 py-4 scroll-smooth"
          >
            {shortFormVideos.map((video) => (
              <div
                key={video.id}
                className="flex-shrink-0 w-[320px] sm:w-[350px] md:w-[380px] rounded-[20px] overflow-hidden aspect-[9/16] mx-auto"
              >
                <iframe
                  className="w-full h-full border-0"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&controls=1&autoplay=0&mute=0&loop=0&fs=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoExamples;
