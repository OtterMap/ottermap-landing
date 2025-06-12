import React from 'react';
import Image1 from '../../assets/resources/playbook/playbook1.svg';
import Image2 from '../../assets/resources/playbook/playbook2.svg';
import Image3 from '../../assets/resources/playbook/playbook3.svg';
import Image4 from '../../assets/resources/playbook/playbook4.svg';
import { useNavigate } from 'react-router-dom';
import { customTrack } from '../../utils/mixpanel/customTrack';

const Playbook = () => {
    const navigate = useNavigate();
    const usecases = [
        {
            img: Image1,
            title: "Landscaping estimation workflows",
            // desc: "Transforming outdoor spaces with beautiful, sustainable landscape solutions.",
            link: "/industries/landscaping"
        }, {
            img: Image2,
            title: "Snow service takeoff standardization",
            // desc: "Efficient snow removal to keep your pathways clear and safe during winter.",
            link: "/industries/snow"
        }, {
            img: Image3,
            title: "Paving site planning templates",
            // desc: "Durable and stylish paving for driveways, walkways, and outdoor areas.",
            link: "/industries/paving"
        }, {
            img: Image4,
            title: "Proposal formatting for maximum client trust",
            // desc: "Comprehensive facility management to ensure smooth, hassle-free operations.",
            link: "/industries/facilities-services"
        }
    ];
    return (
        <div className="px-4 sm:px-10 lg:px-20 pt-28 pb-24">
            <div className='flex flex-col gap-5 pb-10'>
                <div className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
                    Best practice playbook
                </div>
                {/* <div className='text-lg sm:text-xl lg:text-2xl font-normal'>
                    See How OtterMap Works for Your Business
                </div> */}
            </div>

            <div className='flex flex-col lg:flex-row justify-between gap-5'>
                {usecases.map((caseItem, index) => (
                    <div key={index} className='flex flex-col rounded-xl w-full lg:w-[30%] bg-white shadow-md'>
                        <img className='rounded-t-xl w-full h-auto' src={caseItem.img} alt={caseItem.title} />
                        <div className='pl-5 h-full flex flex-col justify-between pb-5 rounded-b-2xl'>
                            <div>
                                <div className='text-xl font-bold pr-5 pt-3.5 pb-5'>{caseItem.title}</div>
                                {/* <div className='text-sm font-normal pr-5 pb-5'>{caseItem.desc}</div> */}
                            </div>
                            <button onClick={() => {
                                customTrack("Resources Learn section Button Clicked", { buttonName: "Read" })
                                navigate(caseItem.link)
                            }} className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-9 py-1.5 flex items-center gap-1 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                                Read
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className='pt-14 pb-4 flex justify-center'>
                <button className="w-fit bg-[#218448] cursor-pointer rounded-full text-sm text-white px-5 py-3 flex items-center gap-2 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                    Read more Use cases
                    <img src={RightArrow} alt="right arrow" />
                </button>
            </div> */}
        </div >
    );
};

export default Playbook;
