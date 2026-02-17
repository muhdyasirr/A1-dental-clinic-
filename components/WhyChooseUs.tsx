"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative bg-[#ffffff] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="text-sm tracking-widest text-blue-600 uppercase font-semibold mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Diagnosis of Dental Diseases
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are committed to sustainability, eco-friendly initiatives.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* LEFT FEATURES */}
          <div className="space-y-16 text-right">
            <Feature
              title="Experienced Doctor"
              align="right"
              icon={<DoctorIcon />}
            />
            <Feature
              title="Personalized Care"
              align="right"
              icon={<ToothIcon />}
            />
            <Feature
              title="Flexible Payment Options"
              align="right"
              icon={<PaymentIcon />}
            />
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative w-[360px] h-[360px] rounded-full border border-blue-200 flex items-center justify-center">
              {/* ORBIT DOTS */}
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-2 h-2 bg-blue-500 rounded-full"
                  style={{
                    top: `${50 + 48 * Math.sin((i * Math.PI) / 4)}%`,
                    left: `${50 + 48 * Math.cos((i * Math.PI) / 4)}%`,
                  }}
                />
              ))}

              <div className="w-[300px] h-[300px] rounded-full bg-white flex items-center justify-center shadow-xl">
                <Image
                  src="/tooth.png"
                  alt="Dental Tooth"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-16 text-left">
            <Feature
              title="Emergency Services"
              icon={<PhoneIcon />}
            />
            <Feature
              title="Positive Patient Reviews"
              icon={<StarIcon />}
            />
            <Feature
              title="Latest Technology"
              icon={<SettingsIcon />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURE ITEM ---------------- */

function Feature({
  title,
  icon,
  align = "left",
}: {
  title: string;
  icon: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex items-start gap-4 ${align === "right" ? "flex-row-reverse text-right" : ""
        }`}
    >
      <div className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600">
        {icon}
      </div>
      <div className="max-w-xs">
        <h4 className="text-lg font-semibold text-gray-900">
          {title}
        </h4>
        <p className="mt-1 text-gray-600 leading-relaxed">
          The goal of our clinic is to provide friendly,
          caring dentistry and the.
        </p>
      </div>
    </div>
  );
}

/* ---------------- SVG ICONS (NO DEPENDENCY) ---------------- */

function DoctorIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="7" r="3" />
      <path d="M4 20c0-3.5 3-6 7-6s7 2.5 7 6" />
    </svg>
  );
}

function ToothIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3c-2 0-4 2-4 5 0 4 2 8 4 8s2-3 4-3 2 3 4 3 4-4 4-8c0-3-2-5-4-5-2 0-3 1-4 1s-2-1-4-1z" />
    </svg>
  );
}

function PaymentIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="5" width="18" height="12" rx="2" />
      <path d="M2 9h18" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 5c0 8 6 14 14 14l3-3-4-4-3 2c-2-1-4-3-5-5l2-3-4-4-3 3z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M11 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="3" />
      <path d="M19 11l2-1-2-1-.5-2 1.5-1.5-1.5-1.5-2 .5-1-2-1-2-1 2-2-.5-1.5 1.5 1.5 1.5-.5 2-2 1 2 1 .5 2-1.5 1.5 1.5 1.5 2-.5 1 2 1 2 1-2 2 .5 1.5-1.5-1.5-1.5.5-2z" />
    </svg>
  );
}
