"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Union from "@/assets/images/Union.svg";
import AwardsV1Data from "@/assets/jsonData/awards/AwardsV1Data.json";

const STEP_ANGLES = [7, 14, 21, 28, 35, 42];
const AUTOPLAY_MS = 4000;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, angleDeg: number) {
    if (angleDeg <= 0) return "";
    const start = polarToCartesian(cx, cy, r, 0);
    const end = polarToCartesian(cx, cy, r, angleDeg);
    const largeArcFlag = angleDeg > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
}

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
    const angle = STEP_ANGLES[activeIndex] ?? 42;

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

                        <div className="process2-angle" aria-hidden="true">
                            <svg viewBox="0 0 200 200">
                                <circle className="process2-angle-ring" cx="100" cy="100" r="86" />
                                <path key={active.id} className="process2-angle-arc" d={describeArc(100, 100, 70, angle)} />
                                <line className="process2-angle-base" x1="100" y1="100" x2="186" y2="100" />
                                <line
                                    className="process2-angle-needle"
                                    x1="100"
                                    y1="100"
                                    x2="186"
                                    y2="100"
                                    style={{ transform: `rotate(-${angle}deg)`, transformOrigin: "100px 100px" }}
                                />
                                <circle className="process2-angle-tip" cx="100" cy="100" r="4" />
                            </svg>
                            <span className="process2-angle-value">{angle}&deg;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwardsV1;
