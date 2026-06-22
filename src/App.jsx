function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                jpoc image optimization check{" "}
            </h1>
            <h2 className="text-2xl font-bold underline">Image one </h2>
            <img src="/images/hero.svg" alt="hero-image" />

            <h2 className="text-2xl font-bold underline">Image two </h2>
            <img
                src="https://res.cloudinary.com/dsrxjzmcl/image/upload/v1782149133/hero_qinia7.png"
                alt="hero-image"
            />

            {/* <h2>Image three </h2>
            <img src="/images/hero.svg" alt="hero-image" /> */}
        </>
    );
}

export default App;
