import React from 'react';
import Advantage from '../../../assets/industries/snow/advantages/advantage.svg';
import Advantage1 from '../../../assets/industries/snow/advantages/advantage1.svg';
import Advantage2 from '../../../assets/industries/snow/advantages/advantage2.svg';
import Advantage3 from '../../../assets/industries/snow/advantages/advantage3.svg';
import Advantage4 from '../../../assets/industries/snow/advantages/advantage4.svg';
import RightArrow from '../../../assets/rightArrow.svg';
import { customTrack } from '../../../utils/mixpanel/customTrack';

const Advantages = () => {
    const advantages = [
        {
            id: 1,
            icon: Advantage1,
            title: 'Accurate Snow Takeoffs in Minutes',
            desc: 'Generate layered maps with drive lanes, sidewalks, salt areas, and piling zones—Automated.'
        },
        {
            id: 2,
            icon: Advantage2,
            title: 'Multi- site management made simple',
            desc: 'View, tag, and filter hundreds of properties in one dashboard. Group by region, client, or site type.'
        },
        {
            id: 3,
            icon: Advantage3,
            title: 'Visual, Branded Proposal',
            desc: 'Impress clients with PDF proposals showing exact snow service zones overlaid on high-resolution imagery.'
        },
        {
            id: 4,
            icon: Advantage4,
            title: 'Collaboration Without Confusion',
            desc: 'Share access with operations, sales, or subcontractors. Keep comments, edits, and versions in one place.'
        },
    ]
    return (
        <div className='px-4 pt-2 sm:px-8 md:px-16 lg:px-20 pb-28'>
            <div className='flex flex-col max-xl:pb-20 pb-10 gap-8'>
                <div className='text-2xl sm:text-3xl md:text-4xl max-sm:text-xl font-bold text-start xl:w-[40%] leading-snug'>
                    How Ottermap Supports Snow Pros Win
                </div>
                <div className='flex flex-row gap-4 text-sm max-sm:text-xs font-medium'>
                    <button
                        onClick={() => {
                            customTrack("Snow advantages Button Clicked", { buttonName: 'Try for free' })
                            window.open("https://app.ottermap.com/signup")
                        }}
                        className="text-white cursor-pointer bg-[#218448] border-2 rounded-full px-6 py-3 max-sm:py-2 flex items-center justify-center gap-2 text-nowrap">
                        Try for free
                        <img src={RightArrow} alt="" />
                    </button>
                    <button
                        onClick={() => {
                            customTrack("Snow advantages Button Clicked", { buttonName: 'Book a demo' })
                            window.open("https://calendly.com/amit-ottermap/30min")
                        }}
                        className="text-black cursor-pointer border-2 border-[#218448] rounded-full px-6 py-3 max-sm:py-2 text-nowrap">
                        Book a demo
                    </button>
                </div>
            </div>

            <div className='flex max-xl:flex-col max-xl:items-center items-end justify-between gap-10'>
                <div className='xl:w-[50%] grid grid-cols-2 max-sm:grid-cols-1 gap-10'>
                    {
                        advantages.map((advantage, index) => (
                            <div key={index} className='flex gap-4 max-sm:gap-2 justify-start items-start'>
                                <div className='w-20'><img src={advantage.icon} alt="" /></div>
                                <div className='flex flex-col gap-3'>
                                    <div className='text-lg max-sm:text-base font-bold'>{advantage.title}</div>
                                    <div className='text-base max-sm:text-xs font-normal'>{advantage.desc}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='xl:w-[50%] flex justify-center'>
                    <img src={Advantage} alt="" loading='lazy' />
                </div>
            </div>

        </div>
    );
};

export default Advantages;
