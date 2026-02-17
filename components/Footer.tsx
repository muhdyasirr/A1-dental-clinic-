"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#111827] text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">

                    {/* BRAND */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                            A1 Dental Clinic
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Providing top-quality dental care with a focus on patient comfort and satisfaction.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="/#about" className="hover:text-blue-400 transition">About Us</Link></li>
                            <li><Link href="/#services" className="hover:text-blue-400 transition">Services</Link></li>
                            <li><Link href="/#doctors" className="hover:text-blue-400 transition">Doctors</Link></li>
                            <li><Link href="/#booking" className="hover:text-blue-400 transition">Book Appointment</Link></li>
                        </ul>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Social Media</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition">Facebook</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Instagram</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">YouTube</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Twitter</a></li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>A1dentalclinickalamassery@gmail.com</li>
                            <li>+91 95626 03990</li>
                            <li>Mon – Sat : 9:30AM – 7:00PM</li>
                            <li>Sun : Appointment Only</li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} A1 Dental Clinic. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
