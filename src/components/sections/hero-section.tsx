"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import { ContainerScroll } from "../ui/container-scroll";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import StarfieldBackground from "../ui/StartfieldBackground";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPreview, setIsPreview] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Autoplay preview on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, []);

  // Track timeline progress
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const percent = (video.currentTime / video.duration) * 100;
    setProgress(percent || 0);

    // Loop preview (first 15s)
    if (isPreview && video.currentTime >= 15) {
      video.currentTime = 0;
      video.play();
    }
  };

  // Handle play / pause / start full playback
  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPreview) {
      // Switch to full video with sound
      video.currentTime = 0;
      video.muted = false;
      setMuted(false);
      setIsPreview(false);
      video.play();
      setIsPlaying(true);
    } else {
      if (isPlaying) video.pause();
      else video.play();
      setIsPlaying(!isPlaying);
    }
  };

  // Handle timeline seek
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const newTime = (Number(e.target.value) / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(Number(e.target.value));
  };

  // Mute toggle (only works after preview)
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video || isPreview) return;
    video.muted = !muted;
    setMuted(!muted);
  };
  // Keyframes for custom animations to match the glowing effect, as requested.
  const animationStyles = `
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.7; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }
  `;

  const icons = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
  ];

  return (
    <>
      <style>{animationStyles}</style>
      <section
        id="home"
        className="relative w-full overflow-hidden z-2"
        style={
          {
            // background: "linear-gradient(to bottom, #833ab4, #fd1d1d, #fcb045)",
          }
        }
      >
        <div className="absolute inset-0 -z-10">
          {/* <Squares
            speed={0.2}
            squareSize={120}
            direction="diagonal"
            borderColor="#fff"
            hoverFillColor="#222"
          /> */}
          <StarfieldBackground />
        </div>
        {/* Background image */}
        <div className="absolute inset-0 z-0" style={{ opacity: 0.7 }}>
          <Image
            // src="https://framerusercontent.com/images/xdaPXOEtPIASFiIeYk976HyJA.svg"
            src="/hero-pic.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Starry background"
          />
        </div>

        {/* Dark gradient fade at bottom */}
        {/* <div
          className="absolute inset-x-0 bottom-0 h-full z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #0a1a2b 0%, rgba(10,26,43,0.8) 20%, transparent 60%)",
          }}
        /> */}

        {/* Left glow */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[853px] h-[730px] z-[1] pointer-events-none"
          style={{ animation: "pulse-glow 8s ease-in-out infinite" }}
        >
          <Image
            src="https://framerusercontent.com/images/UKLIsmbXPgsNWAAoMY12jQuP2ZI.svg"
            layout="fill"
            alt="Left side glow"
          />
        </div>

        {/* Right glow */}
        <div
          className="absolute -top-1/4 -right-1/4 w-[804px] h-[730px] z-[1] pointer-events-none"
          style={{ animation: "pulse-glow 10s ease-in-out infinite 2s" }}
        >
          <Image
            src="https://framerusercontent.com/images/NTKgB6h2Q6llqcAO5km5305uDk0.svg"
            layout="fill"
            alt="Right side glow"
          />
        </div>

        {/* Content */}
        {/* <div className="flex flex-col overflow-hidden pb-[0px] pt-[120px]">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-white dark:text-white">
                  You don’t need “more content.” <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    You need clients.
                  </span>
                </h1>
              </>
            }
          >
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-black leading-tight tracking-[-0.02em]">
                That’s why we built The Social Selling System™ <br />
                <span className="inline-flex items-center justify-center flex-wrap gap-x-10 gap-y-5 mt-10">
                  {icons.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors text-7xl"
                      style={{
                        color:
                          "linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                      }}
                    >
                      {item.icon}
                    </a>
                  ))}
                  <span className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent font-bold">
                    A plug-and-play YouTube + short-form system that fills your
                    calendar with ready-to-buy leads.
                  </span>
                  in 111 days
                </span>
              </h1>
            </div>
           
          </ContainerScroll>
        </div> */}
        <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <div className="pt-60 flex flex-col items-center gap-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-light text-text-primary leading-tight tracking-[-0.02em] max-w-5xl">
              You don’t need “more content.” You need clients. That’s why we
              built - <br />{" "}
              <span className="pt-2 bg-[linear-gradient(to_right,#d38312,#a83279)] bg-clip-text text-transparent">
                The Social Selling System™
              </span>
              <span className="inline-flex items-center justify-center flex-wrap gap-x-10 gap-y-5 mt-10">
                {icons.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors text-7xl"
                    style={{
                      color:
                        "linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                    }}
                  >
                    {item.icon}
                  </a>
                ))}
                <span className="font-light">
                  A{" "}
                  <span className="bg-[linear-gradient(to_right,#d38312,#a83279)] bg-clip-text text-transparent">
                    plug-and-play
                  </span>{" "}
                  YouTube + short-form system that fills your calendar with{" "}
                  <span className="bg-[linear-gradient(to_right,#d38312,#a83279)] bg-clip-text text-transparent">
                    ready-to-buy
                  </span>{" "}
                  leads.
                </span>
                in 111 days
              </span>
            </h1>

            <p className="max-w-2xl text-lg text-text-accent">
              Get more leads without sending 1000s cold emails/day, spending a
              dime on paid ads, or creating boring content
            </p>

            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden border border-border bg-black/40 backdrop-blur-sm shadow-2xl shadow-black/30 group">
              {/* Video */}
              <video
                ref={videoRef}
                src="/hero-video1.mp4"
                className="w-full h-full object-cover"
                loop={!isPreview}
                onTimeUpdate={handleTimeUpdate}
              />

              {/* Controls Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Timeline */}
                {!isPreview && (
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="w-full h-1 appearance-none bg-white/20 rounded-full accent-white cursor-pointer mb-3"
                  />
                )}

                {/* Buttons */}
                <div className="flex items-center justify-between px-5 pb-4">
                  <button
                    onClick={handlePlay}
                    className="text-white hover:scale-110 transition-transform"
                  >
                    {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                  </button>

                  {!isPreview && (
                    <button
                      onClick={toggleMute}
                      className="text-white hover:scale-110 transition-transform"
                    >
                      {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                    </button>
                  )}
                </div>
              </div>

              {/* Center Play button during preview */}
              {isPreview && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlay}
                    className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md p-5 rounded-full transition-all duration-300"
                  >
                    <Play size={36} />
                  </button>
                </div>
              )}
            </div>

            <Link
              href="#contact"
              className="inline-block mb-6 px-8 py-4 text-base font-medium 
             text-white bg-white/20 backdrop-blur-2xl 
             border border-white/30 
             rounded-xl shadow-lg 
             hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get The System (Free Audit Call)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
