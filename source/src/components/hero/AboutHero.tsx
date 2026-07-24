"use client";

import btnArrow from '@/assets/images/btn-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    title?: string;
    subtitle?: string;
}

const HeroV2 = ({ title, subtitle }: DataType) => {
    const pageTitle = title ? title : "Not Found";
    const titleWords = pageTitle.split(" ");
    const firstWord = titleWords[0];
    const restTitle = titleWords.slice(1).join(" ");

    return (
        <div className="inner-hero-sec" id="hero">
            <span className="inner-hero-watermark" aria-hidden="true">42&deg;</span>

            <div className="custom-container">
                <nav className="inner-hero-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link>
                    <span aria-hidden="true">/</span>
                    <span aria-current="page">{pageTitle}</span>
                </nav>

                <div className="inner-hero-content">
                    <h1 className="inner-hero-title">
                        <span className="inner-hero-title-word is-accent">{firstWord}</span>
                        {restTitle && <span className="inner-hero-title-word">{restTitle}</span>}
                    </h1>

                    {subtitle && <p className="inner-hero-desc">{subtitle}</p>}

                    <Link href="/contact" className="theme-btn inner-hero-btn">
                        {`Let's Creative`}
                        <Image src={btnArrow} alt="icon" loading="lazy" />
                    </Link>
                </div>
            </div>

            <span className="inner-hero-scroll-cue" aria-hidden="true">
                <span className="inner-hero-scroll-dot" />
            </span>
        </div>
    );
};

export default HeroV2;
