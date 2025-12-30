'use client'
import Footer from '@/app/components/common/Footer'
import Navbar from '@/app/components/common/Navbar'
import Advantages from '@/app/components/industries/snow/Advantages'
import Banner from '@/app/components/industries/snow/Banner'
import Challenges from '@/app/components/industries/snow/Challenges'
import FAQs from '@/app/components/industries/snow/FAQs'
import Features from '@/app/components/industries/snow/Features'
import Hero from '@/app/components/industries/snow/Hero'
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
                className={`fixed ${position === "top" ? "top-0 right-1/2 transform -translate-x-1/2" : "bottom-6 right-1/2"} bg-white border p-2 rounded-full shadow-lg cursor-pointer z-50`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <Image src={ScrollUpArrow} alt="scroll to top" className="w-6" />
            </motion.div>

            <Navbar />
            <ScrollAnimation>
                <Hero />
            </ScrollAnimation>
            <ScrollAnimation>
                <Challenges />
            </ScrollAnimation>
            <ScrollAnimation>
                <Advantages />
            </ScrollAnimation>
            <ScrollAnimation>
                <Features />
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
