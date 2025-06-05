import { useState } from 'react';
import BottomBanner from '../../assets/resources/bottomBanner/bannerImage.svg'
import SubmitIcon from '../../assets/resources/bottomBanner/submit.svg'
import { customTrack } from '../../utils/mixpanel/customTrack';
const Banner = () => {
    const [email, setEmail] = useState('');
    return (
        <div className='mx-20 max-lg:mx-6 mt-1 mb-24 border border-[#DBE0E5] px-14 max-sm:px-5 py-14 flex max-lg:flex-col gap-10 max-lg:items-center xl:justify-between rounded-3xl'>
            <div className='flex flex-col gap-20 max-sm:gap-7 xl:w-[40%]'>
                <div className='flex flex-col gap-6'>
                    <div className='text-2xl max-sm:text-base font-bold'>Stay in the Loop</div>
                    <div className='text-lg max-sm:text-sm font-normal'>Join our monthly newsletter for exclusive guides, community stories, and product updates.</div>
                </div>
                <div>
                    <div className='border border-[#DBE0E5] flex items-center justify-between w-full h-full rounded-full  pr-2.5 py-0.5'>
                        <div className='w-full h-full'>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='text-sm text-[#959595] placeholder:text-[#959595] w-full px-7 py-3.5 h-full outline-0' type="email" placeholder='Enter you email' />
                        </div>
                        <div className='flex bg-[#508D69] justify-center items-center gap-1.5 py-1.5 px-5 rounded-full text-white'>
                            <div onClick={() => {
                                // console.log(email);
                                setEmail('');
                                customTrack("Resources Stay in Loop clicked", { email: email })
                            }} className='text-sm cursor-pointer'>Submit</div>
                            <div>
                                <img className='w-9 h-7 object-contain shrink-0' src={SubmitIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={BottomBanner} alt="" loading='lazy' />
            </div>
        </div>
    )
}

export default Banner
