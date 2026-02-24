"use client";

import Image from "next/image";
import Animate from "./Animate";

export default function OurVisionPerson() {
    return (
        <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* SECTION HEADING */}
                <Animate className="reveal">
                    <h2 className="text-center text-2xl tracking-widest text-gray-500 uppercase mb-16">
                        Our Management
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
                                    src="/vision.PNG"
                                    alt="Vision Person"
                                    width={330}
                                    height={370}
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
                                Mr. P. B. Viswanathan
                            </h3>

                            <p className="text-base text-blue-600 font-medium mb-8">
                                Managing Director – A1 Dental Clinic &amp; Aesthetic Centre
                            </p>

                            <p className="text-gray-700 leading-relaxed text-lg">
                                Mr. P. B. Viswanathan is the Managing Director of A1 Dental Clinic &amp; Aesthetic Centre, providing strategic leadership and administrative direction that drive the clinic&apos;s vision and growth. As the driving force behind the institution, he is committed to excellence, ensures high standards of patient care, fostering advanced infrastructure, and a comfortable, patient-centered dental experience.
                            </p>
                        </div>
                    </Animate>

                </div>
            </div>
        </section>
    );
}
