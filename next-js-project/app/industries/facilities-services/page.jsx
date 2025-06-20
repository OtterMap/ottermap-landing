'use client'
import Footer from '@/app/components/common/Footer'
import Navbar from '@/app/components/common/Navbar'
import Banner from '@/app/components/industries/facilities-services/Banner'
import Challenges from '@/app/components/industries/facilities-services/Challenges'
import FAQs from '@/app/components/industries/facilities-services/FAQs'
import Hero from '@/app/components/industries/facilities-services/Hero'
import Solutions from '@/app/components/industries/facilities-services/Solutions'
import Workflow from '@/app/components/industries/facilities-services/Workflow'
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
            <Workflow />
            <Solutions />
            <Testimonial />
            <Banner />
            <FAQs />
            <Footer />
        </div>
    )
}

export default page
