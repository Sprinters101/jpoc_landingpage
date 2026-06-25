// src/components/Testimonials.jsx
import Container from "./Container";

const Testimonials = () => {
    const reviews = [
        {
            quote: "The attention to detail is unmatched. They found pet hair in crevices I didn't even know existed and removed every trace. The ceramic coating they applied is magic.",
            author: "Sarah J., Tesla Model Y",
        },
        {
            quote: "Absolutely incredible service. They came to my office and when I left at 5 PM, my car looked better than the day I bought it from the dealership. Highly recommend!",
            author: "Michael R., Porsche Owner",
        },
    ];

    return (
        <section
            id="testimonials"
            className="w-full bg-grey_dark_active py-10 md:py-20"
        >
            <Container className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
                {/* Left Layout Stack: Heading & Client Review List (Spans 7 columns) */}
                <div className="lg:col-span-7 flex flex-col gap-10 w-full">
                    {/* Eyebrow Header Subtitle Block */}
                    <div className="flex items-center gap-4 self-start">
                        <div className="w-8 h-[1px] bg-orange_normal opacity-50" />
                        <span className="font-jetbrian text-jb-sm font-extrabold uppercase tracking-widest text-orange_normal">
                            Testimonials
                        </span>
                        <div className="w-8 h-[1px] bg-orange_normal opacity-50" />
                    </div>

                    {/* Main Title */}
                    <h2 className="font-montserrat  text-[20px] md:text-h3 font-extrabold text-white tracking-tight uppercase -mt-4">
                        What Our Clients Say
                    </h2>

                    {/* Review List Stack */}
                    <div className="flex flex-col gap-12 max-w-[444px] ">
                        {reviews?.map((review, index) => (
                            <div
                                key={index}
                                className="border-l-2 border-orange_normal pl-6 flex flex-col gap-3 md:gap-4"
                            >
                                <p className="font-manrope text-[12px] md:text-[20px] italic text-text leading-relaxed">
                                    "{review.quote}"
                                </p>
                                <span className="font-montserrat text-[13px] font-bold text-orange_normal uppercase tracking-widest">
                                    — {review.author}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Layout Stack: Grayscale Image & Badge Overlay (Spans 5 columns) */}
                <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <div className="relative w-full max-w-[608px] h-[528px] lg:max-w-none ">
                        {/* Background Grayscale Action Photo */}
                        <img
                            src="/images/testimony.svg"
                            alt="Professional vehicle polishing detailing close up"
                            className="w-full h-full object-cover rounded-xl border border-grey_dark"
                        />

                        {/* Absolute Positioned Orange Brand Callout Block */}
                        <div className="absolute -bottom-6 right-0 md:-bottom-8 md:-left-12 bg-orange_normal p-6 md:p-8 max-w-[200px] md:max-w-[194px] shadow-2xl">
                            <p className="font-jetbrian text-[13px] md:text-jb-sm text-orange_darker font-medium tracking-widest leading-relaxed ">
                                Hear what our customers are raving about!
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
export default Testimonials;
