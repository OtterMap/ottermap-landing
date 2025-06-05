import React from 'react'
import HeroSection from '../common/hero/HeroSection'
import HeroImage from '../../../assets/industries/landscaping/hero/heroImage.svg';
const Hero = () => {
    return (
        <div>
            <HeroSection
                heroImage={HeroImage}
                title="Landscaping contracts made easy Precision mapping, No manual takeoffs"
                subtitle="OtterMaps makes estimating effortless with automated, accurate takeoffs that boost your bid speed, proposal quality, and win rate."
                buttonText1="Get started"
                buttonText2="Book a demo"
            />
        </div>
    )
}

export default Hero
