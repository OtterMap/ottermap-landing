import React from 'react'
import Logo from '../../assets/logo.svg';
import TimeIcon from '../../assets/landing/bookMeeting/bookMeetingTimeIcon.svg';
import VideoIcon from '../../assets/landing/bookMeeting/bookMeetingVideoIcon.svg';
import UserIcon from '../../assets/landing/bookMeeting/bookMeetingUserIcon.svg';
import { InlineWidget } from "react-calendly";

const BookMeeting = () => {
    return (
        <div className='mb-20 mt-2 px-4 sm:px-6 lg:px-20'>
            <div className='text-2xl sm:text-3xl lg:text-4xl font-bold pb-10 text-center'>
                See how Ottermap works for you!
            </div>

            <div className='flex flex-col lg:flex-row bg-[#218448] rounded-xl overflow-hidden'>
                <div className='w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-white'>
                    <div className='flex flex-col px-6 sm:px-10 lg:pl-20 pt-10'>
                        <div className='bg-white rounded-lg w-fit px-4 py-2.5'>
                            <img src={Logo} alt="Ottermap Logo" />
                        </div>

                        <div className='pt-8 pb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-white'>
                            Ottermap Demo Request
                        </div>

                        <div className='text-sm sm:text-base font-medium text-white flex flex-col gap-4 pb-10'>
                            <div className='flex gap-3 items-center'>
                                <img src={TimeIcon} alt="time icon" />
                                30 min
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img src={VideoIcon} alt="video icon" />
                                Web conferencing details provided upon confirmation.
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img src={UserIcon} alt="user icon" />
                                Amit Verma, Founder & CEO
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 flex justify-center items-center p-6'>
                    <div className='w-full h-[600px] max-w-xl border rounded-lg overflow-hidden'>
                        <InlineWidget styles={{ height: '100%', width: '100%' }} url="https://calendly.com/your_scheduling_page" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BookMeeting
