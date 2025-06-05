import Icon1 from '../../../assets/industries/facilitiesServices/challenges/challengeIcon1.svg';
import Icon2 from '../../../assets/industries/facilitiesServices/challenges/challengeIcon2.svg';
import Icon3 from '../../../assets/industries/facilitiesServices/challenges/challengeIcon3.svg';
import Icon4 from '../../../assets/industries/facilitiesServices/challenges/challengeIcon4.svg';

const Challenges = () => {
    const challenges = [
        {
            id: 1,
            icon: Icon2,
            title: 'Manual Site Audits Drain Resources',
            desc: 'Time-consuming property walks and measurements',
        },
        {
            id: 2,
            icon: Icon1,
            title: 'Fragmented Tools for Mapping & Estimation',
            desc: 'Multiple software systems that don\'t communicate',
        },
        {
            id: 3,
            icon: Icon4,
            title: 'Hard to Scale Across National Portfolios',
            desc: 'Managing hundreds of sites becomes overwhelming',
        },
        {
            id: 4,
            icon: Icon3,
            title: 'No Visual Standard for Service Proposals',
            desc: 'Inconsistent presentation to procurement teams',
        },
    ];

    return (
        <div className='py-28 px-6 md:px-12 lg:px-20'>
            <div className='flex flex-col gap-6 items-center text-center'>
                <div className='text-3xl md:text-4xl max-sm:text-xl font-bold'>
                    Facility management without the guesswork
                </div>
                <div className='text-xl md:text-2xl max-sm:text-xs font-normal'>
                    Challenges Facility Service Teams Face
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
    );
};

export default Challenges;
