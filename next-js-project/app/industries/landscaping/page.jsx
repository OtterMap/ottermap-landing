'use client'
import Footer from "@/app/components/common/Footer";
import Navbar from "@/app/components/common/Navbar";
import Banner from "@/app/components/industries/landscaping/Banner";
import Blogs from "@/app/components/industries/landscaping/Blogs";
import Challenges from "@/app/components/industries/landscaping/Challenges";
import FAQs from "@/app/components/industries/landscaping/FAQs";
import Features from "@/app/components/industries/landscaping/Features";
import Hero from "@/app/components/industries/landscaping/Hero";
import Solutions from "@/app/components/industries/landscaping/Solutions";
import Testimonial from "@/app/components/landing/Testimonial";
import { useEffect } from "react"

const page = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <Challenges />
            <Features />
            <Solutions />
            <Testimonial />
            {/* <Blogs /> */}
            <Banner />
            <FAQs />
            <Footer />
        </div>
    )
}

export default page
