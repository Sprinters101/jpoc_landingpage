import { useRef, useState } from "react";
import Container from "./Container";
import { Play } from "iconsax-reactjs";
import AnimateLines from "./AnimateLines";

const Gallery = () => {
    return (
        <section id="gallery" className="w-full  py-20 md:py-30">
            <Container>
                {/* Section Top Header Block */}
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-10 h-[1px] bg-orange_normal opacity-50" />
                    <span className="font-jetbrian text-jb-sm font-extrabold uppercase tracking-widest text-orange_normal">
                        Our Gallery
                    </span>
                    <div className="w-10 h-[1px] bg-orange_normal opacity-50" />
                </div>

                <h2 className="font-montserrat text-h3 md:text-display font-extrabold text-center text-white mb-16 uppercase tracking-tight">
                    Visual Proof Of Perfection
                </h2>

                {/* Asymmetrical Masonry Grid Layout Stack */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap- bg-red-700 mb-4">
                    {/* Tile 1: Before Image */}
                    <div className="relative   bg-grey_dark_active overflow-hidden">
                        <img
                            src="/images/work/w_1.svg"
                            alt="Car detailing transformation condition - Before"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Tile 2: After Image */}
                    <div className="relative  bg-grey_dark_active overflow-hidden">
                        <img
                            src="/images/work/w_2.svg"
                            alt="Car detailing transformation condition - After"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Tile 3: Stacked Double Landscape Images Column */}
                    <div className="grid grid-cols-1 h-full col-span-2 lg:col-span-1">
                        <div className="relative w-full  h-full min-h-[220px] max-h-[21.375rem] bg-grey_dark_active overflow-hidden">
                            <img
                                src="/images/work/w_3.svg"
                                alt="Detailed rear wing profile view"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative w-full h-full min-h-[220px] max-h-[21.375rem]  bg-grey_dark_active overflow-hidden">
                            <img
                                src="/images/work/w_3.svg"
                                alt="Detailed interior door panel finish view"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* --- Bottom Feature Block: Media / Video Teaser Panel --- */}
                <GalleryVideoSection />
            </Container>
            <AnimateLines />
        </section>
    );
};

export default Gallery;

const GalleryVideoSection = () => {
    // Tracking active reveal state for each panel
    const [isPlaying, setIsPlaying] = useState({
        video1: false,
        video2: false,
    });

    // DOM references to target native HTML5 play controls
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);

    const handlePlayVideo = (key, ref) => {
        setIsPlaying((prev) => ({ ...prev, [key]: true }));
        if (ref.current) {
            ref.current.play().catch((err) => {
                console.log(
                    "Playback interaction error auto-trigger caught: ",
                    err,
                );
            });
        }
    };

    return (
        <div className="w-full mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* --- Video Frame 1 (Left Side) --- */}
                <div className="relative min-h-[260px]  md:min-h-[605px] w-full bg-grey_dark_active overflow-hidden group border border-grey_dark/40">
                    {/* Underlying Live Video Layer */}
                    <video
                        ref={videoRef1}
                        src="/videos/work.MOV"
                        className="w-full h-full object-cover absolute inset-0"
                        controls
                    />

                    {/* Smooth Reveal Overlay Curtain Panel */}
                    <div
                        onClick={() => handlePlayVideo("video1", videoRef1)}
                        className={`absolute inset-0 z-20 cursor-pointer transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
                            isPlaying.video1
                                ? "opacity-0 scale-105 pointer-events-none invisible"
                                : "opacity-100 scale-100 visible"
                        }`}
                    >
                        {/* Blurred Video Thumbnail Preview matching image_be8f1b.png layout */}
                        <img
                            src="/images/work/overlay.svg"
                            alt="Before/After Video Preview Panel Left"
                            className="w-full h-full object-cover blur-[1px]"
                        />
                        {/* Dimming Tint Overlay Layer */}
                        <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />

                        {/* Center Play Icon Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="size-16 md:size-20 bg-orange_normal rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                                    <Play size="32" variant="Bold" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Video Frame 2 (Right Side) --- */}
                <div className="relative min-h-[260px] md:min-h-[605px] w-full bg-grey_dark_active overflow-hidden group border border-grey_dark/40">
                    {/* Underlying Live Video Layer */}
                    <video
                        ref={videoRef2}
                        src="/videos/work_2.MOV"
                        className="w-full h-full object-cover absolute inset-0"
                        controls
                    />

                    {/* Smooth Reveal Overlay Curtain Panel */}
                    <button
                        onClick={() => handlePlayVideo("video2", videoRef2)}
                        className={`absolute top-0 bottom-0 left-0 right-0 w-full ${
                            isPlaying.video2 ? "hidden" : "block"
                        }`}
                    >
                        {/* Blurred Video Thumbnail Preview matching image_be8f1b.png layout */}
                        <img
                            src="/images/work/overlay.svg"
                            alt="Before/After Video Preview Panel Right"
                            className="w-full h-full object-cover blur-[1px]"
                        />
                        {/* Dimming Tint Overlay Layer */}
                        {/* <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" /> */}

                        {/* Center Play Icon Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="size-16 md:size-20 bg-orange_normal rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                                <Play size="32" variant="Bold" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
