"use client";
import Link from 'next/link';
import logoCreative from "@/assets/images/logocreative.png"
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Parses an rgb/rgba() computed color string and returns its perceived luminance (0-255).
const luminanceOf = (color: string): number | null => {
    const match = color.match(/rgba?\(([^)]+)\)/);
    if (!match) return null;
    const parts = match[1].split(",").map((n) => parseFloat(n.trim()));
    const [r, g, b, a = 1] = parts;
    if (a === 0) return null; // fully transparent: caller should keep looking
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// Site-wide convention: any section without an explicit background inherits
// the black <body> background, so a transparent computed color counts as dark.
const isElementDark = (el: Element): boolean => {
    const lum = luminanceOf(getComputedStyle(el).backgroundColor);
    return lum === null ? true : lum < 128;
};

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

            // Walk the page's top-level sections (rather than a hand-maintained
            // selector list) so this works automatically on every page. Fixed-
            // position overlays (the header bar itself, the full-screen sidebar)
            // are skipped since they aren't real page content to sample.
            const main = document.querySelector(".aixor-main");
            let dark = false;
            if (main) {
                for (const section of Array.from(main.children)) {
                    if (getComputedStyle(section).position === "fixed") continue;
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= probeY && rect.bottom >= probeY && rect.height > 0) {
                        dark = isElementDark(section);
                        break;
                    }
                }
            }
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
