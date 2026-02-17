"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname.startsWith("/admin") || pathname.startsWith("/dentists/")) return null;

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      <div
        className="
          w-full max-w-6xl
          bg-white
          rounded-2xl
          px-6 py-3.5
          shadow-xl shadow-black/10
          flex flex-col
          relative
        "
      >
        <div className="flex items-center justify-between">
          {/* LEFT — LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/A1Logo.png"
              alt="A1 Dental Clinic Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />

            {/* TEXT STACK */}
            <div className="leading-tight">
              <span className="block text-base md:text-lg font-semibold text-gray-900">
                A1 Dental Clinic
              </span>
              <span className="block text-xs md:text-sm font-medium text-gray-600">
                & Aesthetic Centre
              </span>
            </div>
          </Link>

          {/* CENTER — NAV LINKS (DESKTOP) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/#about" className="hover:text-gray-900 transition">
              About
            </Link>
            <Link href="/#services" className="hover:text-gray-900 transition">
              Services
            </Link>
            <Link href="/#doctors" className="hover:text-gray-900 transition">
              Doctors
            </Link>
          </nav>

          {/* RIGHT — ACTIONS (DESKTOP) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="hidden sm:inline text-sm font-medium text-gray-700 hover:text-gray-900 transition"
            >
              Sign in
            </Link>

            <Link
              href="/#booking"
              className="
                inline-flex items-center gap-2
                rounded-xl
                bg-blue-600
                px-5 py-2.5
                text-sm font-semibold
                text-white
                hover:bg-blue-700
                transition
              "
            >
              Book Appointment
              <span className="text-base">→</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100 flex flex-col gap-4">
            <nav className="flex flex-col gap-3 text-sm font-medium text-gray-700">
              <Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-gray-900 transition py-2 hover:bg-gray-50 rounded px-2">
                About
              </Link>
              <Link href="/#services" onClick={() => setIsOpen(false)} className="hover:text-gray-900 transition py-2 hover:bg-gray-50 rounded px-2">
                Services
              </Link>
              <Link href="/#doctors" onClick={() => setIsOpen(false)} className="hover:text-gray-900 transition py-2 hover:bg-gray-50 rounded px-2">
                Doctors
              </Link>
            </nav>
            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-center text-sm font-medium text-gray-700 hover:text-gray-900 transition py-2 border border-gray-200 rounded-xl"
              >
                Sign in
              </Link>
              <Link
                href="/#booking"
                onClick={() => setIsOpen(false)}
                className="
                  flex items-center justify-center gap-2
                  rounded-xl
                  bg-blue-600
                  px-5 py-3
                  text-sm font-semibold
                  text-white
                  hover:bg-blue-700
                  transition
                "
              >
                Book Appointment
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
