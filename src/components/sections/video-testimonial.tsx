"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';

const VideoTestimonial = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    // This video ID is from the hero section of the original site.
    const videoId = "g7Rodi-5-TA"; 

    return (
        <div className="w-full flex flex-col items-center gap-12">
            <div className="w-full max-w-[1000px] px-6">
                <div 
                    className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-[0px_40px_80px_-40px_rgba(0,0,0,0.25)] ring-1 ring-inset ring-white/15 cursor-pointer group"
                    onClick={() => setIsPlaying(true)}
                >
                    {isPlaying ? (
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <>
                            <Image
                                src={`https://i.ytimg.com/vi/${videoId}/sddefault.jpg`}
                                alt="Video Testimonial Thumbnail"
                                fill
                                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/50">
                                <div className="bg-primary/80 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-foreground bg-gradient-to-tr from-primary to-[color:var(--color-light-blue)] rounded-full shadow-[0_4px_16px_rgba(66,133,244,0.3)] transition-transform duration-300 ease-in-out hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background"
            >
                Apply To Work With Us
            </Link>
        </div>
    );
};

export default VideoTestimonial;