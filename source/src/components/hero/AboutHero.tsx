"use client";

import btnArrow from '@/assets/images/btn-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties, useEffect, useState } from 'react';

interface DataType {
    title?: string;
}

const HeroV2 = ({ title }: DataType) => {
    const [scrollShift, setScrollShift] = useState(0);
    const pageTitle = title ? title : "Not Found";
    const titleWords = pageTitle.split(" ");
    const firstWord = titleWords[0];
    const restTitle = titleWords.slice(1).join(" ");

    useEffect(() => {
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
                className="hero-sec home-hero-sec inner-page-hero-sec"
                id="hero"
                style={{ "--hero-scroll-shift": `${scrollShift}px` } as CSSProperties}
            >
                <div className="custom-container">
                    <div className="hero-inner home-hero-inner">
                        <div className="home-hero-content">
                            <div className="left hero-title-overlay">
                                <h2 className="hero-title-line hero-title-line-left hero-title-soft">{firstWord}</h2>
                                {restTitle && <h2 className="hero-title-line hero-title-line-right">{restTitle}</h2>}
                            </div>
                            <Link href="/contact" className="theme-btn">
                                {`Let's Creative`}
                                <Image src={btnArrow} alt="icon" loading="lazy" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV2;
