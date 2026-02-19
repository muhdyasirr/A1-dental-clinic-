"use client";

import Image from "next/image";

export default function OurVisionPerson() {
    return (
        <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* SECTION HEADING */}
                <h2 className="text-center text-2xl tracking-widest text-gray-500 uppercase mb-16">
                    Chief Dental Surgeon
                </h2>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* IMAGE */}

                    <div className="flex justify-center lg:justify-start">
                        <div className="shadow-xl bg-gray-50 p-4">
                            <Image
                                src="/Chief.jpeg"
                                alt="Vision Person"
                                width={420}     // adjust if needed
                                height={420}    // adjust if needed
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div>
                        <h3 className="text-3xl font-semibold text-gray-900 mb-3">
                            Dr. Vyshakh Viswanath
                        </h3>

                        <p className="text-base text-gray-500 mb-8">
                            Chief Dental Surgeon
                        </p>

                        <p className="text-gray-700 leading-relaxed text-lg">

                            Dr. Vyshakh Viswanath is the Chief Dental Surgeon of our clinic, dedicated to delivering high-quality, patient-centered dental care with a focus on aesthetics and long-term oral health.

                            He completed his Bachelor of Dental Surgery (BDS) in 2019 and has over 6+ years of clinical experience in dentistry. He further enhanced his expertise by earning a Fellowship in Aesthetic Dentistry (FAD) from Universitätsmedizin Greifswald, Germany, reflecting his commitment to advanced and contemporary dental care.
                            <br /><br />
                            Dr. Vyshakh has worked in several reputed hospitals and dental centers across Kerala, gaining extensive clinical exposure in various branches of dentistry. He is currently serving as a faculty member at Amrita School of Dentistry, Kochi, where he is actively involved in academic and clinical training.                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
