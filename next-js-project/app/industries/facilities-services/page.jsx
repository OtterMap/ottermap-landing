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
import ScrollAnimation from '@/app/utils/animations/ScrollAnimation'
import { useEffect, useState } from 'react'
import ScrollUpArrow from '../../icons/scrollUpArrow.svg';
import Image from "next/image";
import { motion } from 'framer-motion'

const page = () => {
    const [position, setPosition] = useState("top")

    useEffect(() => {
        setPosition("top")
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setPosition("bottom")
            } else {
                setPosition("top")
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div>
            <motion.div
                className={`fixed ${position === "top" ? "top-0 right-1/2 transform -translate-x-1/2" : "bottom-6 right-6"} bg-white border p-4 rounded-full shadow-lg cursor-pointer z-50`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <Image src={ScrollUpArrow} alt="scroll to top" />
            </motion.div>

            <Navbar />
            <ScrollAnimation>
                <Hero />
            </ScrollAnimation>
            <ScrollAnimation>
                <Challenges />
            </ScrollAnimation>
            <ScrollAnimation>
                <Workflow />
            </ScrollAnimation>
            <ScrollAnimation>
                <Solutions />
            </ScrollAnimation>
            <ScrollAnimation>
                <Testimonial />
            </ScrollAnimation>
            <ScrollAnimation>
                <Banner />
            </ScrollAnimation>
            <ScrollAnimation>
                <FAQs />
            </ScrollAnimation>
            <ScrollAnimation>
                <Footer />
            </ScrollAnimation>
        </div>
    )
}

export default page
