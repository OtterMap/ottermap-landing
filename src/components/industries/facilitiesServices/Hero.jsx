import HeroSection from '../common/hero/HeroSection'
import HeroImage from '../../../assets/industries/facilitiesServices/hero/heroImage.svg';

const Hero = () => {
  return (
    <HeroSection
      heroImage={HeroImage}
      title="Simplify facility mapping and maintenance bids from 1 to 10,000 sites"
      subtitle="OtterMaps equips facility service providers with tools to estimate, manage, and collaborate across multi-property portfolios—without site visits or manual measurements."
      buttonText1="Get started"
      buttonText2="Book a demo"
    />
  )
}

export default Hero
