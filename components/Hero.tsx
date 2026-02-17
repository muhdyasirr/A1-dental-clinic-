"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white flex flex-col lg:block">

      {/* RIGHT SIDE HERO IMAGE */}
      <div className="relative w-full h-[40vh] mt-28 lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[60%] lg:h-full order-2 lg:order-none">
        <Image
          src="/hero-main.jpg"
          alt="Dental wireframe"
          fill
          priority
          className="object-cover object-center lg:object-right"
        />
      </div>

      {/* TOP-LEFT BRANDING */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:ml-3 pt-4 lg:pt-0 order-1 lg:order-none">
        <div className="max-w-xl lg:mt-0">

          {/* LOGO */}
          <div className="relative w-full max-w-[280px] md:max-w-[400px] lg:max-w-none mt-24 lg:mt-0">
            <Image
              src="/A1Logo.png"
              alt="A1 Dental Clinic & Aesthetic Centre"
              width={590}
              height={390}
              priority
              className="object-contain"
            />
          </div>

          {/* MAIN HERO LINE */}
          <p className="mt-8 lg:ml-5 text-4xl md:text-5xl text-gray-900 leading-snug font-bold lg:font-normal">
            Crafted with precision, Designed for Confidence
          </p>

          {/* SUB LINE */}
          <p className="mt-6 lg:ml-5 text-lg md:text-3xl text-gray-700 leading-relaxed">
            Advanced Dentistry and Aesthetics, Defined by Precision, Comfort,
            and Lasting Confidence
          </p>

        </div>
      </div>
    </section>
  );
}
