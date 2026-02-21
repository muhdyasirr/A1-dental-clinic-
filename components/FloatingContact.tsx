"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingContact() {
    const [visible, setVisible] = useState(false);
    const galleryRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        // Find the gallery section by its first section[id] or by scroll position
        const handleScroll = () => {
            // Hero2 section is roughly 2nd section — we show icons after 90% of viewport height scrolled
            const hero2El = document.getElementById("hero2-section");
            if (hero2El) {
                const rect = hero2El.getBoundingClientRect();
                setVisible(rect.top <= window.innerHeight * 0.9);
            } else {
                // Fallback: show after scrolling past 300px
                setVisible(window.scrollY > 300);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const instagramUrl =
        "https://www.instagram.com/a1dentalclinic?igsh=aG1kbXQzcW5sazZq&utm_source=qr";
    const whatsappUrl = "https://wa.me/919562603990";
    const phoneUrl = "tel:+919562603990";

    return (
        <div
            aria-label="Contact floating buttons"
            className={`fixed bottom-8 right-6 z-50 flex flex-col gap-4 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
        >
            {/* Instagram */}
            <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                title="Visit our Instagram"
                className="group w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-pink-400/60"
                style={{
                    background:
                        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                    boxShadow: "0 4px 24px 0 rgba(214, 36, 159, 0.45)",
                }}
            >
                {/* Instagram SVG icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-7 h-7"
                >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.226 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.013 7.053.072 5.775.131 4.602.425 3.635 1.392 2.667 2.36 2.374 3.532 2.315 4.81 2.254 6.09 2.24 6.499 2.24 12c0 5.501.014 5.91.075 7.19.059 1.278.352 2.45 1.32 3.418.967.967 2.14 1.261 3.418 1.32C8.333 23.987 8.741 24 12 24s3.667-.013 4.947-.072c1.278-.059 2.45-.353 3.418-1.32.967-.968 1.261-2.14 1.32-3.418.061-1.28.075-1.689.075-7.19 0-5.501-.014-5.91-.075-7.19-.059-1.278-.353-2.45-1.32-3.418C20.398.425 19.225.131 17.947.072 16.667.013 16.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                    <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
            </a>

            {/* WhatsApp */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp: 95626 03990"
                className="group w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
                style={{
                    background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
                    boxShadow: "0 4px 24px 0 rgba(37, 211, 102, 0.45)",
                }}
            >
                {/* WhatsApp SVG icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="white"
                    className="w-7 h-7"
                >
                    <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16.003c0 2.355.617 4.562 1.697 6.474L2.667 29.333l6.99-1.682a13.275 13.275 0 0 0 6.346 1.616c7.366 0 13.336-5.97 13.336-13.264 0-7.296-5.97-13.336-13.336-13.336zm0 24.267a11.02 11.02 0 0 1-5.6-1.526l-.402-.237-4.148.998.998-4.018-.262-.414A10.993 10.993 0 0 1 5.002 16c0-6.063 4.938-11 11.001-11C22.066 5 27 9.937 27 16c0 6.063-4.934 11-10.997 11zm6.03-8.239c-.33-.165-1.953-.96-2.256-1.07-.303-.11-.523-.165-.743.165-.22.33-.852 1.07-1.044 1.29-.193.22-.386.248-.716.083-.33-.165-1.394-.513-2.655-1.637-.981-.876-1.644-1.957-1.836-2.287-.193-.33-.021-.508.145-.672.15-.148.33-.386.495-.579.165-.192.22-.33.33-.55.11-.22.055-.41-.028-.579-.083-.165-.742-1.787-1.016-2.447-.268-.641-.54-.554-.742-.564l-.632-.011c-.22 0-.578.083-.881.413-.303.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.328 3.556 5.642 4.987.788.34 1.404.544 1.883.697.79.25 1.51.215 2.078.13.634-.094 1.953-.797 2.228-1.568.275-.771.275-1.432.193-1.568-.083-.137-.303-.22-.633-.385z" />
                </svg>
            </a>

            {/* Phone */}
            <a
                href={phoneUrl}
                aria-label="Call us"
                title="Call: 95626 03990"
                className="group w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
                style={{
                    background: "linear-gradient(135deg, #1e90ff 0%, #003d99 100%)",
                    boxShadow: "0 4px 24px 0 rgba(30, 144, 255, 0.45)",
                }}
            >
                {/* Phone SVG icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6"
                >
                    <path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
                </svg>
            </a>
        </div>
    );
}
