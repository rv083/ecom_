"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  aspect?: string;
}

export function ImageCarousel({ images, alt, aspect = "aspect-[4/5]" }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const current = images[index];

  const move = (direction: number) => {
    setIndex((value) => (value + direction + images.length) % images.length);
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-champagne/30 ${aspect}`}>
      <img
        src={current}
        alt={alt}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      {images.length > 1 ? (
        <>
          <button
            aria-label="Previous image"
            onClick={(event) => {
              event.preventDefault();
              move(-1);
            }}
            className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-pearl/80 opacity-0 shadow-sm transition group-hover:opacity-100"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            aria-label="Next image"
            onClick={(event) => {
              event.preventDefault();
              move(1);
            }}
            className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-pearl/80 opacity-0 shadow-sm transition group-hover:opacity-100"
          >
            <ChevronRight size={17} />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((image, imageIndex) => (
              <span
                key={image}
                className={`h-1.5 rounded-full transition ${
                  imageIndex === index ? "w-6 bg-pearl" : "w-1.5 bg-pearl/55"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
