import React from 'react';
import RightArrow from '../../../../assets/rightArrow.svg';
import { customTrack } from '../../../../utils/mixpanel/customTrack';
const BannerSection = ({ bottomBanner, title, subtitle, subtitle1 }) => {
    return (
        <div className='px-20 max-sm:px-4'>

            <div
                className="relative  h-[400px] sm:h-[500px] lg:h-[550px] bg-cover bg-center mt-28 mb-4 rounded-xl"
                style={{ backgroundImage: `url(${bottomBanner})` }}
            >
                <div className="absolute bottom-8 sm:bottom-12 lg:bottom-14 left-4 sm:left-10 lg:left-20 bg-[#FAFAFAE5] rounded-3xl text-[#218448] px-5 sm:px-7 lg:pl-7 lg:pr-16 py-6 flex flex-col gap-4 w-[90%] sm:w-[80%] md:w-fit">
                    <div className="text-3xl sm:text-xl lg:text-2xl max-sm:text-xl font-bold leading-snug">
                        {title}
                    </div>
                    <div className="text-2xl sm:text-lg lg:text-xl max-sm:text-xs font-normal leading-snug">
                        {subtitle} <br className="hidden sm:block" />{subtitle1}
                    </div>
                    <div className='flex flex-row flex-wrap gap-4 text-sm max-sm:text-xs font-medium'>
                        <button
                            onClick={() => {
                                customTrack("Industries Bottom Banner Button Clicked", { buttonName: 'Try for free', location: location.pathname })
                                window.open("https://app.ottermap.com/signup")
                            }}
                            className="text-white cursor-pointer bg-[#218448] border-2 rounded-full px-6 py-3 max-sm:py-1.5 flex items-center justify-center gap-2">
                            Try for free
                            <img src={RightArrow} alt="" />
                        </button>
                        <button
                            onClick={() => {
                                customTrack("Industries Bottom Banner Button Clicked", { buttonName: 'Try for free', location: location.pathname })
                                window.open("https://calendly.com/amit-ottermap/30min")
                            }}
                            className="text-black cursor-pointer border-2 border-[#218448] rounded-full px-6 py-3 max-sm:py-1.5">
                            Book a demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
