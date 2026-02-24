"use client";

import { useEffect, useState } from "react";
import Animate from "./Animate";

interface GalleryImage {
  _id: string;
  imageUrl: string;
  title?: string;
}

export default function GallerySection() {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setImages(data);
        } else {
          console.error("API returned non-array data:", data);
          setImages([]);
        }
      })
      .catch((err) => console.error("Failed to fetch gallery:", err));
  }, []);

  return (
    <section id="gallery-section" className="py-20 px-4 bg-gray-50">
      {/* HEADER */}
      <Animate className="reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900">
            Clinic Gallery
          </h2>
          <p className="mt-3 text-gray-600">
            A glimpse of our clinic, technology, and patient care environment.
          </p>
        </div>
      </Animate>

      {/* BIG IMAGE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full max-w-[95%] mx-auto border-2 border-dotted border-gray-300">
        {images.map((img, i) => (
          <Animate
            key={img._id}
            className="reveal-scale"
            delay={`stagger-${Math.min((i % 3) + 1, 6)}` as "stagger-1"}
          >
            <div
              className="group relative overflow-hidden h-80 md:h-96 lg:h-[500px] border-2 border-dotted border-gray-300 m-[-2px]"
            >
              <img
                src={img.imageUrl}
                alt={img.title || "Clinic image"}
                className="w-full h-full object-cover
                  transform transition-transform duration-700
                  group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-black/0
                  group-hover:bg-black/25
                  transition duration-500"
              />
              {img.title && (
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-400">
                  <p className="text-white text-2xl font-bold drop-shadow-lg">
                    {img.title}
                  </p>
                </div>
              )}
            </div>
          </Animate>
        ))}
      </div>
    </section>
  );
}
