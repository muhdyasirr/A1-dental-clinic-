"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    delay?: string;
    as?: ElementType;
    threshold?: number;
}

export default function Animate({
    children,
    className = "reveal",
    delay = "",
    as: Tag = "div",
    threshold = 0.15,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("visible");
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <Tag ref={ref} className={`${className} ${delay}`}>
            {children}
        </Tag>
    );
}
