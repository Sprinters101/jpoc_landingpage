// src/components/Navbar.jsx
import { useState } from "react";
import Container from "./Container";
import Button from "./Button";

export default function Navbar() {
    // Hardcoded navigation items matching your layout
    const navItems = [
        { label: "Why Choose Us", href: "#why-choose-us", active: true },
        { label: "About Us", href: "#about-us", active: false },
        { label: "Pricing", href: "#pricing", active: false },
        { label: "Gallery", href: "#gallery", active: false },
        { label: "Testimonials", href: "#testimonials", active: false },
    ];

    // Mobile menu open state toggle
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-bg border-b border-grey_dark relative z-50">
            <Container className="flex items-center justify-between h-20.25">
                {/* Brand Logo & Name Area */}
                <a href="/" className="flex items-center gap-3 group">
                    <img
                        src="/images/logo.svg"
                        alt="JPOC Mobile Detail Logo"
                        className=" w-11  object-cover shrink-0"
                    />
                    <span className="font-montserrat text-m-xs font-bold md:font-extrabold text-white tracking-tight">
                        JPOC Mobile Detail
                    </span>
                </a>

                {/* Desktop Navigation Links */}
                <ul className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.label} className="relative py-2">
                            <a
                                href={item.href}
                                className={`font-jetbrian text-m-xs font-medium uppercase tracking-widest transition-colors duration-200 ${
                                    item.active
                                        ? "text-orange_normal"
                                        : "text-text hover:text-orange_normal"
                                }`}
                            >
                                {item.label}
                            </a>
                            {/* Underline accent indicator for active items */}
                            {item.active && (
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange_normal" />
                            )}
                        </li>
                    ))}
                </ul>

                {/* Desktop Action Call Button */}
                <div className="hidden lg:block">
                    <a href="#contact" className="">
                        <Button
                            variant="primary"
                            className={
                                "text-[0.75rem] text-orange_darker  px-6 py-2 font-medium "
                            }
                        >
                            Contact Us
                        </Button>
                    </a>
                </div>

                {/* Hamburger Mobile Menu Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`h-0.5 w-6 bg-orange_normal transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-orange_normal transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-orange_normal transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    />
                </button>
            </Container>

            {/* Mobile Drawer Overlay Panel */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-grey_dark_active border-b border-grey_dark flex flex-col p-6 gap-6 lg:hidden shadow-xl animate-fadeIn">
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block py-2 font-jetbrian text-m-xs font-extrabold uppercase tracking-widest ${
                                        item.active
                                            ? "text-orange_normal"
                                            : "text-text"
                                    }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Button
                        variant="primary"
                        className="w-full text-m-xs"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact Us
                    </Button>
                </div>
            )}
        </nav>
    );
}
