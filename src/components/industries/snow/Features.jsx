import React from 'react'
import Feature1 from '../../../assets/industries/snow/features/feature1.svg';
import RightArrow from '../../../assets/rightArrow.svg';
import FeatureIcon1 from '../../../assets/industries/snow/features/featureIcon1.svg';
import FeatureIcon2 from '../../../assets/industries/snow/features/featureIcon2.svg';
import FeatureIcon3 from '../../../assets/industries/snow/features/featureIcon3.svg';
import { customTrack } from '../../../utils/mixpanel/customTrack';

const Features = () => {
    return (
        <div className='pb-20 pt-10 px-4 sm:px-10 md:px-16 lg:px-20 max-sm:px-2'>
            <div className='flex flex-col gap-16 lg:gap-24'>

                <div className='flex flex-col justify-center items-center gap-4 text-center'>
                    <div className='text-2xl sm:text-3xl md:text-4xl max-sm:text-xl font-bold'>
                        Winter Work, Without the Workflow Chaos
                    </div>
                    <div className='text-base sm:text-lg md:text-xl max-sm:text-xs font-normal max-w-7xl'>
                        Snow season comes fast and the bids come faster. With Ottermap, snow professionals can skip the guesswork and jump straight to accurate, zone-based maps and ready-to-go takeoffs. Whether you're handling 10 sites or 1,000, Ottermap gives you the tools to plan, quote, and deliver with confidence.
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-start gap-16 lg:gap-24'>

                    <div className='w-full lg:w-1/2 max-sm:w-full flex justify-center'>
                        <img src={Feature1} alt="Collaboration" className="max-w-full h-auto" loading='lazy' />
                    </div>

                    <div className='w-full lg:w-1/2 max-sm:w-full flex flex-col justify-center items-center gap-8'>
                        <div className='flex gap-8 flex-col'>

                            <div className='text-2xl sm:text-3xl max-sm:text-xl font-bold'>
                                Real Results for Snow Teams
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div className='flex gap-4 sm:gap-6'>
                                    <img src={FeatureIcon1} alt="" className="w-14 h-14 max-sm:w-13 max-sm:h-13" />
                                    <div className='flex flex-col gap-1'>
                                        <div className='text-lg sm:text-xl max-sm:text-base font-medium'>
                                            Save 95% of Time Spent on Takeoffs
                                        </div>
                                        <div className='text-base sm:text-lg max-sm:text-xs font-normal'>
                                            2-minute setup frees up time for selling and planning.
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-4 sm:gap-6'>
                                    <img src={FeatureIcon2} alt="" className="w-14 h-14 max-sm:w-13 max-sm:h-13" />
                                    <div className='flex flex-col gap-1'>
                                        <div className='text-lg sm:text-xl max-sm:text-base font-medium'>
                                            Boost revenue per rep by 20%
                                        </div>
                                        <div className='text-base sm:text-lg max-sm:text-xs font-normal'>
                                            Enable your team to send more bids and close faster.
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-4 sm:gap-6'>
                                    <img src={FeatureIcon3} alt="" className="w-14 h-14 max-sm:w-13 max-sm:h-13" />
                                    <div className='flex flex-col gap-1'>
                                        <div className='text-lg sm:text-xl max-sm:text-base font-medium'>
                                            Bid with Confidence
                                        </div>
                                        <div className='text-base sm:text-lg max-sm:text-xs font-normal'>
                                            98%+ accuracy ensures profitability and reduces risk.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-row flex-wrap gap-4 text-sm max-sm:text-xs font-medium pt-4'>
                                <button
                                    onClick={() => {
                                        customTrack("Snow features Button Clicked", { buttonName: 'Try for free' })
                                        window.open("https://app.ottermap.com/signup")
                                    }}
                                    className="text-white cursor-pointer bg-[#218448] border-2 rounded-full px-6 py-3 max-sm:py-2 flex items-center justify-center gap-2 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                                    Try for free
                                    <img src={RightArrow} alt="" />
                                </button>
                                <button
                                    onClick={() => {
                                        customTrack("Snow features Button Clicked", { buttonName: 'Book a demo' })
                                        window.open("https://calendly.com/amit-ottermap/30min")
                                    }}
                                    className="text-black cursor-pointer border-2 border-[#218448] rounded-full px-6 py-3 max-sm:py-2 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                                    Book a demo
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
