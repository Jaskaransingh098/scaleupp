"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

interface SocialItem {
  icon: React.ElementType;
  href: string;
  name: string;
}

interface InfoCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string; // local src
  socials?: SocialItem[];
}

const InfoCards: React.FC<InfoCardProps> = ({
  name,
  title,
  description,
  imageUrl,
  socials = [],
}) => {
  return (
    <div className="relative flex flex-col md:flex-row w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-lg bg-black/20 backdrop-blur-xl group">
      {/* Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-l-[2.5rem] md:rounded-l-[2.5rem]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-4 md:p-12 w-full md:w-1/2 bg-black/40 backdrop-blur-xl">
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-white">{name}</h2>
          <p className="text-lg md:text-xl mt-1 bg-[linear-gradient(to_right,#d38312,#a83279)] bg-clip-text text-transparent">
            {title}
          </p>

          <p className="mt-4 text-white text-sm font-extralight md:text-base">{description}</p>
        </div>

        {/* Social Icons */}
        {socials.length > 0 && (
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCards;
