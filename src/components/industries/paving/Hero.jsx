import HeroSection from '../common/hero/HeroSection'
import HeroImage from '../../../assets/industries/paving/hero/heroImage.svg';

const Hero = () => {
  return (
    <HeroSection
      heroImage={HeroImage}
      title="Smarter Paving Bids Start with Accurate, Remote Takeoffs"
      subtitle="OtterMaps uses aerial mapping to deliver fast, accurate paving estimates for lots, driveways, sidewalks, and asphalt zones."
      buttonText1="Get started"
      buttonText2="Book a demo"
    />
  )
}

export default Hero
