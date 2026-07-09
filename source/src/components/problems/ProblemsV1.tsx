"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProblemsData from "@/assets/jsonData/problems/ProblemsData.json";

gsap.registerPlugin(ScrollTrigger);

// Small fan-out jitter layered on top of the calculated convergence
// offset, so cards land in a tight overlapping stack (not spread out).
const fanJitter = [
    { x: 18, y: -22, rotate: -8 },
    { x: 8, y: -8, rotate: 4 },
    { x: -8, y: 8, rotate: -4 },
    { x: -18, y: 22, rotate: 8 },
];

const ProblemsV1 = () => {
    const pinRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const innerRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
            const cards = cardRefs.current;
            const inners = innerRefs.current;

            const grid = pinRef.current?.querySelector(".problems-grid");
            const gridRect = grid?.getBoundingClientRect();
            const centerX = gridRect ? gridRect.left + gridRect.width / 2 : 0;
            const centerY = gridRect ? gridRect.top + gridRect.height / 2 : 0;

            // Measure each card's current (untransformed) position first,
            // then compute the offset that brings it to the shared center.
            const offsets = cards.map((card, i) => {
                const r = card.getBoundingClientRect();
                const cardCenterX = r.left + r.width / 2;
                const cardCenterY = r.top + r.height / 2;
                return {
                    x: centerX - cardCenterX + fanJitter[i].x,
                    y: centerY - cardCenterY + fanJitter[i].y,
                    rotate: fanJitter[i].rotate,
                };
            });

            // Start with the heading alone: cards hidden in the center stack.
            gsap.set(cards, {
                x: (i) => offsets[i].x,
                y: (i) => offsets[i].y + 40,
                rotate: (i) => offsets[i].rotate,
                opacity: 0,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinRef.current,
                    start: "top top",
                    end: "+=220%",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            // 1. Heading fades into the background.
            tl.to(headingRef.current, { opacity: 0.12, duration: 1 }, 0)
                // 2. Cards appear one by one onto the center stack.
                .to(cards, {
                    opacity: 1,
                    y: (i) => offsets[i].y,
                    stagger: 0.45,
                    duration: 0.5,
                    ease: "power2.out",
                }, 0.5)
                // 3. Stack spreads evenly into the grid.
                .to(cards, { x: 0, y: 0, rotate: 0, stagger: 0.1, duration: 1, ease: "power2.inOut" }, 2.7)
                // 4. Cards flip to reveal the solution side.
                .to(inners, { rotateY: 180, stagger: 0.12, duration: 1, ease: "power2.inOut" }, 4.1);

            return () => {
                tl.scrollTrigger?.kill();
                tl.kill();
            };
        });

        return () => mm.revert();
    }, []);

    return (
        <div className="problems-sec" id="problems">
            <div className="problems-pin" ref={pinRef}>
                <div className="custom-container">
                    <div className="problems-heading" ref={headingRef}>
                        <h2>
                            <span className="problems-heading-soft">Great design isn&apos;t just how it looks.</span>
                            <span className="problems-heading-strong">It&apos;s whether it works.</span>
                        </h2>
                        <p>
                            We combine strategy, design, and branding so your product looks sharp,
                            functions smoothly, and actually moves the needle for your business.
                        </p>
                        <span className="problems-label">Here&apos;s what we solve.</span>
                    </div>

                    <div className="problems-grid">
                        {ProblemsData.map((problem, index) => (
                            <div
                                className="problems-card"
                                key={problem.id}
                                ref={(el) => {
                                    if (el) cardRefs.current[index] = el;
                                }}
                            >
                                <div
                                    className="problems-card-inner"
                                    ref={(el) => {
                                        if (el) innerRefs.current[index] = el;
                                    }}
                                >
                                    <div className="problems-card-face problems-card-front">
                                        <p>{problem.front}</p>
                                    </div>
                                    <div className="problems-card-face problems-card-back">
                                        <p>{problem.back}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemsV1;
