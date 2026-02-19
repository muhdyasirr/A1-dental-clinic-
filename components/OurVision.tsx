"use client";

import Image from "next/image";

export default function OurVisionPerson() {
    return (
        <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* SECTION HEADING */}
                <h2 className="text-center text-2xl tracking-widest text-gray-500 uppercase mb-16">
                    Our Vision
                </h2>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* IMAGE */}

                    <div className="flex justify-center lg:justify-start">
                        <div className="shadow-xl bg-gray-50 p-4">
                            <Image
                                src="/vision.PNG"
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
                            Mr. P. B. Viswanathan
                        </h3>

                        <p className="text-base text-gray-500 mb-8">
                            Managing Director – A1 Dental Clinic & Aesthetic Centre
                        </p>

                        <p className="text-gray-700 leading-relaxed text-lg">

                            Mr. P. B. Viswanathan is the Managing Director of A1 Dental Clinic & Aesthetic Centre and the guiding force behind its vision, values, and growth. With an illustrious career spanning 36 years of dedicated service at the Naval Base, Kochi, he brings exceptional discipline, leadership, and administrative excellence to the organization.

                            After retiring from the Naval Base, Kochi, he has been actively involved in establishing and nurturing the clinic, ensuring smooth functioning and a patient-friendly environment. His vast experience in management and commitment to service have played a vital role in building the clinic into a trusted and well-organized healthcare center.
                            <br /><br />
                            Under his constant guidance and supervision, the clinic continues to grow and provide quality dental care. Fondly regarded as the pillar and mentor of the institution, his presence creates a positive and well-coordinated atmosphere for both doctors and patients alike
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
