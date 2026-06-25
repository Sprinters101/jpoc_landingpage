import { useState, useEffect } from "react";
import { ArrowUp } from "iconsax-reactjs";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Monitor window scrolling thresholds
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className={`fixed bottom-6 right-6 z-50 size-12 bg-grey_dark_active/90 border border-grey_dark backdrop-blur-md rounded-full flex items-center justify-center text-orange_normal shadow-2xl transition-all duration-300 transform outline-none focus:ring-2 focus:ring-orange_normal/50 cursor-pointer ${
                isVisible
                    ? "opacity-100 translate-y-0 pointer-events-auto hover:bg-orange_normal hover:text-grey_dark_active hover:-translate-y-1"
                    : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
            <ArrowUp size="22" variant="Linear" className="stroke-[2.5]" />
        </button>
    );
}
