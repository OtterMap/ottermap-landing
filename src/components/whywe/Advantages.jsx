import React from 'react';
import Advantage from '../../assets/whywe/advantages/advantage.svg';
import Advantage1 from '../../assets/whywe/advantages/advantage1.svg';
import Advantage2 from '../../assets/whywe/advantages/advantage2.svg';
import Advantage3 from '../../assets/whywe/advantages/advantage3.svg';
import Advantage4 from '../../assets/whywe/advantages/advantage4.svg';
import RightArrow from '../../assets/rightArrow.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const Advantages = () => {
    const advantages = [
        {
            id: 1,
            icon: Advantage1,
            title: 'Hyper-Accurate Takeoffs with Utmost Precision',
            desc: 'OtterMaps delivers 98%+ accurate takeoffs with up-to-date aerial imagery and service-specific zones—ready to export instantly.'
        },
        {
            id: 2,
            icon: Advantage2,
            title: 'Enterprise-Scale Portfolio Management',
            desc: 'For companies handling 50, 500, or 5,000+ properties: Ottermap simplifies multi-site workflows with tagging, dashboard filtering, and batch exports.'
        },
        {
            id: 3,
            icon: Advantage3,
            title: 'No GIS Expertise Required',
            desc: 'Field teams, estimators, and ops managers love our intuitive UX. Create custom zones, edit shapes, and add notes—no training manuals needed.'
        },
        {
            id: 4,
            icon: Advantage4,
            title: 'Faster Proposals = More Revenue',
            desc: 'Proposals that took hours now take minutes. Free your sales team to quote more, faster—without sacrificing accuracy.'
        },
    ]
    return (
        <div className='px-4 pt-1 sm:px-8 max-sm:px-5 md:px-16 lg:px-20 pb-28'>
            <div className='flex flex-col pb-14 sm:pb-14 gap-8'>
                <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-start xl:w-[40%] leading-snug'>
                    Our Advantage
                </div>
                <div className='flex flex-row gap-4 text-sm font-medium'>
                    <button
                        onClick={() => {
                            customTrack("Why we advantages Button Clicked", { buttonName: 'Try for free' })
                            window.open("https://app.ottermap.com/signup")
                        }}
                        className="text-white cursor-pointer bg-[#218448] border-2 rounded-full px-7 py-3 flex items-center justify-center gap-2 text-nowrap hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                        Try for free
                        <img src={RightArrow} alt="" />
                    </button>
                    <button
                        onClick={() => {
                            customTrack("Why we advantages Button Clicked", { buttonName: 'Book a demo' })
                            window.open("https://calendly.com/amit-ottermap/30min")
                        }}
                        className="text-black cursor-pointer border-2 border-[#218448] rounded-full px-7 py-3 text-nowrap hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                        Book a demo
                    </button>
                </div>
            </div>

            <div className='flex max-xl:flex-col max-xl:items-center items-end justify-between gap-10'>
                <div className='xl:w-[50%] sm:grid sm:grid-cols-2 gap-8 flex flex-col'>
                    {
                        advantages.map((advantage, index) => (
                            <div key={index} className='flex gap-4 justify-start items-start'>
                                <div className='w-8 h-8 shrink-0 object-cover'><img src={advantage.icon} alt="" /></div>
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
