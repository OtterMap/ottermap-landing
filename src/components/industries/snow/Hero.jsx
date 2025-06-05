import React from 'react';
import HeroImage from '../../../assets/industries/snow/hero/heroImage.svg';
import HeroSection from '../common/hero/HeroSection';
const Hero = () => {
    return (
        <HeroSection
            heroImage={HeroImage}
            title="Accelerate Snow Bidding with Precise Mapping—No Site Visits Required"
            subtitle="Ottermap automates snow removal takeoffs with layered, high-resolution maps—so you can quote more properties, win more contracts, and stay ahead of winter."
            buttonText1="Get started"
            buttonText2="Book a demo"
        />
    );
};

export default Hero;
