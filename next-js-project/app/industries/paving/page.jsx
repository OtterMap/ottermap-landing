'use client'
import Footer from '@/app/components/common/Footer'
import Navbar from '@/app/components/common/Navbar'
import Advantages from '@/app/components/industries/paving/Advantages'
import Banner from '@/app/components/industries/paving/Banner'
import FAQs from '@/app/components/industries/paving/FAQs'
import Hero from '@/app/components/industries/paving/Hero'
import Problems from '@/app/components/industries/paving/Problems'
import Solutions from '@/app/components/industries/paving/Solutions'
import Testimonial from '@/app/components/landing/Testimonial'
import React, { useEffect } from 'react'

const page = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <Problems />
            <Advantages />
            <Solutions />
            <Testimonial />
            <Banner />
            <FAQs />
            <Footer />
        </div>
    )
}

export default page
