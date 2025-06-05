import React, { useEffect } from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Hero from '../../components/industries/facilitiesServices/Hero'
import Challenges from '../../components/industries/facilitiesServices/Challenges'
import Workflow from '../../components/industries/facilitiesServices/Workflow'
import Solutions from '../../components/industries/facilitiesServices/Solutions'
import Testimonial from '../../components/landing/Testimonial'
import Banner from '../../components/industries/facilitiesServices/Banner'
import FAQs from '../../components/industries/facilitiesServices/FAQs'

const FacilitiesServices = () => {
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

export default FacilitiesServices
