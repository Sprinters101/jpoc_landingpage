import { cn } from "../utilities/lib";
import Container from "./Container";
import DashedHeader from "./DashedHeader";
import { motion } from "framer-motion";

const OurStory = () => {
    return (
        <div className="mt-13.25 md:mt-30" id="about-us">
            <div className="bg-grey_dark_active w-full pt-12.5 ">
                <Container className={""}>
                    <div className="flex flex-col gap-5 md:flex-row items-center  justify-between ">
                        <div className=" w-full ">
                            <motion.div
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="max-w-132.5 "
                            >
                                <DashedHeader>ABOUT JPOC</DashedHeader>
                                <div className="">
                                    <h1 className="font-montserrat text-h3 md:text-[30px] font-extrabold  text-text max-w-3xl mx-auto tracking-tight leading-tight mt-1 md:mt-4 uppercase">
                                        OUR STORY
                                    </h1>
                                    <p className="font-manrope text-m-xs md:text-m-lg  text-orange_light_active max-w-3xl mx-auto tracking-tight leading-relaxed mt-1 md:mt-4">
                                        JPOC Mobile Detail was founded from a
                                        passion for cars and a commitment to
                                        helping vehicle owners maintain clean,
                                        protected, and showroom-quality vehicles
                                        without the inconvenience of visiting a
                                        detailing shop.
                                    </p>
                                </div>
                                <div className="mt-11">
                                    <h1 className="font-montserrat text-h3 md:text-[30px] font-extrabold  text-text max-w-3xl mx-auto tracking-tight leading-tight mt-1 md:mt-4 uppercase">
                                        MISSION STATEMENT
                                    </h1>
                                    <p className="font-manrope text-m-xs md:text-m-lg  text-orange_light_active max-w-3xl mx-auto tracking-tight leading-relaxed mt-1 md:mt-4">
                                        To provide convenient, high-quality
                                        mobile detailing services that restore
                                        and protect vehicles while delivering
                                        exceptional customer service throughout
                                        Orange County
                                    </p>
                                </div>

                                <Tags className={"block md:hidden mt-5"} />
                            </motion.div>
                        </div>
                        {/* image  */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                                delay: 0.1,
                            }}
                            className="w-full relative min-h-[280px] md:min-h-[355px] "
                        >
                            <img
                                src="/images/about.svg"
                                alt="about us "
                                className="absolute md:-top-24  -right-4 md:-right-20 z-10 w-full"
                            />
                        </motion.div>
                    </div>
                    <div className="flex md:pb-32 pb-6.75">
                        <Tags className={"md:block hidden"} />
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                                delay: 0.1,
                            }}
                            className="relative md:block hidden"
                        >
                            <div className="absolute bottom-0 right-0 -left-25 top-10 w-186 z-0">
                                <img
                                    src="/images/aboutLines.svg"
                                    alt="motor car lines"
                                    className="w-186.75"
                                />
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default OurStory;

const Tags = ({ className }) => {
    const tags = [
        "Interior Detailing",
        "Exterior Detailing",
        "Paint Care",
        "Upholstery Cleaning",
        "Stain Removal",
        "Mobile Vehicle Detailing",
    ];
    return (
        <motion.div
            initial={{ x: -70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={cn("w-full max-w-179.75  z-10", className)}
        >
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                {tags.map((tag, index) => (
                    <div
                        key={`${tag}  ${index}`}
                        className="bg-bg border border-grey_normal_active pl-4 py-2.75  flex items-center gap-3 transition-colors duration-200 hover:border-orange_normal/30 "
                    >
                        {/* Geometric Orange Diamond Bullet */}
                        <div className="size-2.5 md:size-3.75 bg-orange_normal rotate-45 shrink-0" />
                        <span className="font-manrope text-[0.625rem] md:text-m-sm font-medium text-white tracking-wide">
                            {tag}
                        </span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
