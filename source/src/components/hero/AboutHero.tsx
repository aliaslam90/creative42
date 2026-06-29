"use client";

import btnArrow from '@/assets/images/btn-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties, useEffect, useState } from 'react';

interface DataType {
    title?: string;
}

const HeroV2 = ({ title }: DataType) => {
    const [isClient, setIsClient] = useState(false);
    const [scrollShift, setScrollShift] = useState(0);
    const pageTitle = title ? title : "Not Found";
    const titleWords = pageTitle.split(" ");
    const firstWord = titleWords[0];
    const restTitle = titleWords.slice(1).join(" ");

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
                className="hero-sec about-hero-sec"
                id="hero"
                style={{ "--hero-scroll-shift": `${scrollShift}px` } as CSSProperties}
            >
                <div className="custom-container">
                    <div className="hero-inner">

                        <div className="hero-video">
                            {isClient && (
                                <video loop muted autoPlay>
                                    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                                </video>
                            )}
                        </div>

                        <div className="hero-bottom">
                            <div className="left hero-title-overlay">
                                <h2 className="hero-page-title">
                                    <span className="hero-title-line-left">{firstWord}</span>
                                    {restTitle && <span className="hero-title-line-right">{restTitle}</span>}
                                </h2>
                            </div>
                            <Link href="/contact" className="theme-btn">
                                {`Let's Connect`}
                                <Image src={btnArrow} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV2;
