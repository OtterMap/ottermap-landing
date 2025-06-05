import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Hero from '../../components/aboutus/Hero'
import Promise from '../../components/aboutus/Promise'
import Commitment from '../../components/aboutus/Commitment'
import Why from '../../components/aboutus/Why'
import Testimonial from '../../components/landing/Testimonial'
import Banner from '../../components/aboutus/Banner'
import FAQs from '../../components/landing/FAQs'
import { useEffect } from 'react'

const AboutUs = () => {
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
            <Banner />
            <FAQs />
            <Footer />
        </div>
    )
}

export default AboutUs
