"use client";
import Link from 'next/link';
import logoCreative from "@/assets/images/logocreative.png"
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const DARK_SECTION_SELECTOR =
    ".problems-sec, .about-sec, .services-stack-sec, .awards-sec, .testimonial-sec, .our-approach-sec, .contact-sec, .footer-area";

interface HeaderMenuProps {
    onOpenSidebar: () => void;
}

const HeaderMenu = ({ onOpenSidebar }: HeaderMenuProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const headerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);

            // Probe just below the fixed header's own bottom edge, since
            // elementFromPoint would otherwise hit the header itself (it's
            // painted on top of everything) instead of the section behind it.
            const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 70;
            const probeY = headerHeight + 4;
            const sections = document.querySelectorAll(DARK_SECTION_SELECTOR);
            let dark = false;
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= probeY && rect.bottom >= probeY) {
                    dark = true;
                }
            });
            setIsDark(dark);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <>
            <header
                ref={headerRef}
                className={`header-menu-wrap ${isScrolled ? "is-scrolled" : ""} ${isDark ? "is-dark" : ""}`}
            >
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

                        {/* Mobile menu toggle (opens the full sidebar) */}
                        <span
                            className="header-hamburger"
                            role="button"
                            tabIndex={0}
                            aria-label="Open menu"
                            onClick={onOpenSidebar}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") onOpenSidebar();
                            }}
                        >
                            <span />
                            <span />
                            <span />
                        </span>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderMenu;
