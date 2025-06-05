import Navbar from '../../components/common/Navbar'
import Hero from '../../components/industries/snow/Hero'
import Challenges from '../../components/industries/snow/Challenges'
import Advantages from '../../components/industries/snow/Advantages'
import Features from '../../components/industries/snow/Features'
import Testimonial from '../../components/landing/Testimonial'
import Banner from '../../components/industries/snow/Banner'
import Footer from '../../components/common/Footer'
import FAQs from '../../components/industries/snow/FAQs'
import { useEffect } from 'react'

const Snow = () => {
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
            <Banner />
            <FAQs />
            <Footer />
        </div>
    )
}

export default Snow
