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
      {/* Wrap with a large container that scrolls diagonally */}
      <div className="absolute w-[200%] h-[200%] animate-diagonal-loop">
        {/* first grid */}
        <div className="absolute inset-0 z-0">
          {stars.map((star) => (
            <div
              key={`a-${star.id}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>

        {/* second grid (offset) */}
        <div className="absolute inset-0 translate-x-1/2 translate-y-1/2">
          {stars.map((star) => (
            <div
              key={`b-${star.id}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: 0.8,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
