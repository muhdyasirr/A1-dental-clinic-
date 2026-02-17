"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

interface IDentist {
  _id: string;
  name: string;
  specialization: string;
  experience: string;
  description: string;
  imageUrl: string;
  contact?: string;
}

export default function DentistDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [dentist, setDentist] = useState<IDentist | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/dentists/${resolvedParams.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.error) setDentist(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [resolvedParams.id]);

  if (loading) return <div className="py-32 text-center">Loading…</div>;
  if (!dentist) return <div className="py-32 text-center">Dentist not found.</div>;

  return (
    <>
      <Navbar />

      <section className="min-h-screen grid lg:grid-cols-2 bg-white overflow-hidden">
        {/* LEFT — IMAGE */}
        <div className="relative w-full h-[50vh] lg:h-auto flex items-center justify-center bg-gray-50">
          <Image
            src={dentist.imageUrl}
            alt={dentist.name}
            fill
            priority
            className="object-cover lg:object-contain"
          />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="flex items-center">
          <div className="max-w-3xl px-6 py-12 lg:px-20 lg:py-16">
            {/* NAME */}
            <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
              {dentist.name}
            </h1>

            {/* SPECIALIZATION */}
            <p className="mt-4 text-lg uppercase tracking-widest text-gray-500">
              {dentist.specialization}
            </p>

            {/* EXPERIENCE + CONTACT (FLEX ROW) */}
            <div className="mt-12 flex flex-wrap gap-12">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-400">
                  Experience
                </h3>
                <p className="mt-2 text-lg text-gray-700">
                  {dentist.experience}
                </p>
              </div>

              {dentist.contact && (
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-400">
                    Contact
                  </h3>
                  <p className="mt-2 text-lg text-gray-700">
                    {dentist.contact}
                  </p>
                </div>
              )}
            </div>

            {/* DESCRIPTION */}
            <div className="mt-12">
              <h3 className="text-sm uppercase tracking-widest text-gray-400">
                About
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                {dentist.description}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16">
              <Link
                href="/#booking"
                className="inline-block bg-blue-600 text-white px-12 py-4 rounded-full text-base font-medium hover:bg-blue-700 transition"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
