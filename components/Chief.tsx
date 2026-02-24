"use client";

import Image from "next/image";
import Animate from "./Animate";

export default function ChiefSection() {
    return (
        <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* SECTION HEADING */}
                <Animate className="reveal">
                    <h2 className="text-center text-2xl tracking-widest text-gray-500 uppercase mb-16">
                        Chief Dental Surgeon
                    </h2>
                </Animate>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* IMAGE — slides from left */}
                    <Animate className="reveal-left">
                        <div className="flex justify-center lg:justify-start">
                            <div className="shadow-xl bg-gray-50 p-4 transition-all duration-500
                                hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2">
                                <Image
                                    src="/Chief.jpeg"
                                    alt="Chief Dental Surgeon"
                                    width={420}
                                    height={420}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </Animate>

                    {/* TEXT — slides from right */}
                    <Animate className="reveal-right">
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-900 mb-3">
                                Dr. Vyshakh Viswanath
                            </h3>

                            <p className="text-base text-blue-600 font-medium mb-8">
                                Chief Dental Surgeon
                            </p>

                            {/* Highlight badges */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {["BDS Graduate 2019", "6+ Years Experience", "FAD – Germany"].map((badge) => (
                                    <span key={badge}
                                        className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium
                                            border border-blue-100 hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-default">
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-700 leading-relaxed text-lg">
                                Dr. Vyshakh Viswanath, Chief Dental Surgeon of our clinic, is committed to providing high-quality, patient-centered dental care with a strong emphasis on aesthetics and long-term oral health. A Bachelor of Dental Surgery (BDS) graduate (2019) with over six years of clinical experience, he further advanced his expertise by completing a Fellowship in Aesthetic Dentistry (FAD) from Universitätsmedizin Greifswald, Germany. Dr. Vyshakh has gained extensive clinical exposure through his work at reputed hospitals and dental centers across Kerala and currently serves as a faculty member at Amrita School of Dentistry, Kochi, where he actively contributes to academic and clinical training.
                            </p>
                        </div>
                    </Animate>

                </div>
            </div>
        </section>
    );
}
