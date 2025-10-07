"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function StarfieldBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars: Star[] = [];
    const cols = 50;
    const rows = 35;
    const spacingX = 100 / (cols - 1);
    const spacingY = 100 / (rows - 1);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        newStars.push({
          id: row * cols + col,
          x: col * spacingX,
          y: row * spacingY,
          size: 1,
        });
      }
    }

    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-[200%] h-[200%] animate-diagonal-loop">
        {/* First tile */}
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div
              key={`a-${star.id}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: 0.4,
              }}
            />
          ))}
        </div>

        {/* Second tile offset for seamless loop */}
        <div className="absolute inset-0 left-1/2 top-1/2">
          {stars.map((star) => (
            <div
              key={`b-${star.id}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
