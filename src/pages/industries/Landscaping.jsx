import Hero from '../../components/industries/landscaping/Hero'
import Navbar from '../../components/common/Navbar'
import Challenges from '../../components/industries/landscaping/Challenges'
import Solutions from '../../components/industries/landscaping/Solutions'
import Features from '../../components/industries/landscaping/Features'
import Testimonial from '../../components/landing/Testimonial'
import Blogs from '../../components/industries/landscaping/Blogs'
import Banner from '../../components/industries/landscaping/Banner'
import FAQs from '../../components/industries/landscaping/FAQs'
import Footer from '../../components/common/Footer'
import { useEffect } from 'react'

const Landscaping = () => {
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
            {/* <Blogs/> */}
            <Banner />
            <FAQs />
            <Footer />
        </div>
    )
}

export default Landscaping
