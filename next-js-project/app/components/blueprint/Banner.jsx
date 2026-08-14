'use client'
import Image from 'next/image';
import RightArrow from '../../icons/rightArrow.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const Banner = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-20 py-16">
      <div className="bg-[#175f33] text-white rounded-3xl max-w-6xl mx-auto px-6 sm:px-10 py-14 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Stop scaling plans by hand
        </h2>
        <p className="text-sm sm:text-base text-[#CFE6D8] mb-8 max-w-xl mx-auto">
          Upload your first blueprint and get a takeoff back in minutes — free, no credit card required.
        </p>
        <div className="flex flex-row gap-4 justify-center flex-wrap">
          <button
            onClick={() => {
              customTrack("Blueprint Banner Button Clicked", { buttonName: "Try for Free" });
              window.open("https://app.ottermap.com/signup");
            }}
            className="bg-white cursor-pointer text-sm rounded-full text-[#175f33] px-7 py-3 flex justify-center items-center gap-1 font-semibold hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out"
          >
            Try for Free
            <Image src={RightArrow} alt="right arrow" className="brightness-0" />
          </button>
          <button
            onClick={() => {
              customTrack("Blueprint Banner Button Clicked", { buttonName: "Book a demo" });
              window.open("https://calendly.com/amit-ottermap/30min");
            }}
            className="border-white/40 border-2 cursor-pointer text-sm rounded-full text-white px-7 py-3 flex justify-center items-center gap-1 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out"
          >
            Book a demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
