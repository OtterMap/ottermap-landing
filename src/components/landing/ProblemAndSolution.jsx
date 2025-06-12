import React, { useState } from 'react';
import RightArrow from '../../assets/rightArrow.svg';
import ProblemSolution1 from '../../assets/landing/problemSolution/problemSolution1.svg';
import ProblemSolution2 from '../../assets/landing/problemSolution/problemSolution2.svg';
import ProblemSolution3 from '../../assets/landing/problemSolution/problemSolution3.svg';
import ProblemSolution4 from '../../assets/landing/problemSolution/problemSolution4.svg';
import Image1 from '../../assets/landing/problemSolution/image1.svg';
import Image2 from '../../assets/landing/problemSolution/image2.svg';
import Image3 from '../../assets/landing/problemSolution/image3.svg';
import Image4 from '../../assets/landing/problemSolution/image4.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const ProblemAndSolution = () => {
    // Track the currently open tab by its ID
    const [activeTabId, setActiveTabId] = useState(1);

    const problemandSolution = [
        {
            id: 1,
            icon: ProblemSolution1,
            chip: 'GUESSWORK TAKING OVER ACCURACY',
            problem: 'Your team is forced to “guesstimate” without reliable property measurements—leading to underbidding and overpromising or overpricing and losing bids, and eventually losing trust.',
            solution: 'Ottermap delivers accurate detailed property maps for precise takeoffs, so every bid is backed by data not assumptions.',
            image: Image1,
        },
        {
            id: 2,
            icon: ProblemSolution2,
            chip: 'Delayed Proposals Leading to Lost Opportunities',
            problem: 'Focusing on one proposal means missing others. Manual workflows and site visits don’t scale when bids stack up.',
            solution: 'Ottermap automates estimation process so your team does not miss out opportunities. You win more bids without burning out.',
            image: Image2,
        },
        {
            id: 3,
            icon: ProblemSolution3,
            chip: 'Lack of Standardization Undermines Professionalism',
            problem: 'Different estimators use different tools and formats. Your proposals lack consistency—and your brand suffers.',
            solution: 'Ottermap standardizes your mapping and takeoff process, so every proposal is clean, professional, and aligned with your SOP.',
            image: Image3,
        },
        {
            id: 4,
            icon: ProblemSolution4,
            chip: 'Challenges in Managing Large-Scale Property Portfolios',
            problem: 'Handling portfolios like Walmart, Costco, or Wells Fargo etc. Managing 50 or 5,000 sites can overwhelm your team and lead to missed opportunities.',
            solution: 'Ottermap automates portfolio mapping and lets you generate site-ready takeoffs at scale — quote dozens of properties in days, not weeks.',
            image: Image4,
        },
    ];

    const activeItem = problemandSolution.find(item => item.id === activeTabId);

    return (
        <div className="flex flex-col px-4 sm:px-8 lg:px-20 xl:px-20 pt-28 md:pt-28 pb-8 gap-10">
            <div className="w-full flex flex-col justify-center items-center max-sm:items-start gap-6 lg:pl-4 xl:pr-20">
                <div className="text-2xl max-sm:text-xl sm:text-3xl lg:text-4xl font-bold text-center max-sm:text-start">
                    Managing property estimates shouldn’t cost you bids, time, or your sanity. But for most service businesses, it still does.
                </div>

                <div className='flex flex-row gap-4 justify-center items-center'>
                    <button
                        onClick={() => {
                            customTrack("Landing Problem-Solution Button Clicked", { buttonName: "Try for Free" })
                            window.open("https://app.ottermap.com/signup")
                        }}

                        className="bg-[#218448] cursor-pointer text-sm rounded-full text-white px-4 sm:py-3 py-2 flex justify-center items-center gap-2 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out"
                    >
                        Try for Free
                        <img src={RightArrow} alt="right arrow" />
                    </button>
                    <button
                        onClick={() => {
                            customTrack("Landing Problem-Solution Button Clicked", { buttonName: "Book a demo" })
                            window.open("https://calendly.com/amit-ottermap/30min")
                        }}
                        className="border-[#218448] border-2 cursor-pointer text-sm rounded-full text-black px-4 sm:py-3 py-2 flex justify-center items-center gap-1 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out"
                    >
                        Book a demo
                    </button>
                </div>
            </div>

            <div className="pt-20 max-sm:pt-0 px-4 md:px-2 container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-20 max-sm:gap-6">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-start">
                    <img
                        src={activeItem.image}
                        alt="Problem solution visual"
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
                        loading='lazy'
                    />
                </div>

                {/* Problem & Solution Section */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    {problemandSolution.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setActiveTabId(item.id)}
                            className={`group border-b-2 border-[#218448] shadow-md cursor-pointer w-full rounded-lg p-4 hover:bg-[#2184481A] hover:border-l-4 transition-all duration-300 ease-in-out ${activeTabId === item.id ? 'bg-[#2184481A] border-l-4' : ''}`}
                        >
                            <div className="flex flex-col gap-2 text-base sm:text-lg max-sm:text-xs font-semibold text-[#de0000]">
                                <div className="flex gap-3 items-center uppercase font-bold">
                                    <img className="w-6 h-6 sm:w-7 sm:h-7 object-contain" src={item.icon} alt="Problem icon" />
                                    <span>{item.chip}</span>
                                </div>

                                {activeTabId === item.id && (
                                    <div className="transition-all duration-300 ease-in-out">
                                        <p className="text-black text-sm sm:text-base max-sm:text-sm mt-2">{item.problem}</p>
                                        <p className="text-[#218448] text-base sm:text-lg max-sm:text-base font-medium mt-4 pr-2">{item.solution}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProblemAndSolution;
