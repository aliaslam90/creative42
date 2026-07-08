"use client";
import Link from 'next/link';
import logoCreative from "@/assets/images/logocreative.png"
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeaderMenu = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`header-menu-wrap ${isScrolled ? "is-scrolled" : ""}`}>
                <div className="custom-container">
                    <div className="custom-row">

                        <Link href="/" className="logo">
                            <Image src={logoCreative} alt="Creative42 logo" priority />
                        </Link>

                        {/* Navigation menu */}
                        <nav className="navbar">
                            <ul className="menu">
                                <li>
                                    <Link href="/">Home <span /></Link>
                                </li>
                                <li>
                                    <Link href="/about">About Us <span /></Link>
                                </li>
                                <li>
                                    <Link href="/projects">Projects <span /></Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact Us <span /></Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Header right info */}
                        <div className="header-right-info">
                            <Link href="/contact" className="header-cta">Inquiry Now</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderMenu;
