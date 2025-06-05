import React, { useEffect } from 'react'
import Hero from '../../components/whywe/Hero'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Advantages from '../../components/whywe/Advantages'
import Proof from '../../components/whywe/Proof'
import Reality from '../../components/whywe/Reality'
import Commercial from '../../components/whywe/Commercial'
import GuessWork from '../../components/whywe/GuessWork'
import Testimonial from '../../components/landing/Testimonial'
import Banner from '../../components/whywe/Banner'
import FAQs from '../../components/landing/FAQs'

const WhyWe = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <Advantages />
            <Proof />
            <Reality />
            <Commercial />
            <GuessWork />
            <Testimonial />
            <Banner />
            <FAQs />
            <Footer />

        </div>
    )
}

export default WhyWe
