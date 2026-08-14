'use client'
import Image from 'next/image';
import RightArrow from '../../icons/rightArrow.svg';
import CircularIcon1 from '../../icons/landing/heroImages/circularIcon1.svg';
import CircularIcon2 from '../../icons/landing/heroImages/circularIcon2.svg';
import HeroImage1 from '../../icons/blueprint/hero-1.jpg';
import HeroImage2 from '../../icons/blueprint/hero-2.jpg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full pt-10 lg:pt-16 px-5 lg:px-10 bg-white">
      <span className="inline-block bg-[#EAF3EC] text-[#175f33] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
        NEW · BLUEPRINT TAKEOFFS
      </span>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-tight px-2">
        Turn any set of plans into a bid-ready takeoff in minutes
      </h1>

      <p className="text-sm sm:text-lg lg:text-xl font-medium text-[#333333] text-center max-w-2xl mt-6 px-2">
        Upload PDF blueprints, architectural drawings, or spec sheets and let Ottermap auto-detect scope, calibrate scale, and generate accurate quantities — for any trade, on any job.
      </p>

      <div className="flex flex-row gap-4 mt-8">
        <button
          onClick={() => {
            customTrack("Blueprint Hero Button Clicked", { buttonName: "Try for Free" });
            window.open("https://app.ottermap.com/signup");
          }}
          className="bg-[#218448] cursor-pointer text-sm rounded-full text-white px-7 sm:py-3 py-2 flex justify-center items-center gap-1 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out"
        >
          Try for Free
          <Image src={RightArrow} alt="right arrow" />
        </button>
        <button
          onClick={() => {
            customTrack("Blueprint Hero Button Clicked", { buttonName: "Book a demo" });
            window.open("https://calendly.com/amit-ottermap/30min");
          }}
          className="border-[#218448] border-2 cursor-pointer text-sm rounded-full text-black px-7 sm:py-3 py-2 flex justify-center items-center gap-1 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out"
        >
          Book a demo
        </button>
      </div>

      <div className="text-xs sm:text-sm text-[#959AB1] font-medium flex flex-col sm:flex-row gap-4 mt-6">
        <div className="flex gap-3 items-center">
          <Image src={CircularIcon2} alt="" />
          Get your first blueprint takeoff free
        </div>
        <div className="flex gap-3 items-center">
          <Image src={CircularIcon1} alt="" />
          No credit card required
        </div>
      </div>

      <div className="w-full max-w-6xl mt-12 mb-4 bg-[#EAF3EC] border border-[#DCE5DF] rounded-2xl p-4 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-4">
          <div className="rounded-xl overflow-hidden border border-[#DCE5DF] bg-white">
            <Image
              src={HeroImage1}
              alt="Ottermap blueprint takeoff workspace"
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-[#DCE5DF] bg-white">
            <Image
              src={HeroImage2}
              alt="Blueprint takeoff with measured quantities"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
