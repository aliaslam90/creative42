"use client";
import btnArrowIcon from "@/assets/images/btn-arrow.svg"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";

const HeroV1 = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <div className="hero-sec" id="hero">
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

                        <div className="hero-top">

                            {/* Hero Description */}
                            <div className="hero-top-desc">
                                <p>“ At Creative42.ai, true creativity begins when a brand looks from a sharper angle: 42 degrees away from the ordinary.</p>
                                <p>From UAE market strategy and identity systems to content, websites, and campaigns, we design digital experiences that cut through noise and connect with people. “</p>
                            </div>

                            {/* Author Information */}
                            <div className="author-info">
                                <h4>Creative42.ai</h4>
                                <span>UAE-Based Design & Marketing Agency</span>
                            </div>
                        </div>

                        {/* Hero Bottom Section */}
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>Creativity</h2>
                                <h2>At 42 Degrees</h2>
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
