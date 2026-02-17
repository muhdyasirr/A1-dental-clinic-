"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center">
      <div
        className="
          w-[94%] max-w-6xl
          bg-white
          rounded-2xl
          px-8 py-3.5
          shadow-xl shadow-black/10
          flex items-center justify-between
        "
      >
        {/* LEFT — LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/A1Logo.png"
            alt="A1 Dental Clinic Logo"
            className="h-16 w-auto object-contain"
          />

          {/* TEXT STACK */}
          <div className="leading-tight">
            <span className="block text-lg font-semibold text-gray-900">
              A1 Dental Clinic
            </span>
            <span className="block text-sm font-medium text-gray-600">
              & Aesthetic Centre
            </span>
          </div>
        </Link>

        {/* CENTER — NAV LINKS */}
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

        {/* RIGHT — ACTIONS */}
        <div className="flex items-center gap-4">
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
      </div>
    </header>
  );
}
