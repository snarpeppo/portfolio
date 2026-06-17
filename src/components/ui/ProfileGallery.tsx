"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ProfileGalleryProps {
  images: { src: string; alt: string }[];
  name: string;
}

export function ProfileGallery({ images, name }: ProfileGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="shadow-elevated-lg overflow-hidden rounded-2xl bg-surface p-2">
      <div className="relative aspect-square w-56 overflow-hidden rounded-xl bg-surface-container md:w-72 lg:w-80">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === activeIndex ? 1 : 0 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
