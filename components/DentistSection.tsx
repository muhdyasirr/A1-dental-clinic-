"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface IDentist {
  _id: string;
  name: string;
  specialization: string;
  imageUrl: string;
}

export default function DentistSection() {
  const [dentists, setDentists] = useState<IDentist[]>([]);

  useEffect(() => {
    fetch("/api/dentists")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setDentists(data);
        else setDentists([]);
      })
      .catch(() => setDentists([]));
  }, []);

  return (
    <section
      id="doctors"
      className="py-24 px-6"
      style={{ background: "linear-gradient(135deg, #e8f0fb 0%, #f0f6ff 60%, #ddeeff 100%)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-blue-600 font-semibold uppercase mb-3">
            Meet The Team
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Our Specialists
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            We are committed to providing exceptional, personalised dental care with our dedicated team of specialists.
          </p>
        </div>

        {/* ── CARDS ── */}
        <div className="flex flex-wrap justify-center gap-6">
          {dentists.map((doc) => (
            <Link
              key={doc._id}
              href={`/dentists/${doc._id}`}
              className="group flex-shrink-0 w-64 md:w-72"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

                {/* PHOTO */}
                <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* subtle gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/60 to-transparent" />
                </div>

                {/* INFO */}
                <div className="px-5 py-4 text-center">
                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {doc.name}
                  </h3>
                  <p className="mt-1 text-sm text-blue-600 font-medium">
                    {doc.specialization}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
