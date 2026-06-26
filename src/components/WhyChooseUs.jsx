// import { cn } from "../utilities/lib";
// import Container from "./Container";
// import DashedHeader from "./DashedHeader";

// const WhyChooseUs = () => {
//     const features = [
//         {
//             id: 1,
//             title: "Fully Mobile Service",
//             description:
//                 "We bring professional detailing directly to your home, workplace, or preferred location, saving you time and hassle.",
//             image: "/images/chooseUs/c_1.svg",
//             featured: false,
//         },
//         {
//             id: 2,
//             title: "We visit your home or workplace.",
//             description:
//                 "Enjoy premium vehicle care wherever you are. No waiting rooms, no travel, no interruptions to your day.",
//             image: "/images/chooseUs/c_2.svg",
//             featured: false,
//         },
//         {
//             id: 3,
//             title: "Pro Equipment & Products",
//             description:
//                 "We use high-quality detailing tools and trusted products to deliver safe, effective, and long-lasting results.",
//             image: "/images/chooseUs/c_3.svg",
//             featured: true, // This maps the active orange border from Figma
//         },
//         {
//             id: 4,
//             title: "Affordable Pricing",
//             description:
//                 "Awesome detailing services at great prices, giving you top-notch value without skimping on quality.",
//             image: "/images/chooseUs/c_4.svg",
//             featured: false,
//         },
//         {
//             id: 5,
//             title: "Flexible Scheduling",
//             description:
//                 "Book appointments that fit your schedule, including weekends and convenient time slots throughout the week.",
//             image: "/images/chooseUs/c_5.svg",
//             featured: false,
//         },
//         {
//             id: 6,
//             title: "Attention To Detail",
//             description:
//                 "Every vehicle receives meticulous care, ensuring every surface is cleaned, restored, and finished to the highest standard.",
//             image: "/images/chooseUs/c_6.svg",
//             featured: false,
//         },
//     ];

//     return (
//         <section id="why-choose-us" className="w-full bg-bg pt-10 md:pt-30">
//             <Container>
//                 <div className="">
//                     {/* Eyebrow Header Subtitle Block */}
//                     <DashedHeader className="uppercase justify-center ">
//                         The JPOC Difference
//                     </DashedHeader>

//                     {/* Main Section Header */}
//                     <h2 className="font-montserrat text-b2 md:text-[30px] font-extrabold text-center text-text max-w-3xl mx-auto tracking-tight leading-tight mt-1 md:mt-4 uppercase">
//                         Why Discerning Owners <br className="block md:hidden" />
//                         <span className="text-orange_normal">Choose Us</span>
//                     </h2>
//                 </div>

//                 {/* Responsive Features Matrix Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-10 ">
//                     {features.map((feature, index) => (
//                         <div
//                             key={index}
//                             className={cn(
//                                 `bg-grey_dark_active p-4 py-8 md:p-8 transition-all duration-300 flex flex-col gap-5 border border-transparent`,
//                                 "hover:border-orange_normal hover:shadow-[0_0_20px_rgba(224,125,49,0.1)] hover:bg-grey_dark",
//                             )}
//                         >
//                             {/* Feature Box Image Wrapper */}
//                             <div className="w-full aspect-video max-h-33 overflow-hidden bg-grey_dark relative">
//                                 <img
//                                     src={feature.image}
//                                     alt={feature.title}
//                                     className="w-full h-full  object-cover  hover:grayscale-0 transition-all duration-500"
//                                 />
//                             </div>

//                             {/* Text Layout Stack */}
//                             <div className="flex flex-col gap-3 grow">
//                                 <h3 className="font-montserrat text-base md:text-b2 font-bold text-white tracking-tight">
//                                     {feature.title}
//                                 </h3>
//                                 <p className="font-manrope text-m-xs md:text-base  text-orange_light_active leading-relaxed max-w-68.5 sm:max-w-full">
//                                     {feature.description}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default WhyChooseUs;

// src/components/WhyChooseUs.jsx
import { motion } from "framer-motion";
import { cn } from "../utilities/lib";
import Container from "./Container";
import DashedHeader from "./DashedHeader";

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            title: "Fully Mobile Service",
            description:
                "We bring professional detailing directly to your home, workplace, or preferred location, saving you time and hassle.",
            image: "/images/chooseUs/c_1.svg",
            featured: false,
        },
        {
            id: 2,
            title: "We visit your home or workplace.",
            description:
                "Enjoy premium vehicle care wherever you are. No waiting rooms, no travel, no interruptions to your day.",
            image: "/images/chooseUs/c_2.svg",
            featured: false,
        },
        {
            id: 3,
            title: "Pro Equipment & Products",
            description:
                "We use high-quality detailing tools and trusted products to deliver safe, effective, and long-lasting results.",
            image: "/images/chooseUs/c_3.svg",
            featured: true,
        },
        {
            id: 4,
            title: "Affordable Pricing",
            description:
                "Awesome detailing services at great prices, giving you top-notch value without skimping on quality.",
            image: "/images/chooseUs/c_4.svg",
            featured: false,
        },
        {
            id: 5,
            title: "Flexible Scheduling",
            description:
                "Book appointments that fit your schedule, including weekends and convenient time slots throughout the week.",
            image: "/images/chooseUs/c_5.svg",
            featured: false,
        },
        {
            id: 6,
            title: "Attention To Detail",
            description:
                "Every vehicle receives meticulous care, ensuring every surface is cleaned, restored, and finished to the highest standard.",
            image: "/images/chooseUs/c_6.svg",
            featured: false,
        },
    ];

    // Parent orchestration: holds child elements in their initial state until scrolled into view
    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Smooth spacing cadence between each grid element entry
            },
        },
    };

    // Child elements: Increased slide range (y: 100) and dialed-in curve to showcase the physical motion
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1.0], // Custom deceleration cubic-bezier curve to show prominent movement
            },
        },
    };

    return (
        <section
            id="why-choose-us"
            className="w-full bg-bg pt-10 md:pt-30 overflow-hidden"
        >
            <Container>
                {/* --- Header Area: High-visibility slide-down and fade-in entry --- */}
                <motion.div
                    initial={{ y: -60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.215, 0.61, 0.355, 1.0],
                    }}
                    className=""
                >
                    {/* Eyebrow Header Subtitle Block */}
                    <DashedHeader className="uppercase justify-center ">
                        The JPOC Difference
                    </DashedHeader>

                    {/* Main Section Header */}
                    <h2 className="font-montserrat text-b2 md:text-[30px] font-extrabold text-center text-text max-w-3xl mx-auto tracking-tight leading-tight mt-1 md:mt-4 uppercase">
                        Why Discerning Owners <br className="block md:hidden" />
                        <span className="text-orange_normal">Choose Us</span>
                    </h2>
                </motion.div>

                {/* --- Features Grid: Controls the staggered sequence triggers --- */}
                <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.05 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-10"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={cn(
                                `bg-grey_dark_active p-4 py-8 md:p-8 transition-all duration-300 flex flex-col gap-5 border border-transparent`,
                                "hover:border-orange_normal hover:shadow-[0_0_20px_rgba(224,125,49,0.1)] hover:bg-grey_dark",
                            )}
                        >
                            {/* Feature Box Image Wrapper */}
                            <div className="w-full aspect-video max-h-33 overflow-hidden bg-grey_dark relative">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full  object-cover  hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Text Layout Stack */}
                            <div className="flex flex-col gap-3 grow">
                                <h3 className="font-montserrat text-base md:text-b2 font-bold text-white tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="font-manrope text-m-xs md:text-base  text-orange_light_active leading-relaxed max-w-68.5 sm:max-w-full">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;
