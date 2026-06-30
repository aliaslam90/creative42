"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextGroup = ({ paragraphs }: { paragraphs: string[] }) => {
    useEffect(() => {
        const splitTextManually = (element: HTMLElement) => {
            const text = element.textContent || "";
            element.dataset.originalText = text;
            element.innerHTML = "";
            const words = text.split(" ");

            words.forEach((word, i) => {
                const wordSpan = document.createElement("span");
                wordSpan.style.display = "inline-block";
                wordSpan.style.overflow = "hidden";
                wordSpan.className = "word";

                word.split("").forEach((char) => {
                    const charSpan = document.createElement("span");
                    charSpan.textContent = char;
                    charSpan.style.display = "inline-block";
                    charSpan.className = "char";
                    wordSpan.appendChild(charSpan);
                });

                element.appendChild(wordSpan);

                if (i < words.length - 1) {
                    element.appendChild(document.createTextNode(" "));
                }
            });
        };

        const groups = document.querySelectorAll(".reveal-type-group");
        groups.forEach((group) => {
            const elements = group.querySelectorAll(".reveal-type-sequence");
            elements.forEach((el) => splitTextManually(el as HTMLElement));

            const chars = group.querySelectorAll(".char");
            gsap.from(chars, {
                scrollTrigger: {
                    trigger: group,
                    start: "top 75%",
                    end: "bottom 35%",
                    scrub: true,
                    markers: false,
                },
                opacity: 0.2,
                stagger: 0.035,
            });
        });

        return () => {
            groups.forEach((group) => {
                group.querySelectorAll(".reveal-type-sequence").forEach((el) => {
                    const originalText = (el as HTMLElement).dataset.originalText;
                    if (originalText) {
                        el.textContent = originalText;
                    }
                });
            });
        };
    }, []);

    return (
        <div className="reveal-type-group about-story-copy">
            {paragraphs.map((paragraph) => (
                <p className="reveal-type-sequence" key={paragraph}>{paragraph}</p>
            ))}
        </div>
    );
};

export default AnimatedTextGroup;
