import Container from "./Container";
import GetInTouch from "./GetInTouch";
import QuoteForm from "./QuoteForm";
import { motion } from "framer-motion";
// import GetInTouch from "./GetInTouch";

export default function ContactSection() {
    return (
        <section id="contact" className="w-full bg-bg py-20 md:py-32">
            <Container className="flex flex-col md:flex-row gap-12 lg:gap-6 items-center">
                {/* Left Column Slot: Form Wrapper Card (Spans 7 columns on desktop) */}
                <motion.div
                    initial={{ x: -70, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full max-w-194.5 border-grey_dark_active border bg-grey_dark_hover p-6 md:p-10 rounded-2xl"
                >
                    <QuoteForm />
                </motion.div>

                {/* Right Column Slot: Contact Details Panel (Spans 5 columns on desktop) */}
                <motion.div
                    initial={{ x: 70, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full flex flex-col gap-10 pl-0 lg:pl-4"
                >
                    <GetInTouch />
                </motion.div>
            </Container>
        </section>
    );
}
