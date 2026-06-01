"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  aspect?: string;
}

export function ImageCarousel({ images, alt, aspect = "aspect-[4/5]" }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    setPrev(index);
    setIndex((v) => (v + direction + images.length) % images.length);
  };

  // Auto-advance every 4s when multiple images
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => move(1), 4000);
    return () => clearInterval(timer);
  }, [images.length, index]);

  // Clear prev after crossfade completes
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), 600);
    return () => clearTimeout(t);
  }, [prev]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > 50) move(distance > 0 ? 1 : -1);
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden rounded-2xl bg-champagne/30 ${aspect}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Previous image fades out */}
      {prev !== null && (
        <img
          key={`prev-${prev}`}
          src={images[prev]}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500"
        />
      )}

      {/* Current image fades in */}
      <img
        key={`curr-${index}`}
        src={images[index]}
        alt={alt}
        className="h-full w-full object-cover transition-opacity duration-500 opacity-100 group-hover:scale-105 transition-transform duration-700"
      />

      {images.length > 1 ? (
        <>
          <button
            aria-label="Previous image"
            onClick={(e) => { e.preventDefault(); move(-1); }}
            className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-pearl/80 opacity-0 shadow-sm transition group-hover:opacity-100"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            aria-label="Next image"
            onClick={(e) => { e.preventDefault(); move(1); }}
            className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-pearl/80 opacity-0 shadow-sm transition group-hover:opacity-100"
          >
            <ChevronRight size={17} />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-pearl" : "w-1.5 bg-pearl/55"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}