import React, { useEffect, useRef, useState } from 'react';
import HeroImage1 from '../../assets/landing/heroImages/heroImage1.svg';
import HeroImage2 from '../../assets/landing/heroImages/heroImage2.svg';
import HeroImage3 from '../../assets/landing/heroImages/heroImage3.svg';
import RightArrow from '../../assets/rightArrow.svg';
import CircularIcon1 from '../../assets/landing/heroImages/circularIcon1.svg';
import CircularIcon2 from '../../assets/landing/heroImages/circularIcon2.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const Hero = () => {
  const heroImages = [HeroImage1, HeroImage2, HeroImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2500);
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-start w-full pt-10 lg:pt-20 px-5 lg:px-10 gap-10 bg-white">

      <div className="flex flex-col w-full lg:w-1/2 gap-6">
        <div className="text-xl sm:text-4xl lg:text-4xl font-bold px-2 lg:pr-28 lg:pl-10">
          Accurate takeoffs & Property maps for Landscaping, Snow removal & Paving teams- Faster bids, Smarter jobs
        </div>

        <div className="max-sm:text-xs sm:text-xl max-lg:text-2xl font-medium px-2 lg:pl-10 lg:pr-28 text-[#333333]">
          Generate accurate site maps and area takeoffs in minutes No manual work, Just faster bids and better margins.
        </div>

        <div className="pt-2 px-2 lg:px-10 flex flex-row gap-4">
          <button
            onClick={() => {
              customTrack("Landing Hero Button Clicked", { buttonName: "Try for Free" })
              window.open("https://app.ottermap.com/signup")
            }}
            className="bg-[#218448] cursor-pointer text-sm rounded-full text-white px-7 sm:py-3 py-2 flex justify-center items-center gap-1">
            Try for Free
            <img src={RightArrow} alt="right arrow" />
          </button>
          <button
            onClick={() => {
              customTrack("Landing Hero Button Clicked", { buttonName: "Book a demo" })
              window.open("https://calendly.com/amit-ottermap/30min")
            }}
            className="border-[#218448] border-2 cursor-pointer text-sm rounded-full text-black px-7 sm:py-3 py-2 flex justify-center items-center gap-1">
            Book a demo
          </button>
        </div>

        <div className="max-sm:text-xs text-sm sm:text-base text-[#959AB1] font-normal flex flex-col gap-2 px-2 lg:px-10 mt-2">
          <div className="flex flex-col sm:flex-row gap-4 pt-1">
            <div className="flex gap-3 font-medium items-center">
              <img src={CircularIcon2} alt="" />
              Get your first property for free!
            </div>
            <div className="flex gap-3 font-medium items-center">
              <img src={CircularIcon1} alt="" />
              No credit card required
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-[45.5%]  px-2 sm:px-5 lg:px-0">
        <img
          src={heroImages[currentImageIndex]}
          alt="hero image"
          onMouseEnter={stopSlider}
          onMouseLeave={startSlider}
          className="w-full h-auto transition-all duration-500"
          loading='lazy'
        />
      </div>
    </div>

  );
};

export default Hero;
