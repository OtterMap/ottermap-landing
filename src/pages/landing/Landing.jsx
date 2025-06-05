import React, { useEffect } from 'react'
import Navbar from '../../components/common/Navbar'
import Hero from '../../components/landing/Hero'
import Features from '../../components/landing/Features'
import Values from '../../components/landing/Values'
import Testimonial from '../../components/landing/Testimonial'
import UseCases from '../../components/landing/UseCases'
import WalkThrough from '../../components/landing/WalkThrough'
import Banner from '../../components/landing/Banner'
import FAQs from '../../components/landing/FAQs'
import Footer from '../../components/common/Footer'
import ProblemAndSolution from '../../components/landing/ProblemAndSolution'
import BookMeeting from '../../components/landing/BookMeeting'

const Landing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <ProblemAndSolution />
            <WalkThrough />
            <Features />
            <Values />
            <Testimonial />
            <UseCases />
            {/* <BookMeeting /> */}
            <Banner />
            <FAQs />
            <Footer />
        </div>
    )
}

export default Landing
