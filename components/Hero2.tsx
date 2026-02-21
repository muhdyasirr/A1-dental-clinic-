"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT — BIG IMAGE */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[480px] aspect-[4/5] lg:h-[580px] rounded-[32px] overflow-hidden shadow-xl">
            <Image
              src="/Hero21.jpeg"
              alt="Dental treatment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="max-w-xl">

          <p className="text-sm tracking-widest text-blue-600 font-semibold uppercase mb-4">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Your Journey to a Healthier
            <br /> Smile Begins Here
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Our clinic is dedicated to delivering compassionate, tailored care and the highest standard of cosmetic and specialist dental treatments using modern techniques and advanced practices.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
            {[
              "Experienced Team",
              "Comprehensive Services",
              "State-of-the-Art Technology",
              "Emergency Dental Care",
            ].map(item => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>



        </div>
      </div>
    </section>
  );
}
