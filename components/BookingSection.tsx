"use client";

import Link from "next/link";
import React from "react";

export default function ContactConsultation() {
  return (
    <section
      id="booking"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* LEFT — MAP (RESPONSIVE) */}
        <div className="w-full order-1 lg:order-none">
          <div className="
            relative w-full
            aspect-[4/3]
            sm:aspect-[16/10]
            lg:aspect-[4/3]
            rounded-3xl
            overflow-hidden
            shadow-xl
            border border-gray-100
          ">
            <iframe
              src="https://maps.google.com/maps?q=A1+dental+clinic+and+aesthetic+centre+South+kalamassery+Ernakulam&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="max-w-xl mx-auto lg:mx-0 order-2">
          {/* LABEL */}
          <p className="text-sm tracking-widest text-blue-600 font-semibold uppercase mb-6">
            + Contact Now
          </p>

          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Get Free Professional
            <br />
            Consultation
          </h2>

          {/* INFO LIST */}
          <div className="mt-12 space-y-8 text-gray-700">
            <InfoItem
              title={
                <span>
                  A1 Dental Clinic & Aesthetic Centre,<br />
                  Chettimukku Junction, TOG Road,<br />
                  South Kalamassery,<br />
                  Ernakulam – 683104
                </span>
              }
              icon={<LocationIcon />}
            />

            <InfoItem
              title="9562603990"
              icon={<PhoneIcon />}
            />

            <InfoItem
              title="a1dentalclinickalamassery@gmail.com"
              icon={<MailIcon />}
            />

            <InfoItem
              title={
                <span>
                  Mon – Sat : 9:30 AM – 7:00 PM<br />
                  Sunday : Appointment Only
                </span>
              }
              icon={<ClockIcon />}
            />
          </div>

          {/* CTA */}
          <div className="mt-14">
            <Link
              href="tel:9562603990"
              className="
                inline-flex items-center gap-3
                bg-blue-600 text-white
                px-8 py-4 rounded-full
                text-base font-semibold
                shadow-lg shadow-blue-600/30
                hover:bg-blue-700 transition
              "
            >
              Call For Appointment
              <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-white/20">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INFO ITEM ---------------- */

function InfoItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
        {icon}
      </div>
      <div className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
        {title}
      </div>
    </div>
  );
}

/* ---------------- ICONS ---------------- */

function LocationIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
