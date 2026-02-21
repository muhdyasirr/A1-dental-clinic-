"use client";

import Image from "next/image";

const leftFeatures = [
  {
    title: "Experienced Doctor",
    desc: "Our specialists bring years of expertise across all fields of modern dentistry.",
    icon: <DoctorIcon />,
  },
  {
    title: "Personalized Care",
    desc: "Every treatment plan is tailored specifically to your unique needs and comfort.",
    icon: <ToothIcon />,
  },
  {
    title: "Flexible Payment",
    desc: "We offer easy, affordable payment options to fit every budget.",
    icon: <PaymentIcon />,
  },
];

const rightFeatures = [
  {
    title: "Emergency Services",
    desc: "Round-the-clock emergency dental care whenever you need it most.",
    icon: <PhoneIcon />,
  },
  {
    title: "5-Star Reviews",
    desc: "Hundreds of happy patients trust us with their smiles every day.",
    icon: <StarIcon />,
  },
  {
    title: "Latest Technology",
    desc: "Advanced digital tools and laser tech for precise, painless treatment.",
    icon: <SettingsIcon />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)",
      }}
    >
      {/* Background glow blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Why Choose <span className="text-blue-400">A1 Dental Clinic</span>&nbsp;?
          </h2>
          <p className="mt-5 text-blue-200/70 max-w-xl mx-auto leading-relaxed">
            We combine clinical excellence with compassionate care — delivering smiles that last a lifetime.
          </p>
        </div>

        {/* ── 3-COL LAYOUT ── */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-10">
            {leftFeatures.map((f) => (
              <Feature key={f.title} title={f.title} desc={f.desc} icon={f.icon} align="right" />
            ))}
          </div>

          {/* CENTER CIRCLE */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">
              {/* Outer glowing ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #3b82f6, #6366f1, #3b82f6)",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0d1f3c]" />
              </div>

              {/* Orbit dots */}
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-2.5 h-2.5 rounded-full"
                  style={{
                    background: i % 2 === 0 ? "#3b82f6" : "#6366f1",
                    boxShadow: `0 0 8px ${i % 2 === 0 ? "#3b82f6" : "#6366f1"}`,
                    top: `${50 + 48 * Math.sin((i * Math.PI) / 4)}%`,
                    left: `${50 + 48 * Math.cos((i * Math.PI) / 4)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}

              {/* Inner circle with tooth */}
              <div className="absolute inset-4 rounded-full bg-[#0a1628] flex items-center justify-center shadow-2xl">
                <div
                  className="w-40 h-40 rounded-full flex items-center justify-center"
                  style={{
                    background: "radial-gradient(circle, #1e3a5f 0%, #0d1f3c 100%)",
                    boxShadow: "0 0 40px rgba(59,130,246,0.3)",
                  }}
                >
                  <Image
                    src="/tooth.png"
                    alt="Dental Tooth"
                    width={100}
                    height={100}
                    className="object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-10">
            {rightFeatures.map((f) => (
              <Feature key={f.title} title={f.title} desc={f.desc} icon={f.icon} align="left" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── FEATURE ITEM ── */
function Feature({
  title,
  desc,
  icon,
  align,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  align: "left" | "right";
}) {
  return (
    <div className={`flex items-start gap-4 ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
      {/* Icon box */}
      <div
        className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-400"
        style={{
          background: "rgba(59,130,246,0.12)",
          border: "1px solid rgba(59,130,246,0.25)",
          boxShadow: "0 0 16px rgba(59,130,246,0.15)",
        }}
      >
        {icon}
      </div>
      <div className="max-w-[220px]">
        <h4 className="text-base font-semibold text-white">{title}</h4>
        <p className="mt-1 text-sm text-blue-200/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ── ICONS ── */
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
