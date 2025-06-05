import Footer from "../../components/common/Footer"
import Advantages from "../../components/industries/paving/Advantages"
import Banner from "../../components/industries/paving/Banner"
import Hero from "../../components/industries/paving/Hero"
import Problems from "../../components/industries/paving/Problems"
import Solutions from "../../components/industries/paving/Solutions"
import FAQs from "../../components/industries/paving/FAQs"
import Testimonial from "../../components/landing/Testimonial"
import Navbar from "../../components//common/Navbar"
import { useEffect } from "react"

const Paving = () => {
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

export default Paving
