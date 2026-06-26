import { motion } from "framer-motion";
const AnimateLines = () => {
    return (
        <div className="pb-20 md:pb-30">
            <div className=" flex items-center justify-between gap-6 md:gap-22">
                <motion.div
                    initial={{ x: -70, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full"
                >
                    <img
                        src="/images/line_1.svg"
                        alt="line 1"
                        className="w-full"
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 70, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full"
                >
                    <img
                        src="/images/line_2.svg"
                        alt="line 2"
                        className="w-full"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default AnimateLines;
