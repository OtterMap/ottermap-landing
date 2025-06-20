'use client'
import Footer from '@/app/components/common/Footer'
import Navbar from '@/app/components/common/Navbar'
import Advantages from '@/app/components/industries/snow/Advantages'
import Banner from '@/app/components/industries/snow/Banner'
import Challenges from '@/app/components/industries/snow/Challenges'
import FAQs from '@/app/components/industries/snow/FAQs'
import Features from '@/app/components/industries/snow/Features'
import Hero from '@/app/components/industries/snow/Hero'
import Testimonial from '@/app/components/landing/Testimonial'
import { useEffect } from 'react'

const page = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <Challenges />
            <Advantages />
            <Features />
            <Testimonial />
            <Banner/>
            <FAQs/>
            <Footer />
        </div>
    )
}

export default page
