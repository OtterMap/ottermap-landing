import { useState } from 'react';
import Plus from '../../assets/plus.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const FAQs = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleFAQ = (id) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    const faq = [
        {
            id: 1,
            question: 'What training content is available for new users?',
            answer: 'We offer onboarding videos, step-by-step guides, and workflow tips designed to help new estimators get started fast and confidently.'
        },
        {
            id: 2,
            question: 'Are there resources specific to Landscaping, Snow, and Paving?',
            answer: 'Yes, we provide industry-specific templates, estimation workflows, and checklists tailored to each vertical—landscaping, snow, paving, and facility services.'
        },
        {
            id: 3,
            question: 'Where can I find proposal best practices and playbooks?',
            answer: 'Visit our Best Practices section for proven proposal formats, takeoff strategies, and multi-site bidding tips used by leading contractors.'
        },
        {
            id: 4,
            question: 'Can I learn how other teams use OtterMap to win bids?',
            answer: 'Yes! Our Case Studies highlight real-world success stories from B2B contractors, showing how they save time and win more jobs with OtterMap.'
        },
        {
            id: 5,
            question: 'How do I get help if I run into issues?',
            answer: 'You can access our Help Center, use live chat during business hours, or email us directly at info@ottermap.com for personalized support.'
        },
    ];
    return (
        <div className="max-lg:px-7">
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

export default FAQs;
