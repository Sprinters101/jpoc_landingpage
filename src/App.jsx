import AnimateLines from "./components/AnimateLines";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import InforScroll from "./components/InforScroll";
import Navbar from "./components/Navbar";
import OurStory from "./components/OurStory";
import Pricing from "./components/Pricing";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <InforScroll />
            <WhyChooseUs />
            <OurStory />
            <Pricing />
            <Gallery />

            <Footer />
        </div>
    );
}

export default App;
