'use client'
import { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/whyus/Hero";
import Advantages from "../components/whyus/Advantages";
import Proof from "../components/whyus/Proof";
import Commitment from "../components/whyus/Reality";
import Commercial from "../components/whyus/Commercial";
import GuessWork from "../components/whyus/GuessWork";
import Testimonial from "../components/landing/Testimonial";
import Banner from "../components/whyus/Banner";
import FAQs from "../components/landing/FAQs";

const page = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <Advantages />
            <Proof />
            <Commitment />
            <Commercial />
            <GuessWork />
            <Testimonial />
            <Banner />
            <FAQs />
            <Footer />
        </div>
    )
}

export default page
