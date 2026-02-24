"use client";

import Link from "next/link";
import React from "react";
import Animate from "./Animate";

export default function ContactConsultation() {
  return (
    <section
      id="booking"
      className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid gap-14 lg:grid-cols-2 lg:gap-24 items-center">

        {/* CONTENT */}
        <Animate className="reveal-left">
          <div className="max-w-xl mx-auto lg:mx-0 order-1">
            {/* LABEL */}
            <p className="text-xs sm:text-sm tracking-widest text-blue-600 font-semibold uppercase mb-5 sm:mb-6">
              + Contact Now
            </p>

            {/* TITLE */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              Get Professional
              <br className="hidden sm:block" />
              Consultation
            </h2>

            {/* INFO LIST */}
            <div className="mt-10 sm:mt-12 space-y-6 sm:space-y-8">
              <InfoItem
                icon={<LocationIcon />}
                title={
                  <>
                    A1 Dental Clinic & Aesthetic Centre,<br />
                    Chettimukku Junction, TOG Road,<br />
                    South Kalamassery,<br />
                    Ernakulam – 683104
                  </>
                }
              />

              <InfoItem
                icon={<PhoneIcon />}
                title={
                  <a
                    href="tel:9562603990"
                    className="hover:text-blue-600 transition"
                  >
                    9562603990
                  </a>
                }
              />

              <InfoItem
                icon={<MailIcon />}
                title={
                  <a
                    href="mailto:a1dentalclinickalamassery@gmail.com"
                    className="hover:text-blue-600 transition break-all"
                  >
                    a1dentalclinickalamassery@gmail.com
                  </a>
                }
              />

              <InfoItem
                icon={<ClockIcon />}
                title={
                  <>
                    Mon – Sat : 9:30 AM – 7:30 PM<br />
                    Sunday : Appointment Only
                  </>
                }
              />
            </div>

            {/* CTA */}
            <div className="mt-12 sm:mt-14">
              <Link
                href="tel:9562603990"
                className="
                inline-flex w-full sm:w-auto
                items-center justify-center gap-3
                bg-blue-600 text-white
                px-8 py-4 rounded-full
                text-sm sm:text-base font-semibold
                shadow-lg shadow-blue-600/30
                hover:bg-blue-700 hover:scale-105 transition-all duration-300
              "
              >
                Call For Appointment
                <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-white/20">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </Animate>

        {/* MAP */}
        <Animate className="reveal-right">
          <div className="w-full order-2 lg:order-none">
            <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=A1+dental+clinic+and+aesthetic+centre+South+kalamassery+Ernakulam&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=A1+dental+clinic+and+aesthetic+centre+South+kalamassery+Ernakulam"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 sm:hidden flex items-end justify-center bg-gradient-to-t from-black/30 to-transparent"
              >
                <span className="mb-4 px-4 py-2 text-sm font-semibold text-white bg-black/60 rounded-full">Open in Maps</span>
              </a>
            </div>
          </div>
        </Animate>

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
    <div className="flex items-start gap-4 sm:gap-5">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
        {icon}
      </div>
      <div
        className="
          text-sm sm:text-base lg:text-lg
          font-medium text-gray-600
          leading-relaxed
          break-all sm:break-words
        "
      >
        {title}
      </div>
    </div>
  );
}

/* ---------------- ICONS ---------------- */

function LocationIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
