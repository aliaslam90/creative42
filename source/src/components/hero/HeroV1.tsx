"use client";
import btnArrowIcon from "@/assets/images/btn-arrow.svg"
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties, useEffect, useState } from "react";

const HeroV1 = () => {

    const [isClient, setIsClient] = useState(false);
    const [scrollShift, setScrollShift] = useState(0);

    useEffect(() => {
        setIsClient(true);

        const handleScroll = () => {
            setScrollShift(Math.min(window.scrollY * 0.18, 120));
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className="hero-sec"
                id="hero"
                style={{ "--hero-scroll-shift": `${scrollShift}px` } as CSSProperties}
            >
                <div className="custom-container">
                    <div className="hero-inner">

                        {/* Video Section */}
                        <div className="hero-video">
                            {isClient && (
                                <video loop muted autoPlay>
                                    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                                </video>
                            )}
                        </div>

                        {/* Hero Bottom Section */}
                        <div className="hero-bottom">
                            <div className="left hero-title-overlay">
                                <h2 className="hero-title-line hero-title-line-left">Creativity</h2>
                                <h2 className="hero-title-line hero-title-line-right">At <span className="hero-title-accent">42</span> Degrees</h2>
                            </div>

                            {/* Button Section */}
                            <Link href="/contact" className="theme-btn">
                                {`Let's Connect`}
                                <Image src={btnArrowIcon} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV1;
