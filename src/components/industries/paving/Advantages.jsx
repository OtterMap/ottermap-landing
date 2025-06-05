import React from 'react';
import Advantage from '../../../assets/industries/paving/advantages/advantage.svg';
import Advantage1 from '../../../assets/industries/paving/advantages/advantage1.svg';
import Advantage2 from '../../../assets/industries/paving/advantages/advantage2.svg';
import Advantage3 from '../../../assets/industries/paving/advantages/advantage3.svg';
import Advantage4 from '../../../assets/industries/paving/advantages/advantage4.svg';
import RightArrow from '../../../assets/rightArrow.svg';
import { customTrack } from '../../../utils/mixpanel/customTrack';

const Advantages = () => {
    const advantages = [
        {
            id: 1,
            icon: Advantage1,
            title: '95% Time Saved on Takeoffs',
            desc: 'Quote more jobs in less time'
        },
        {
            id: 2,
            icon: Advantage2,
            title: '20% Higher Estimator Output',
            desc: 'Better tools = higher productivity'
        },
        {
            id: 3,
            icon: Advantage3,
            title: '98%+ Takeoff Accuracy',
            desc: 'Plan material volumes and cost with confidence'
        },
        {
            id: 4,
            icon: Advantage4,
            title: '30% Reduction in Material Waste',
            desc: 'Precise calculations save money'
        },
    ]
    return (
        <div className='px-4 pt-2 sm:px-8 md:px-16 lg:px-20 pb-28 max-sm:pb-12'>
            <div className='flex flex-col pb-14 sm:pb-14 gap-8'>
                <div className='text-2xl sm:text-3xl md:text-4xl max-sm:text-xl max-sm:text-start font-bold text-start xl:w-[50%] 2xl:w-[40%] leading-snug'>
                    OtterMaps Replaces Clipboards With Cloud Precision
                </div>
                <div className='text-2xl sm:text-2xl md:text-xl max-sm:text-sm font-normal text-start xl:w-[55%] leading-snug'>
                    Upload addresses or drop pins. Generate high-resolution paving takeoffs—complete with drive lanes, sidewalk edges, curb areas, and ADA markings in minutes.
                </div>
            </div>

            <div className='flex max-xl:flex-col max-xl:items-center items-start justify-between gap-10'>
                <div className='xl:w-[50%] grid grid-cols-2 max-sm:grid-cols-1 gap-10'>
                    {
                        advantages.map((advantage, index) => (
                            <div key={index} className='flex gap-4 max-sm:gap-1 justify-start items-start'>
                                <div className='w-10'><img src={advantage.icon} alt="" /></div>
                                <div className='flex flex-col gap-3'>
                                    <div className='text-lg font-bold'>{advantage.title}</div>
                                    <div className='text-base font-normal'>{advantage.desc}</div>
                                </div>
                            </div>
                        ))
                    }
                    <div className='flex flex-row gap-4 text-sm max-sm:text-xs font-medium'>
                        <button
                            onClick={() => {
                                customTrack("Paving advantages Button Clicked", { buttonName: 'Try for free' })
                                window.open("https://app.ottermap.com/signup")
                            }}
                            className="text-white cursor-pointer bg-[#218448] border-2 rounded-full px-6 py-3 max-sm:py-2 flex items-center justify-center gap-2 text-nowrap">
                            Try for free
                            <img src={RightArrow} alt="" />
                        </button>
                        <button
                            onClick={() => {
                                customTrack("Paving advantages Button Clicked", { buttonName: 'Book a demo' })
                                window.open("https://calendly.com/amit-ottermap/30min")
                            }}
                            className="text-black cursor-pointer border-2 border-[#218448] rounded-full px-6 py-3 max-sm:py-2 text-nowrap">
                            Book a demo
                        </button>
                    </div>
                </div>
                <div className='xl:w-[50%] flex justify-center'>
                    <img src={Advantage} alt="" loading='lazy' />
                </div>
            </div>

        </div>
    );
};

export default Advantages;
