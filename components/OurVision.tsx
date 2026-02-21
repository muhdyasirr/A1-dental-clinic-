"use client";

import Image from "next/image";

export default function OurVisionPerson() {
    return (
        <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* SECTION HEADING */}
                <h2 className="text-center text-2xl tracking-widest text-gray-500 uppercase mb-16">
                    Our Management
                </h2>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* IMAGE */}

                    <div className="flex justify-center lg:justify-start">
                        <div className="shadow-xl bg-gray-50 p-4">
                            <Image
                                src="/vision.PNG"
                                alt="Vision Person"
                                width={330}     // adjust if needed
                                height={370}    // adjust if needed
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div>
                        <h3 className="text-3xl font-semibold text-gray-900 mb-3">
                            Mr. P. B. Viswanathan
                        </h3>

                        <p className="text-base text-gray-500 mb-8">
                            Managing Director – A1 Dental Clinic & Aesthetic Centre
                        </p>

                        <p className="text-gray-700 leading-relaxed text-lg">

                            Mr. P. B. Viswanathan is the Managing Director of A1 Dental Clinic & Aesthetic Centre, providing strategic leadership and administrative direction that drive the clinic’s vision and growth. As the driving force behind the institution, he is committed to excellence, ensures high standards of patient care, fostering advanced infrastructure, and a comfortable, patient-centered dental experience.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
