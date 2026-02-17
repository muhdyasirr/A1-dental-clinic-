"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      
      {/* RIGHT SIDE HERO IMAGE */}
      <div className="absolute inset-y-0 right-0 w-[60%]">
          <Image
            src="/hero-main.jpg"
            alt="Dental wireframe"
            fill
            priority
            className="object-cover object-right"
          />
        </div>

        {/* TOP-LEFT BRANDING */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 ml-3">
          <div className="max-w-xl">

            {/* LOGO */}
            <Image
              src="/A1Logo.png"
              alt="A1 Dental Clinic & Aesthetic Centre"
              width={590}
              height={390}
              priority
              className="object-contain"
            />

          {/* MAIN HERO LINE */}
          <p className="mt-8 ml-5 text-5xl text-gray-900 leading-snug">
            Crafted with precision, Designed for Confidence
          </p>

          {/* SUB LINE */}
          <p className="mt-6 ml-5 text-3xl text-gray-700 leading-relaxed">
            Advanced Dentistry and Aesthetics, Defined by Precision, Comfort,
            and Lasting Confidence
          </p>

        </div>
      </div>
    </section>
  );
}
