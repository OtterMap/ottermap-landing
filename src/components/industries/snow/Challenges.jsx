import React from 'react';
import Icon1 from '../../../assets/industries/snow/challenges/challengeIcon1.svg';
import Icon2 from '../../../assets/industries/snow/challenges/challengeIcon2.svg';
import Icon3 from '../../../assets/industries/snow/challenges/challengeIcon3.svg';
import Icon4 from '../../../assets/industries/snow/challenges/challengeIcon4.svg';

const Challenges = () => {
    const challenges = [
        {
            id: 1,
            icon: Icon1,
            title: 'Manual Measurements Slow You Down',
            desc: 'Site visits reduce bid volume and delay response times.',
        },
        {
            id: 2,
            icon: Icon2,
            title: 'Inconsistent Takeoffs = Risky pricing',
            desc: 'Without standard zones, estimators produce variable results, increasing the risk of underbidding.',
        },
        {
            id: 3,
            icon: Icon3,
            title: 'Managing large portfolio is complex',
            desc: 'Scaling bids across 100s of sites is impossible without automation.',
        },
        {
            id: 4,
            icon: Icon4,
            title: 'Hours Lost Per Site',
            desc: 'In peak season, every hour counts. Manual workflows limit your capacity to compete.',
        },
    ];

    return (
        <div className='py-28 px-6 md:px-12 lg:px-20'>
            <div className='flex flex-col gap-6 items-center text-center'>
                <div className='text-3xl md:text-4xl max-sm:text-xl font-bold'>
                    The Challenges of Snow Estimating
                </div>
                <div className='text-xl md:text-2xl max-sm:text-xs font-normal'>
                    Why traditional snow bid workflows fall short
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {
                    challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 p-6 border border-[#efefef] rounded-xl"
                        >
                            <img src={challenge.icon} alt="" className="h-13 w-13" />
                            <div className="text-lg max-sm:text-sm font-semibold">
                                {challenge.title}
                            </div>
                            <div className="text-base max-sm:text-xs font-normal text-gray-700">
                                {challenge.desc}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Challenges;
