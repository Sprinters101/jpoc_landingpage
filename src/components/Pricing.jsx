// src/components/Pricing.jsx
import Container from "./Container";
import Button from "./Button";
import DashedHeader from "./DashedHeader";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick01Icon } from "@hugeicons/core-free-icons";

const Pricing = () => {
    const packages = [
        {
            title: "Interior Detailing",
            price: "$85",
            isCustom: false,
            features: [
                "Vacuuming",
                "Shampooing",
                "Interior Surface Cleaning",
                "Basic Stain Removal",
            ],
            isFeatured: false,
            buttonText: "Select Package",
        },
        {
            title: "Full Detail Package",
            price: "Custom Pricing",
            isCustom: true,
            features: [
                "Interior Detail",
                "Exterior Detail",
                "Tire Cleaning",
                "Window Cleaning",
            ],
            isFeatured: true,
            badgeText: "Most Popular",
            buttonText: "Book Featured Package",
        },
        {
            title: "Exterior Detailing",
            price: "$45",
            isCustom: false,
            features: [
                "Exterior Wash",
                "Wheel Cleaning",
                "Tire Cleaning",
                "Window Cleaning",
            ],
            isFeatured: false,
            buttonText: "Select Package",
        },
        {
            title: "Additional Services",
            price: "", // Empty based on layout structure
            isCustom: false,
            features: [
                "Carpet & Seat Extraction",
                "Paint Decontamination",
                "Wheel & Tire Cleaning",
                "Window Cleaning",
                "Mobile Detailing Service",
            ],
            isFeatured: false,
            buttonText: "Select Package",
        },
    ];

    return (
        <section id="pricing" className="w-full bg-bg pt-10 md:pt-30">
            <Container>
                {/* Section Top Header Block */}
                <DashedHeader className="uppercase justify-center ">
                    OUR SERVICE PACKAGES
                </DashedHeader>

                {/* Main Section Header */}
                <h2 className="font-montserrat text-b2 md:text-[30px] font-extrabold text-center text-text max-w-3xl mx-auto tracking-tight leading-tight mt-1 md:mt-4 uppercase">
                    TRANSPARENT PRICING FOR EVERY NEED
                </h2>

                {/* Responsive Pricing 4-Column Flex/Grid Stack */}
                <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start mb-5 md:mb-24">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`bg-grey_dark_active group p-8 relative flex flex-col justify-between h-full min-h-120 transition-all duration-1000 border border-grey_normal_active hover:border-orange_normal hover:border-2 hover:bg-grey_dark `}
                        >
                            {/* Featured Badge Pill */}
                            {pkg.isFeatured && (
                                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-orange_normal text-white font-jetbrian text-[10px] font-extrabold uppercase tracking-widest px-2 py-1">
                                    {pkg.badgeText}
                                </div>
                            )}

                            {/* Title & Pricing Block */}
                            <div>
                                <h3 className="font-montserrat text-b3 md:text-b2 font-bold text-white mb-2 tracking-tight">
                                    {pkg.title}
                                </h3>
                                {pkg.price && (
                                    <p
                                        className={`font-jetbrian font-extrabold text-white mb-8 tracking-tight ${pkg.isCustom ? "text-b2 leading-tight" : "text-display"}`}
                                    >
                                        {pkg.price}
                                    </p>
                                )}
                                {
                                    !pkg.price && (
                                        <div className="h-[73px]" />
                                    ) /* Vertical spacer alignment for empty price headers */
                                }

                                {/* Checklist Matrix */}
                                <ul className="flex flex-col gap-4 mb-6">
                                    {pkg.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-3"
                                        >
                                            {/* Orange Checkmark Icon Shape */}
                                            <span className="text-orange_normal font-bold font-jetbrian text-b3 select-none mt-0.5">
                                                <HugeiconsIcon
                                                    icon={Tick01Icon}
                                                    size={20}
                                                />
                                            </span>
                                            <span className="font-manrope text-base text-orange_light_active tracking-wide">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Button Segment linking directly to your Button component handles */}
                            <Button
                                variant="outline"
                                className="w-full text-center py-[1.0625rem] group-hover:bg-orange_normal group-hover:text-grey_dark_active transition-all ease-in-out duration-1000 text-m-xs md:px-0"
                            >
                                {pkg.buttonText}
                            </Button>
                        </div>
                    ))}
                </div>
            </Container>
            <AddOns />
        </section>
    );
};

export default Pricing;

const AddOns = () => {
    const addOns = [
        { name: "Excessive Dog Hair Removal", price: "+$15" },
        { name: "Excessive Stain Removal", price: "+$15" },
        { name: "Clay Bar Treatment", price: "+$50" },
        { name: "Paint Polishing & Wax Protection", price: "+$50" },
    ];

    return (
        <div className="w-full p-10 bg-grey_dark_active">
            <h3 className="font-montserrat text-b3 md:text-b2 font-bold text-white mb-2 tracking-tight text-center ">
                Upcharges / Add-On Services
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4 max-w-5xl mx-auto mt-8">
                {addOns.map((addon, index) => (
                    <div
                        key={index}
                        className="bg-bg  rounded-lg px-6 py-5 flex items-center justify-between transition-colors duration-200"
                    >
                        <span className="font-manrope md:text-m-sm text-m-xs font-medium text-grey_light tracking-wide">
                            {addon.name}
                        </span>
                        <span className="font-jetbrian md:text-base text-m-xs font-extrabold text-orange_normal tracking-wide">
                            {addon.price}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
