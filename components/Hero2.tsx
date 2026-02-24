"use client";

import Image from "next/image";
import Animate from "./Animate";

export default function AboutSection() {
  return (
    <section id="hero2-section" className="bg-white py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT — IMAGE slides in from left */}
        <Animate className="reveal-left">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[480px] aspect-[4/5] lg:h-[580px] rounded-[32px] overflow-hidden shadow-xl
              transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-100">
              <Image
                src="/hhero.jpeg"
                alt="Dental treatment"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>
        </Animate>

        {/* RIGHT — content slides in from right */}
        <Animate className="reveal-right">
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
              ].map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 group cursor-default"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm
                    transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                    ✓
                  </span>
                  <span className="hover-underline transition-colors group-hover:text-blue-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Animate>

      </div>
    </section>
  );
}
