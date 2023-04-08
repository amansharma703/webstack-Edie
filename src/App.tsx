import { useState } from "react";
import { Footer, Navbar, Header, Services, Work, Team, Testimonials } from "./components";

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Services />
            <Work />
            <Team />
            <Testimonials />
            <Footer />
        </>
    );
}

export default App;
