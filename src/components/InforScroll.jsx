const InforScroll = () => {
    const data = [
        "MOBILE DETAILING",
        "",
        "PREMIUM SERVICES",
        "",
        "INTERIOR & EXTERIOR SERVICES",
        "", // Added an extra spacer gap indicator at the end to keep loops uniform
    ];

    return (
        // overflow-hidden prevents page horizontal scrolling
        <div className="w-full border-y border-grey_dark py-5 overflow-hidden bg-bg">
            {/* Container tracking the animation */}
            <div className="flex w-max animate-marquee gap-8 pr-8">
                {/* Render Track 1 */}
                <div className="flex items-center gap-8 shrink-0">
                    {data.map((item, index) => (
                        <div
                            key={`track1-${index}`}
                            className="flex items-center shrink-0"
                        >
                            {item !== "" ? (
                                <p className="text-b2 md:text-h3 font-medium font-jetbrian uppercase text-white tracking-wider">
                                    {item}
                                </p>
                            ) : (
                                <div className="size-4 md:size-[21px] bg-orange_normal rotate-[45deg] shrink-0 mx-4" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Render Track 2 (Identical mirror twin copy to fill empty gaps seamlessly) */}
                <div
                    className="flex items-center gap-8 shrink-0"
                    aria-hidden="true"
                >
                    {data.map((item, index) => (
                        <div
                            key={`track2-${index}`}
                            className="flex items-center shrink-0"
                        >
                            {item !== "" ? (
                                <p className="text-b2 md:text-h3 font-medium font-jetbrian uppercase text-white tracking-wider">
                                    {item}
                                </p>
                            ) : (
                                <div className="size-4 md:size-[21px] bg-orange_normal rotate-[45deg] shrink-0 mx-4" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InforScroll;
