// src/components/Footer.jsx
import { Call, Sms, Clock } from "iconsax-reactjs";
import Container from "./Container";

export default function Footer() {
    const companyLinks = [
        { label: "Services", href: "#pricing" },
        { label: "About Us", href: "#about-us" },
        { label: "Portfolio", href: "#gallery" },
        { label: "Reviews", href: "#testimonials" },
        { label: "Get Quote", href: "#contact" },
    ];

    const hours = [
        { days: "Mondays", time: "7:00 AM – 11:00 AM" },
        { days: "Tuesdays", time: "7:00 AM – 6:00 PM" },
        { days: "Wednesdays & Thursdays", time: "7:00 AM – 12:00 PM" },
        { days: "Fridays", time: "7:00 AM – 6:00 PM" },
        { days: "Saturdays & Sundays", time: "7:00 AM – 3:00 PM" },
    ];

    return (
        <footer className="w-full bg-bg relative overflow-hidden border-t border-grey_dark/50 py-10 md:py-[108px]  min-h-[610px]">
            {/* Immersive Background Image Layer with Amber Glow Tint */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="/images/footerBg.svg"
                    alt="Sports car overlay background graphic"
                    className="w-full h-full object-cover object-center "
                    onError={(e) => {
                        e.target.style.display = "none";
                    }}
                />
                {/* Deep linear gradient fallback blending the graphic flawlessly to black */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/80" />
            </div>

            <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                {/* Column 1: Brand & Identity Area (Spans 4 columns) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <a
                        href="/"
                        className="flex items-center gap-3 self-start group"
                    >
                        <img
                            src="/images/logo.svg"
                            alt="JPOC Mobile Detail Badge Logo"
                            className="h-[119px] w-auto object-contain"
                        />
                        <span className="font-montserrat text-b2 font-extrabold text-white tracking-tight leading-tight uppercase">
                            JPOC Mobile
                            <br />
                            Detail
                        </span>
                    </a>
                    <p className="font-manrope text-[15px] text-grey_light opacity-60 tracking-wide mt-2">
                        © 2026 JPOC Mobile Detail. All Rights Reserved.
                    </p>
                </div>

                {/* Column 2: Quick Links Directory (Spans 3 columns) */}
                <div className="lg:col-span-3 flex flex-col gap-5">
                    <h3 className="font-jetbrian text-jb-lg font-extrabold text-white tracking-tight capitalize">
                        Company
                    </h3>
                    <ul className="flex flex-col gap-3.5">
                        {companyLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="font-jetbrian text-[0.9375rem] md:text-[17px] text-orange_light_active hover:text-orange_normal transition-colors duration-200 tracking-wide"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact & Hours Desk (Spans 5 columns) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <h3 className="font-jetbrian text-jb-lg font-extrabold text-white tracking-tight capitalize">
                        Contact Us
                    </h3>

                    <div className="flex flex-col gap-5">
                        {/* Phone Entry */}
                        <div className="flex items-center gap-4">
                            <div className="size-10 bg-grey_normal_active border border-grey_dark/60 rounded-full flex items-center justify-center text-orange_normal shrink-0">
                                <Call size="18" variant="Bold" />
                            </div>
                            <a
                                href="tel:+19495285005"
                                className="font-jetbrian text-[10px] md:text-jb-md font-medium text-orange_light_active hover:text-orange_normal transition-colors"
                            >
                                +1 (949) 528-5005
                            </a>
                        </div>

                        {/* Email Entry */}
                        <div className="flex items-center gap-4">
                            <div className="size-10 bg-grey_normal_active border border-grey_dark/60 rounded-full flex items-center justify-center text-orange_normal shrink-0">
                                <Sms size="18" variant="Bold" />
                            </div>
                            <a
                                href="mailto:jamesponce243@gmail.com"
                                className="font-jetbrian text-[10px] :text-jb-md font-medium text-orange_light_active hover:text-orange_normal transition-colors break-all"
                            >
                                jamesponce243@gmail.com
                            </a>
                        </div>

                        {/* Business Calendar Stack */}
                        <div className="flex items-start gap-4 mt-2">
                            <div className="size-10 bg-grey_normal_active border border-grey_dark/60 rounded-full flex items-center justify-center text-orange_normal shrink-0 mt-0.5">
                                <Clock size="18" variant="Bold" />
                            </div>
                            <ul className="flex flex-col gap-2.5 w-full">
                                {hours.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="font-jetbrian text-[0.625rem] md:text-jb-sm tracking-wide text-grey_light flex sm:items-center gap-1"
                                    >
                                        <span className="font-bold text-orange_light_active shrink-0">
                                            {item.days} -
                                        </span>
                                        <span className="">{item.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
