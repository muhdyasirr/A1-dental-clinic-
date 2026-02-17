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
        if (Array.isArray(data)) {
          setDentists(data);
        } else {
          setDentists([]);
        }
      })
      .catch(() => setDentists([]));
  }, []);

  return (
    <section className="bg-white py-28 px-8" id="doctors">
      
      {/* SECTION TITLE */}
      <h2 className="text-4xl md:text-5xl font-serif text-gray-900 text-center mb-20">
        Our Specialists
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto border-2 ">
        {dentists.map((doc) => (
          <Link
            key={doc._id}
            href={`/dentists/${doc._id}`}
            className="group block"
          >
            <div className="space-y-6 text-center">

              {/* BIG IMAGE */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img
                  src={doc.imageUrl}
                  alt={doc.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* NAME */}
              <h3 className="text-xl font-medium text-gray-900 tracking-wide">
                {doc.name}
              </h3>

              {/* SPECIALIZATION */}
              <p className="text-sm uppercase tracking-widest text-gray-500">
                {doc.specialization}
              </p>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
