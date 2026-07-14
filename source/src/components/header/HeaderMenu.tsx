"use client";
import Link from 'next/link';
import logoCreative from "@/assets/images/logocreative.png"
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const DARK_SECTION_SELECTOR =
    ".problems-sec, .about-sec, .services-stack-sec, .awards-sec, .testimonial-sec, .our-approach-sec, .contact-sec, .footer-area";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/#services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact Us" },
];

const HeaderMenu = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header
                ref={headerRef}
                className={`header-menu-wrap ${isScrolled ? "is-scrolled" : ""} ${isDark ? "is-dark" : ""} ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
            >
                <div className="custom-container">
                    <div className="custom-row">

                        <Link href="/" className="logo" onClick={closeMobileMenu}>
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

                        {/* Mobile menu toggle */}
                        <button
                            type="button"
                            className="header-mobile-toggle"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        >
                            {isMobileMenuOpen ? (
                                <i className="las la-times" />
                            ) : (
                                <span className="header-mobile-toggle-lines">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown panel */}
                <div className={`header-mobile-panel ${isMobileMenuOpen ? "active" : ""}`}>
                    <nav>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} onClick={closeMobileMenu}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Link href="/contact" className="header-mobile-cta" onClick={closeMobileMenu}>
                        Book A Free Call
                    </Link>
                </div>
            </header>
        </>
    );
};

export default HeaderMenu;
