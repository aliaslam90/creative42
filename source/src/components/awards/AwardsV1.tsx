"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Union from "@/assets/images/Union.svg";
import AwardsV1Data from "@/assets/jsonData/awards/AwardsV1Data.json";

const AUTOPLAY_MS = 4000;

// One hand-drawn line icon per stage, monochrome, animated with a stroke
// "draw-in" each time it becomes active.
const STEP_ICONS = [
    // Discovery — magnifying glass over a grid
    <svg key="discovery" viewBox="0 0 64 64" fill="none">
        <path d="M8 8h20v20H8z" opacity="0.35" />
        <path d="M8 34h12v12H8z" opacity="0.35" />
        <circle cx="40" cy="40" r="13" />
        <path d="M49 49l8 8" strokeLinecap="round" />
    </svg>,
    // Concepts — a lightbulb of ideas
    <svg key="concepts" viewBox="0 0 64 64" fill="none">
        <path d="M32 8a15 15 0 0 0-8 27.7c1.6 1.1 2.6 3 2.6 5V44h10.8v-3.3c0-2 1-3.9 2.6-5A15 15 0 0 0 32 8z" />
        <path d="M26 50h12M28 56h8" strokeLinecap="round" />
        <path d="M32 2v4M8 26h4M52 26h4M14 12l3 3M50 12l-3 3" strokeLinecap="round" />
    </svg>,
    // Identity — abstract brand mark
    <svg key="identity" viewBox="0 0 64 64" fill="none">
        <circle cx="24" cy="26" r="14" />
        <path d="M34 40l16-24 6 4-18 26z" />
        <circle cx="24" cy="26" r="4" fill="currentColor" stroke="none" />
    </svg>,
    // Build — layered / wireframe screen
    <svg key="build" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="12" width="48" height="32" rx="3" />
        <path d="M8 22h48" />
        <path d="M16 30h14M16 36h20" strokeLinecap="round" />
        <path d="M24 50h16M32 44v6" strokeLinecap="round" />
    </svg>,
    // Go Live — rocket ascending
    <svg key="golive" viewBox="0 0 64 64" fill="none">
        <path d="M32 6c8 6 11 16 11 26 0 6-2 10-11 18-9-8-11-12-11-18 0-10 3-20 11-26z" />
        <circle cx="32" cy="24" r="4" />
        <path d="M21 40l-7 12M43 40l7 12M27 52h10" strokeLinecap="round" />
    </svg>,
    // Growth — ascending bar chart
    <svg key="growth" viewBox="0 0 64 64" fill="none">
        <path d="M10 50V34M24 50V24M38 50V30M52 50V14" strokeLinecap="round" />
        <path d="M10 22l14-10 12 6L52 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 4h10v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
];

const AwardsV1 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const pausedRef = useRef(false);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const timer = window.setInterval(() => {
            if (pausedRef.current) return;
            setActiveIndex((i) => (i + 1) % AwardsV1Data.length);
        }, AUTOPLAY_MS);

        return () => window.clearInterval(timer);
    }, []);

    const pause = () => {
        pausedRef.current = true;
    };
    const resume = () => {
        pausedRef.current = false;
    };

    const goTo = (index: number) => {
        pause();
        setActiveIndex(index);
    };

    const handleStepperKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            goTo((activeIndex + 1) % AwardsV1Data.length);
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            goTo((activeIndex - 1 + AwardsV1Data.length) % AwardsV1Data.length);
        }
    };

    const active = AwardsV1Data[activeIndex];

    return (
        <div className="process-sec2" id="process" onMouseEnter={pause} onMouseLeave={resume}>
            <div className="custom-container">
                <div className="process2-header">
                    <span className="process2-eyebrow">
                        <Image loading="lazy" src={Union} alt="icon" />
                        Our Design Process
                    </span>
                    <h2 className="process2-title">
                        Six Steps. One <span>Sharper Angle.</span>
                    </h2>
                    <p className="process2-desc">
                        Every project moves through the same disciplined path — from first insight to
                        measurable growth — angled 42 degrees away from the obvious.
                    </p>
                </div>

                <div className="process2-body">
                    <div
                        className="process2-stepper"
                        role="tablist"
                        aria-label="Design process steps"
                        onKeyDown={handleStepperKeyDown}
                    >
                        <div className="process2-track">
                            <div
                                className="process2-track-fill"
                                style={{ width: `${(activeIndex / (AwardsV1Data.length - 1)) * 100}%` }}
                            />
                        </div>

                        {AwardsV1Data.map((step, index) => (
                            <button
                                key={step.id}
                                type="button"
                                role="tab"
                                id={`process2-tab-${step.id}`}
                                aria-selected={index === activeIndex}
                                aria-controls="process2-panel"
                                tabIndex={index === activeIndex ? 0 : -1}
                                className={`process2-node${index === activeIndex ? " is-active" : ""}${index < activeIndex ? " is-done" : ""
                                    }`}
                                onClick={() => goTo(index)}
                                onFocus={pause}
                                onBlur={resume}
                            >
                                <span className="process2-node-dot">{String(index + 1).padStart(2, "0")}</span>
                                <span className="process2-node-label">{step.date}</span>
                            </button>
                        ))}
                    </div>

                    <div
                        className="process2-panel"
                        id="process2-panel"
                        role="tabpanel"
                        aria-labelledby={`process2-tab-${active.id}`}
                    >
                        <div className="process2-panel-text">
                            <span className="process2-panel-index">
                                {String(activeIndex + 1).padStart(2, "0")} / {String(AwardsV1Data.length).padStart(2, "0")}
                            </span>
                            <h3 key={`title-${active.id}`}>{active.title}</h3>
                            <p key={`desc-${active.id}`}>{active.description}</p>
                        </div>

                        <div className="process2-visual" aria-hidden="true">
                            <div className="process2-visual-icon" key={active.id}>
                                {STEP_ICONS[activeIndex]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwardsV1;
