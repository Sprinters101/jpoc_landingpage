import { Toaster } from "sonner";

import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import InforScroll from "./components/InforScroll";
import Navbar from "./components/Navbar";
import OurStory from "./components/OurStory";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
    return (
        <div>
            <Toaster theme="dark" position="top-right" closeButton richColors />
            <Navbar />
            <Hero />
            <InforScroll />
            <WhyChooseUs />
            <OurStory />
            <Pricing />
            <Gallery />
            <Testimonials />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;
