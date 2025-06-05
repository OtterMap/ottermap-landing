import React from 'react'
import Icon1 from '../../../assets/industries/snow/challenges/challengeIcon1.svg';
import Icon2 from '../../../assets/industries/snow/challenges/challengeIcon2.svg';
import Icon3 from '../../../assets/industries/snow/challenges/challengeIcon3.svg';
import Icon4 from '../../../assets/industries/snow/challenges/challengeIcon4.svg';
const Challenges = () => {
    const challenges = [
            {
                id: 1,
                icon: Icon1,
                title: 'Manual Measuring Delays',
                desc: 'Time-consuming site visits slow down sales cycles',
            },
            {
                id: 2,
                icon: Icon2,
                title: 'Inconsistent Results',
                desc: 'Different estimators = different takeoff methods',
            },
            {
                id: 3,
                icon: Icon3,
                title: 'Portfolio Management Pressure',
                desc: 'Multi-property bidding becomes chaotic',
            },
            {
                id: 4,
                icon: Icon4,
                title: 'High Stakes, Low Speed',
                desc: 'When you\'re racing against snowfall and competitors, time becomes your biggest enemy.',
            },
        ];
    return (
        <div className='pt-28 max-sm:pt-12 pb-24 px-6 md:px-12 lg:px-20 max-sm:px-4'>
            <div className='flex flex-col gap-6 items-center text-center'>
                <div className='text-3xl md:text-4xl max-sm:text-xl font-bold'>
                    Smart Landscaping Estimation Without Bottlenecks
                </div>
                <div className='text-xl md:text-2xl max-sm:text-xs font-normal'>
                    The Landscape Industry's Estimation Challenges
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                {
                    challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 p-6 border border-[#F0EEEE] bg-[#FAFAFA] rounded-xl"
                        >
                            <img src={challenge.icon} alt="" className="h-13 w-13 max-sm:h-13 max-sm:w-13" />
                            <div className="text-lg max-sm:text-base font-semibold">
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
    )
}

export default Challenges
