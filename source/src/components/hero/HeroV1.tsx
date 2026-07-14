"use client";
import btnArrowIcon from "@/assets/images/btn-arrow.svg"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import FactData from "@/assets/jsonData/fact/FactData.json";

const heroStatIcons: Record<number, string> = {
    1: "iconoir-star",
    2: "iconoir-flash",
    3: "iconoir-check-circle",
};

const HeroV1 = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <div
                className="hero-sec home-hero-sec"
                id="hero"
            >
                <div className="custom-container">
                    <div className="hero-inner home-hero-inner">

                        <div className="home-hero-video">
                            {isClient && (
                                <video loop muted autoPlay playsInline>
                                    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                                </video>
                            )}
                        </div>

                        <div className="home-hero-content">
                            <div className="left hero-title-overlay">
                                <h2 className="hero-title-line hero-title-line-left hero-title-soft">Creativity</h2>
                                <h2 className="hero-title-line hero-title-line-right">At <span className="hero-title-accent">42</span> Degrees</h2>
                            </div>

                            <p className="home-hero-desc">
                                {`Creativity is not linear, it is angular. At Creative42.ai, we deliver marketing solutions seen from a smarter, sharper, and more original angle.`}
                            </p>

                            <div className="home-hero-stats">
                                <span className="home-hero-stat">
                                    <i className="iconoir-calendar" />
                                    <strong>{isClient ? <CountUp end={20} duration={2} /> : 20}+</strong> Years in the Industry
                                </span>
                                {FactData.slice(0, 3).map(fact => (
                                    <span className="home-hero-stat" key={fact.id}>
                                        <i className={heroStatIcons[fact.id]} />
                                        <strong>{isClient ? <CountUp end={Number(fact.end)} duration={2} /> : fact.end}+</strong> {fact.title}
                                    </span>
                                ))}

                                <Link href="/contact" className="theme-btn hero-cta-btn">
                                    {`Let's Creative`}
                                    <Image src={btnArrowIcon} alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV1;
