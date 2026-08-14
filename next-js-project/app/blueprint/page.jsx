'use client'
import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/blueprint/Hero";
import Logos from "../components/blueprint/Logos";
import Problems from "../components/blueprint/Problems";
import HowItWorks from "../components/blueprint/HowItWorks";
import Features from "../components/blueprint/Features";
import Trades from "../components/blueprint/Trades";
import Values from "../components/blueprint/Values";
import Testimonial from "../components/landing/Testimonial";
import Banner from "../components/blueprint/Banner";
import FAQs from "../components/blueprint/FAQs";
import ScrollAnimation from "../utils/animations/ScrollAnimation";
import ScrollUpArrow from "../icons/scrollUpArrow.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  const [position, setPosition] = useState("top");

  useEffect(() => {
    setPosition("top");
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setPosition("bottom");
      } else {
        setPosition("top");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <Logos />
      </ScrollAnimation>
      <ScrollAnimation>
        <Problems />
      </ScrollAnimation>
      <ScrollAnimation>
        <HowItWorks />
      </ScrollAnimation>
      <ScrollAnimation>
        <Features />
      </ScrollAnimation>
      <ScrollAnimation>
        <Trades />
      </ScrollAnimation>
      <ScrollAnimation>
        <Values />
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
  );
};

export default page;
