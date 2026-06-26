// src/components/GetInTouch.jsx
import { Call, Sms, Clock, Instagram } from "iconsax-reactjs";
import { FaTiktok } from "react-icons/fa";

export default function GetInTouch() {
    const hours = [
        { days: "Mondays", time: "7:00 AM – 11:00 AM" },
        { days: "Tuesdays", time: "7:00 AM – 6:00 PM" },
        { days: "Wednesdays & Thursdays", time: "7:00 AM – 12:00 PM" },
        { days: "Fridays", time: "7:00 AM – 6:00 PM" },
        { days: "Saturdays & Sundays", time: "7:00 AM – 3:00 PM" },
    ];

    return (
        <div className="w-full max-w-[32.3125rem] flex flex-col gap-10 text-white">
            {/* Block 1: Contact Methods */}
            <div className="flex flex-col gap-6">
                <div className="relative pb-2 self-start">
                    <h2 className="font-montserrat text-b2 md:text-[31px] font-extrabold uppercase tracking-tight">
                        Get In Touch
                    </h2>
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange_normal" />
                </div>

                <div className="flex flex-col gap-5 ">
                    {/* Phone Row */}
                    <div className="flex items-center gap-4">
                        <div className="size-8 md:size-12 bg-grey_normal_active border border-grey_dark rounded-full flex items-center justify-center text-orange_normal shrink-0">
                            <Call
                                variant="Bold"
                                className="md:size-[20px] size-[18px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-manrope text-12 md:text-[18px] font-bold uppercase tracking-widest text-grey_light opacity-60">
                                Phone
                            </span>
                            <a
                                href="tel:+19495285005"
                                className="font-manrope text-[18px] font-bold text-white hover:text-orange_normal transition-colors"
                            >
                                +1 (949) 528-5005
                            </a>
                        </div>
                    </div>

                    {/* Email Row */}
                    <div className="flex items-center gap-4">
                        <div className="size-8 md:size-12 bg-grey_normal_active border border-grey_dark rounded-full flex items-center justify-center text-orange_normal shrink-0">
                            <Sms
                                variant="Bold"
                                className="md:size-[20px] size-[18px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-manrope text-12 md:text-[18px] font-bold uppercase tracking-widest text-grey_light opacity-60">
                                Email
                            </span>
                            <a
                                href="mailto:jamesponce243@gmail.com"
                                className="font-manrope text-12 md:text-[18px] font-bold text-white hover:text-orange_normal transition-colors"
                            >
                                jamesponce243@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Hours Row */}
                    <div className="flex items-start gap-4">
                        <div className="size-8 md:size-12 bg-grey_normal_active border border-grey_dark rounded-full flex items-center justify-center text-orange_normal shrink-0 mt-1">
                            <Clock
                                variant="Bold"
                                className="md:size-[20px] size-[18px]"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <span className="font-manrope text-[12px] md:text-[18px] font-bold uppercase tracking-widest text-grey_light opacity-60 mb-3">
                                Hours
                            </span>

                            {/* Detailed Business Calendar Registry */}
                            <ul className="flex flex-col gap-2.5">
                                {hours?.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="font-manrope text-[12px] md:text-[18px] md:text-[1.125rem] tracking-wide text-text flex  sm:items-center gap-1"
                                    >
                                        <span className="font-bold text-white shrink-0">
                                            {item.days} –
                                        </span>
                                        <span className="text-grey_light font-bold">
                                            {item.time}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Block 2: Social Matrix */}
            <div className="flex flex-col gap-4 pt-4 border-t border-grey_dark/50">
                <h3 className="font-montserrat text-m-lg md:text-[24px] font-bold tracking-tight">
                    Follow Us
                </h3>

                <div className="flex items-center gap-3">
                    {/* Instagram Handle */}
                    <a
                        href="https://www.instagram.com/jpoc.cardetailing?igsh=ZXE5d3pqZWFnMTls"
                        target="_blank"
                        rel="noreferrer"
                        className="size-8 md:size-12  bg-grey_normal_active border border-grey_dark rounded-full flex items-center justify-center text-orange_normal hover:bg-orange_normal hover:text-grey_dark_active transition-all duration-300"
                        aria-label="Follow JPOC on Instagram"
                    >
                        <Instagram
                            className="md:size-[20px] size-[18px]"
                            variant="Bold"
                        />
                    </a>

                    {/* TikTok Handle */}
                    <a
                        href="https://www.tiktok.com/@jpoc.mobiledetailer"
                        target="_blank"
                        rel="noreferrer"
                        className="size-8 md:size-12 bg-grey_normal_active border border-grey_dark rounded-full flex items-center justify-center text-orange_normal hover:bg-orange_normal hover:text-grey_dark_active transition-all duration-300 font-bold text-sm"
                        aria-label="Follow JPOC on TikTok"
                    >
                        {/* Direct clean semantic custom TikTok character string symbol vector to avoid extra package imports */}
                        <span className="font-sans transform -translate-y-px">
                            <FaTiktok
                                className="md:size-[20px] size-[18px]"
                                variant="Bold"
                            />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
