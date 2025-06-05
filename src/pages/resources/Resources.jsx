import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Hero from '../../components/resources/Hero'
import How from '../../components/resources/How'
import Learn from '../../components/resources/Learn'
import Blogs from '../../components/resources/Blogs'
import Playbook from '../../components/resources/Playbook'
import Banner from '../../components/resources/Banner'
import ContactSupport from '../../components/resources/ContactSupport'
import FAQs from '../../components/resources/FAQs'
import { useEffect } from 'react'

const Resources = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <Navbar />
            <Hero />
            {/* <How /> */}
            {/* <Learn /> */}
            {/* <Blogs /> */}
            {/* <Playbook /> */}
            <Banner />
            <ContactSupport />
            <FAQs />
            <Footer />
        </div>
    )
}

export default Resources
