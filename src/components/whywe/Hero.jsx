import Banner from '../../assets/whywe/hero/banner.svg';
import RightArrow from '../../assets/rightArrow.svg';
import Icon1 from '../../assets/whywe/hero/successMetrics/icon1.svg';
import Icon2 from '../../assets/whywe/hero/successMetrics/icon2.svg';
import Icon3 from '../../assets/whywe/hero/successMetrics/icon3.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const Hero = () => {
    return (
        <div id='success-metrics' className='px-20 max-sm:px-4 pb-24'>
            <div
                className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] bg-cover bg-center mt-2 rounded-3xl pb-1"
                style={{ backgroundImage: `url(${Banner})` }}
            >
                <div className="absolute top-25 max-sm:top-14 sm:bottom-12 lg:bottom-14 left-4 sm:left-10 lg:left-20 max-sm:left-5 rounded-3xl text-white lg:pr-28 py-6 flex flex-col gap-5 w-[90%] sm:w-[80%] md:w-[50%]">
                    <div className="text-lg sm:text-2xl lg:text-4xl font-semibold leading-snug">
                        Why America’s Leading Outdoor Service Teams Trust Ottermap
                    </div>
                    <div className="text-sm sm:text-lg lg:text-xl font-normal leading-snug max-w-lg">
                        Powering fast, accurate, and scalable estimates for top outdoor service teams across the U.S.
                    </div>
                    <div className='flex gap-4 justify-start items-center'>
                        <button
                            onClick={() => {
                                customTrack("Why we hero Button Clicked", { buttonName: 'Try for free' })
                                window.open("https://app.ottermap.com/signup")
                            }}
                            className="bg-[#218448] cursor-pointer rounded-full text-white px-7 py-3 max-sm:py-2 max-sm:px-5 text-sm max-sm:text-xs flex items-center gap-2 mt-4 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                            Try for Free <img src={RightArrow} alt="right arrow" />
                        </button>
                        <button
                            onClick={() => {
                                customTrack("Why we hero Button Clicked", { buttonName: 'Book a demo' })
                                window.open("https://calendly.com/amit-ottermap/30min")
                            }}
                            className=" bg-white cursor-pointer rounded-full text-black px-7 py-3 max-sm:py-2 max-sm:px-5 text-sm flex items-center gap-2 mt-4 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>
            <div className='pt-20'>
                <div className='text-4xl max-sm:text-xl font-bold pb-6'>
                    Our success metrics
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                    {[
                        {
                            icon: Icon1,
                            title: '10,000+ sites mapped',
                        },
                        {
                            icon: Icon2,
                            title: 'Trusted by leading service contractors in the USA',
                        },
                        {
                            icon: Icon3,
                            title: '98% tatkoff accuracy rate',
                        }
                    ].map(({ title, icon }, i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-8 items-center py-5 pl-5 sm:pl-5 pr-3 border-[1.5px] border-[#EFEFEF] rounded-xl bg-white"
                        >
                            <img className="w-13 h-13 object-contain shrink-0" src={icon} alt="" />
                            <div className="flex flex-col justify-center gap-3 max-w-xs">
                                <h3 className="text-lg max-sm:text-base sm:text-xl text-center font-medium">{title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero
