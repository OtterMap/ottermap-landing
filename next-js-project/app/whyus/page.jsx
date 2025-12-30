'use client'
import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/whyus/Hero";
import Advantages from "../components/whyus/Advantages";
import Proof from "../components/whyus/Proof";
import Commitment from "../components/whyus/Reality";
import Commercial from "../components/whyus/Commercial";
import GuessWork from "../components/whyus/GuessWork";
import Testimonial from "../components/landing/Testimonial";
import Banner from "../components/whyus/Banner";
import FAQs from "../components/landing/FAQs";
import ScrollAnimation from "../utils/animations/ScrollAnimation";
import ScrollUpArrow from '.././icons/scrollUpArrow.svg';
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
                <Advantages />
            </ScrollAnimation>

            <ScrollAnimation>
                <Proof />
            </ScrollAnimation>

            <ScrollAnimation>
                <Commitment />
            </ScrollAnimation>

            <ScrollAnimation>
                <Commercial />
            </ScrollAnimation>

            <ScrollAnimation>
                <GuessWork />
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
