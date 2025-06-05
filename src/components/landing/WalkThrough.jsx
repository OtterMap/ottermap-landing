import React from 'react';
import Video from '../../assets/video.svg';
import RightArrow from '../../assets/rightArrow.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const WalkThrough = () => {
    return (
        <div id='walkthrough' className="flex flex-col justify-center items-center gap-5 pt-16 sm:pt-16 px-4 sm:px-8 bg-white">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                Build Smart Maps in Minutes
            </div>
            <div className="text-base sm:text-lg lg:text-2xl font-normal text-center ">
                From importing data to customizing routes and popups this quick demo shows you how Ottermap simplifies it all.
            </div>
            <div className='flex gap-4 justify-center items-center'>
                <button
                    onClick={() => {
                        customTrack("Landing Walkthrough Button Clicked", { buttonName: "Try for Free" })
                        window.open("https://app.ottermap.com/signup")
                    }}
                    className="bg-[#218448] cursor-pointer text-sm rounded-full text-white px-4 py-3 max-sm:py-2 flex justify-center items-center gap-2">
                    Try for Free
                    <img src={RightArrow} alt="right arrow" />
                </button>
                <button
                    onClick={() => {
                        customTrack("Landing Problem-Solution Button Clicked", { buttonName: "Book a demo" })
                        window.open("https://calendly.com/amit-ottermap/30min")
                    }}
                    className="border-[#218448] border-2 cursor-pointer text-sm rounded-full text-black px-4 py-3 max-sm:py-2 flex justify-center items-center gap-1">Book a demo
                </button>
            </div>
            <div className="pt-10 sm:pt-16 sm:pb-24 pb-24 w-full flex justify-center">
                {/* <img src={Video} alt="video" className="w-full max-w-2xl h-auto" loading='lazy'/> */}
                <video className="w-full max-w-2xl h-auto rounded-2xl"
                    src='https://video.wixstatic.com/video/abe956_ad5303cd52084bd0a35c0f40c2dc203a/1080p/mp4/file.mp4'
                    poster={Video}
                    muted controls controlsList='nodownload'
                ></video>
            </div>
        </div>
    );
};

export default WalkThrough;
