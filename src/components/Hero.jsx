import Button from "./Button";
import Container from "./Container";
import DashedHeader from "./DashedHeader";

const Hero = () => {
    return (
        <div className="relative min-h-[36.3125rem]">
            <div className="h-full max-h-137.75 md:max-h-216 overflow-hidden">
                <img
                    src="/images/hero.svg"
                    alt="hero background"
                    className="w-full h-full object-cover hidden md:block "
                />
                <img
                    src="/images/hero_mobile.svg"
                    alt="hero background"
                    className="w-full h-full object-cover block md:hidden "
                />
            </div>
            <div
                className="absolute  md:max-h-216  py-7.5 md:py-15 top-0 z-2 bottom-0 w-full flex items-end justify-start gap-5"
                style={{
                    background:
                        "linear-gradient(0.84deg, rgba(12, 15, 15, 0.95) 36.47%, rgba(102, 102, 102, 0) 72.3%)",
                }}
            >
                <Container className={"w-full"}>
                    <div className="max-w-7xl mx-auto w-full flex md:flex-row flex-col justify-between">
                        <div className="w-full max-w-198.25">
                            <DashedHeader left={false}>
                                ENGINEERED TO PERFECTION
                            </DashedHeader>

                            <h1 className=" mt-2 md:mt-4 text-[1.375rem] md:text-display leading-[110%]  font-montserrat font-extrabold uppercase tracking-normal">
                                Professional
                                <br />
                                <span className="text-orange_normal">
                                    {" "}
                                    Mobile Car Detailing
                                </span>
                                <br />
                                Delivered To Your Doorstep
                            </h1>
                        </div>

                        <div className="w-full  max-w-114.25  ">
                            <p className="text-m-xs md:text-m-lg md:max-w-114.25 max-w-[20rem] font-manrope">
                                Premium mobile detailing services that restore,
                                protect, and maintain your vehicle without you
                                leaving home.
                            </p>
                            <div className="mt-5 md:mt-8 flex md:flex-col lg:flex-row items-center gap-6 w-full">
                                <a href="tel:+1(949)5285005" className="w-full">
                                    <Button
                                        variant="primary"
                                        className={
                                            "py-2.75 md:py-4.25 text-jb-xs md:text-[1.125rem] w-full max-w-37 md:max-w-53.5 "
                                        }
                                    >
                                        Call Now
                                    </Button>
                                </a>
                                <a href="#contact" className="w-full">
                                    <Button
                                        variant="outline"
                                        className={
                                            "py-2.75  md:py-4.25 text-jb-xs md:text-[1.125rem] w-full max-w-37 md:max-w-51.75 px-0"
                                        }
                                    >
                                        Get Free Quote
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Hero;
