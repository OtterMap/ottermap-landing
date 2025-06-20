'use client'
import { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/about/Hero";
import Promise from "../components/about/Promise";
import Commitment from "../components/about/Commitment";
import Why from "../components/about/Why";
import Testimonial from "../components/landing/Testimonial";
import BannerSection from "../components/about/Banner";
import FAQs from "../components/landing/FAQs";

const page = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <Promise />
            <Commitment />
            <Why />
            <Testimonial />
            <BannerSection />
            <FAQs />
            <Footer />
        </div>
    )
}

export default page
