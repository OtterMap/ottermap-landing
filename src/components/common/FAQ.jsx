import React, { useState } from 'react';
import Plus from '../../assets/plus.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const FAQ = ({ faq }) => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleFAQ = (id) => {
        setExpandedId(prev => (prev === id ? null : id));
    };


    return (
        <div id='faqs' className="px-4 sm:px-10">
            <div className='pt-20 sm:pt-20 text-2xl sm:text-3xl lg:text-4xl font-bold text-left sm:pl-10 lg:pl-20'>
                FAQ'S
            </div>

            <div className='flex flex-col gap-5 justify-center items-center pt-10 sm:pt-20 lg:px-20 sm:px-10'>
                {faq.map((item) => (
                    <div
                        key={item.id}
                        className='w-full  bg-[#f5f6f7] rounded-xl cursor-pointer'
                        onClick={() => {
                            customTrack("FAQ Clicked", { path: location.pathname, question: item.question })
                            toggleFAQ(item.id)
                        }}
                    >
                        <div className='flex justify-between items-center px-6 sm:px-10 py-6 sm:py-8 text-lg sm:text-xl max-sm:text-sm font-normal'>
                            <div>{item.id}. {item.question}</div>
                            <img
                                src={Plus}
                                alt="Toggle"
                                className={`transition-transform duration-200 ${expandedId === item.id ? 'rotate-45' : ''}`}
                            />
                        </div>
                        {expandedId === item.id && (
                            <div className='px-6 sm:px-10 pb-6 sm:pb-8 text-base sm:text-lg text-gray-700'>
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default FAQ;
