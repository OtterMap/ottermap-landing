import React from 'react';
import UseCase1 from '../../assets/landing/useCases/useCase1.svg';
import UseCase2 from '../../assets/landing/useCases/useCase2.svg';
import UseCase3 from '../../assets/landing/useCases/useCase3.svg';
import UseCase4 from '../../assets/landing/useCases/useCase4.svg';
import { useNavigate } from 'react-router-dom';
import { customTrack } from '../../utils/mixpanel/customTrack';

const UseCases = () => {
    const navigate = useNavigate();
    const usecases = [
        {
            img: UseCase1,
            title: "Landscaping",
            desc: "Expert landscape design and maintenance services to enhance curb appeal and property value. ",
            link: "/industries/landscaping"
        }, {
            img: UseCase2,
            title: "Snow",
            desc: "Reliable commercial snow removal services to ensure safe, accessible properties all winter long.",
            link: "/industries/snow"
        }, {
            img: UseCase3,
            title: "Paving",
            desc: "Custom paving solutions for driveways, sidewalks, and outdoor spaces that last for years.",
            link: "/industries/paving"
        }, {
            img: UseCase4,
            title: "Facilities services",
            desc: "Integrated facility management for landscaping, maintenance, and operational efficiency.",
            link: "/industries/facilities-services"
        }
    ];
    return (
        <div className="px-4 sm:px-10 lg:px-20 pt-28 pb-28">
            <div className='flex flex-col gap-5 pb-10'>
                <div className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
                    Built for Every Industry, Tailored for Every Need
                </div>
                <div className='text-lg sm:text-xl lg:text-2xl font-normal'>
                    See How OtterMap Works for Your Business
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between gap-5'>
                {usecases.map((caseItem, index) => (
                    <div key={index} className='flex flex-col rounded-2xl w-full lg:w-[30%] max-sm:w-full bg-white shadow-md'>
                        <img className='rounded-t-xl w-full h-[210px] max-sm:h-[142px] object-cover' src={caseItem.img} alt={caseItem.title} />
                        <div className='pl-5 h-full flex flex-col justify-between bg-[#2184484D] pb-5 rounded-b-2xl'>
                            <div>
                                <div className='text-lg max-sm:text-sm font-bold pr-5 pt-3.5 pb-3'>{caseItem.title}</div>
                                <div className='text-sm max-sm:text-xs font-normal pr-5 pb-5'>{caseItem.desc}</div>
                            </div>
                            <button onClick={() => {
                                customTrack("Landing Needs Button Clicked", { buttonName: "Learn more", industry: caseItem.title })
                                navigate(caseItem.link)
                            }} className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm max-sm:text-xs text-white px-5 max-sm:px-4 py-3 max-sm:py-2.5 flex items-center gap-1 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                                Learn more
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className='pt-14 pb-4 flex justify-center'>
                <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex items-center gap-2">
                    Read more Use cases
                    <img src={RightArrow} alt="right arrow" />
                </button>
            </div> */}
        </div >
    );
};

export default UseCases;
