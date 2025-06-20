'use client'
import Navbar from "./components/common/Navbar";
import { useEffect } from "react";
import Hero from "./components/landing/Hero";
import ProblemAndSolution from "./components/landing/ProblemAndSolution";
import WalkThrough from "./components/landing/WalkThrough";
import Features from "./components/landing/Features";
import Values from "./components/landing/Values";
import Testimonial from "./components/landing/Testimonial";
import UseCases from "./components/landing/UseCases";
import Banner from "./components/landing/Banner";
import FAQs from "./components/landing/FAQs";
import Footer from "./components/common/Footer";

export default function Home() {
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
      <Banner />
      <FAQs />
      <Footer />
    </div>
  );
}