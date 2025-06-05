import Banner from '../../assets/aboutus/hero/banner.svg';
import Mission from '../../assets/aboutus/hero/mission.svg';
import RightArrow from '../../assets/rightArrow.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';
const Hero = () => {
    return (
        <div className='px-20 max-sm:px-6 pb-24'>
            <div
                className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] bg-cover bg-center mt-2 rounded-3xl pb-1"
                style={{ backgroundImage: `url(${Banner})` }}
            >
                <div className="absolute top-25 max-sm:top-14  left-4 sm:left-10 lg:left-20 rounded-3xl text-white lg:pr-28 py-6 flex flex-col gap-5 w-[90%] sm:w-[80%] md:w-[60%] xl:w-[60%] 2xl:w-[50%]">
                    <div className="text-lg sm:text-2xl lg:text-4xl max-sm:text-base font-semibold leading-snug">
                        Ottermap: The Estimation Engine for Outdoor & Facility Services
                    </div>
                    <div className="text-sm sm:text-lg lg:text-xl max-sm:text-xs font-normal leading-snug max-w-lg">
                        From the first pixel to the final proposal Ottermap helps your team work smarter, quote faster, and scale seamlessly.
                    </div>
                    <div className='flex gap-4 justify-start items-center'>
                        <button
                            onClick={() => {
                                customTrack("About us hero Button Clicked", { buttonName: 'Try for free' })
                                window.open("https://app.ottermap.com/signup")
                            }}
                            className="bg-[#218448] cursor-pointer rounded-full text-white px-7 py-3 max-sm:py-1.5 text-sm max-sm:text-[10px] flex items-center gap-2 mt-4">
                            Try for Free <img src={RightArrow} alt="right arrow" />
                        </button>
                        <button
                            onClick={() => {
                                customTrack("About us hero Button Clicked", { buttonName: 'Book a demo' })
                                window.open("https://calendly.com/amit-ottermap/30min")
                            }}
                            className="border-2 cursor-pointer border-[#218448] bg-white rounded-full text-black px-7 py-3 max-sm:py-1.5 text-sm max-sm:text-[10px] flex items-center gap-2 mt-4">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>
            <div className='pt-20 pb-24'>
                <div className='text-4xl max-sm:text-xl font-semibold pb-6'>Who are we</div>
                <div className='text-xl max-sm:text-xs font-normal'>Ottermap is a team of field tech innovators, property service veterans, and data scientists who saw how slow, manual, and error-prone the industry’s estimation process still was. We’ve built a platform that replaces pen-and-paper, spreadsheets, and outdated GIS tools with smart, scalable automation.
                </div>
            </div>
            <div className='flex justify-between items-center max-lg:flex-col gap-10 max-lg:gap-10'>
                <div className='flex flex-col lg:w-[50%]'>
                    <div className='text-4xl max-sm:text-xl font-bold pb-6'>Mission</div>
                    <div className='text-2xl max-sm:text-xs font-normal'>To empower every snow, landscape, and paving team with the tools to win bigger contracts, increase proposal accuracy, and deliver at scale—without scaling headcount or hours worked.</div>
                </div>
                <div className='xl:w-[40%] h-[504px] max-sm:h-[310px]'>
                    <img className='h-full object-contain' src={Mission} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Hero
