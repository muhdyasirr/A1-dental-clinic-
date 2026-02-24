"use client";

import { ReactNode } from "react";
import Animate from "./Animate";

/* ---------- ICONS ---------- */

const icons: Record<string, ReactNode> = {
  "General Dentistry": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C9 2 6 4.5 6 7.5c0 1.5.5 3 1 4.5L8 17c.5 2 1.5 3 2.5 3s1.5-1 2-2c.5 1 1 2 2 2s2-1 2.5-3l1-5c.5-1.5 1-3 1-4.5C19 4.5 15 2 12 2z" />
    </svg>
  ),
  "Endodontics (Root Canal & Conservative Dentistry)": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v5m0 0c-2 0-4 1.5-4 4 0 1.5.5 2.5 1 3.5L10 19c.4 1.5 1 2 2 2s1.6-.5 2-2l1-3.5c.5-1 1-2 1-3.5 0-2.5-2-4-4-4z" />
      <circle cx="12" cy="5" r="2" />
    </svg>
  ),
  "Orthodontics (Braces & Aligners)": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <rect x="3" y="9" width="18" height="6" rx="3" />
      <line x1="7" y1="9" x2="7" y2="15" />
      <line x1="12" y1="9" x2="12" y2="15" />
      <line x1="17" y1="9" x2="17" y2="15" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  ),
  "Oral & Maxillofacial Surgery": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C8 3 5 6 5 9.5c0 2 .8 3.8 2 5L9 20c.6 1.5 1.5 2 3 2s2.4-.5 3-2l2-5.5c1.2-1.2 2-3 2-5C19 6 16 3 12 3z" />
      <line x1="9" y1="11" x2="15" y2="11" strokeLinecap="round" />
      <line x1="12" y1="8" x2="12" y2="14" strokeLinecap="round" />
    </svg>
  ),
  "Periodontics & Laser Dentistry (Gum Care & Advanced Laser Treatments)": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C7 21 3 17 3 12S7 3 12 3s9 4 9 9-4 9-9 9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12s1-2 4-2 4 2 4 2" />
    </svg>
  ),
  "Laser Treatments": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  "Prosthodontics (Replacement of Missing Teeth)": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <rect x="4" y="13" width="4" height="7" rx="1.5" />
      <rect x="10" y="10" width="4" height="10" rx="1.5" />
      <rect x="16" y="13" width="4" height="7" rx="1.5" />
      <path strokeLinecap="round" d="M4 13C4 9 8 6 12 6s8 3 8 7" />
    </svg>
  ),
  "Pedodontics (Children's Dentistry)": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <circle cx="12" cy="8" r="4" />
      <path strokeLinecap="round" d="M8 16c0-2 1.8-3 4-3s4 1 4 3v2H8v-2z" />
      <path strokeLinecap="round" d="M5 21c0-2.5 3-4 7-4s7 1.5 7 4" />
    </svg>
  ),
  "Cosmetic Dentistry": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.5 4.5H18l-3.75 2.75 1.5 4.5L12 12l-3.75 2.75 1.5-4.5L6 7.5h4.5L12 3z" />
      <path strokeLinecap="round" d="M8 17c1 1.5 2.5 2 4 2s3-.5 4-2" />
    </svg>
  ),
  "Oral Medicine and Radiology": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="5" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="19" />
      <line x1="3" y1="12" x2="9" y2="12" />
      <line x1="15" y1="12" x2="21" y2="12" />
    </svg>
  ),
};

/* ---------- DATA ---------- */

const services = [
  {
    title: "General Dentistry",
    items: [
      "Routine dental check-ups",
      "Scaling and polishing",
      "Preventive dental care",
      "Tooth coloured fillings & polishing",
      "Extractions",
    ],
  },
  {
    title: "Endodontics (Root Canal & Conservative Dentistry)",
    items: [
      "Root canal treatment",
      "Dental restorations & fillings",
      "Management of fractured teeth",
      "Inlays, onlays & crowns",
      "Post and core build-up",
    ],
  },
  {
    title: "Orthodontics (Braces & Aligners)",
    items: [
      "Metal braces",
      "Ceramic braces",
      "Self-ligating braces",
      "Invisalign / clear aligners",
      "Lingual braces",
      "Mini implants for orthodontics",
      "Functional & myofunctional appliances",
      "Habit breaking appliances",
      "Retainers",
    ],
  },
  {
    title: "Oral & Maxillofacial Surgery",
    items: [
      "Removal of cysts and tumors",
      "Wisdom tooth removal",
      "Facial injury management",
    ],
  },
  {
    title: "Periodontics & Laser Dentistry (Gum Care & Advanced Laser Treatments)",
    items: [
      "Treatment for bleeding gums",
      "Bad breath management",
      "Flap surgery (gum surgery)",
      "Gummy smile correction",
      "Gum depigmentation",
      "Bone grafting",
      "Periodontal plastic surgery",
      "Frenectomy",
    ],
  },
  {
    title: "Laser Treatments",
    items: [
      "Laser-assisted gum treatments",
      "Laser tongue-tie correction",
      "Laser crown lengthening",
      "Laser gingivectomy",
      "Laser tooth exposure",
      "Laser treatment for mouth ulcers",
      "Laser teeth whitening",
      "Laser fillings (restorations)",
      "Laser root canal treatment",
      "Laser biopsy",
      "Photodynamic therapy",
      "Laser treatment for white lesions",
    ],
  },
  {
    title: "Prosthodontics (Replacement of Missing Teeth)",
    items: [
      "Dental implants – single & multiple teeth replacement",
      "All-on-4 full mouth implants",
      "Implant overdentures",
      "Crowns and bridges",
      "Full mouth rehabilitation",
      "Cast partial dentures",
      "Precision attachment dentures",
      "Flexible dentures",
    ],
  },
  {
    title: "Pedodontics (Children's Dentistry)",
    items: [
      "Fluoride therapy",
      "Pit and fissure sealants",
      "Myofunctional appliances",
      "Management of dental trauma",
      "Extractions",
      "Pediatric crowns",
      "Pediatric root canal treatment",
      "Tooth-coloured fillings",
      "Dental care for children with special needs",
    ],
  },
  {
    title: "Cosmetic Dentistry",
    items: [
      "Tooth jewellery",
      "Teeth whitening",
      "Laminates / veneers",
      "Gum depigmentation",
      "Lip repositioning",
      "Smile designing",
    ],
  },
  {
    title: "Oral Medicine and Radiology",
    items: [
      "Diagnosis of oral diseases and conditions",
      "RVG (Radiovisiography)",
    ],
  },
];

/* ---------- PAGE ---------- */

export default function ServicesGridPage() {
  return (
    <section id="services" className="bg-[#E9F1FB] relative overflow-hidden px-6 py-28">
      {/* Decorative subtle blurs for a premium look */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-white/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div className="relative z-10">
          <Animate className="reveal">
            <header className="mb-20 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white text-blue-600 text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full mb-6 shadow-md shadow-blue-900/5 border border-white/60 backdrop-blur-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C9 2 6 4.5 6 7.5c0 1.5.5 3 1 4.5L8 17c.5 2 1.5 3 2.5 3s1.5-1 2-2c.5 1 1 2 2 2s2-1 2.5-3l1-5c.5-1.5 1-3 1-4.5C19 4.5 15 2 12 2z" />
                </svg>
                Treatments Offered
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight">
                Comprehensive Dental Services
              </h1>
              <p className="mt-4 text-blue-900/70 max-w-xl mx-auto md:mx-0 text-lg font-medium">
                From routine check-ups to advanced laser procedures — all under one roof, delivered by specialists.
              </p>
            </header>
          </Animate>
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Animate
              key={service.title}
              className="reveal"
              delay={`stagger-${Math.min((index % 4) + 1, 6)}` as "stagger-1"}
            >
              <div
                className="group bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white shadow-lg shadow-blue-900/5
                  hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white
                  transition-all duration-300 h-full relative overflow-hidden flex flex-col"
              >
                {/* Visual accent bar at top */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start gap-4 mb-5 relative z-10 mt-2">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600
                    transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white shadow-sm border border-blue-100/50">
                    {icons[service.title]}
                  </div>
                  <h2 className="text-lg font-bold text-blue-950 leading-snug pt-1">
                    {service.title}
                  </h2>
                </div>

                <div className="h-px bg-blue-900/5 mb-5 relative z-10" />

                <ul className="space-y-2.5 relative z-10 flex-grow">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shadow-sm">
                        ✓
                      </span>
                      <span className="text-sm text-blue-900/80 leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Animate>
          ))}
        </div>

      </div>
    </section>
  );
}
