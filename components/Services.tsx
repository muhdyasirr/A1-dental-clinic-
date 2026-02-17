"use client";

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
    title: "Pedodontics (Children’s Dentistry)",
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
    <section id="services" className="bg-white px-6 py-28">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <header className="mb-20">
          <p className="text-sm tracking-widest text-blue-600 uppercase mb-3">
            Treatments Offered
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Comprehensive Dental Services
          </h1>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-dotted border-gray-300">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`border-2 border-dotted border-gray-300 p-8
                ${index % 2 === 0 ? "border-r-2" : ""}
              `}
            >
              {/* TITLE */}
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h2>

              {/* ITEMS */}
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-blue-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
