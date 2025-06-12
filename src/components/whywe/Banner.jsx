import BottomBanner from '../../assets/whywe/banner/banner.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';
import RightArrow from '../../assets/rightArrow.svg';

const Banner = () => {
    return (
        <div className='px-20 max-sm:px-4 pt-24'>
            <div
                className="relative w-full h-[400px] sm:h-[500px] lg:h-[627px] bg-cover bg-center mt-2 rounded-xl"
                style={{ backgroundImage: `url(${BottomBanner})` }}
            >
                <div className="absolute bottom-8 sm:bottom-12 lg:bottom-14 left-4 sm:left-10 lg:left-14 bg-[#ffffff] rounded-3xl text-[#218448] px-5 sm:px-7 lg:pl-7 lg:pr-28 py-6 flex flex-col gap-6 w-[90%] sm:w-[80%] max-sm:w-[73%] md:w-fit opacity-90">
                    <div className="text-lg sm:text-xl lg:text-2xl max-sm:text-xs font-medium leading-snug opacity-90">
                        Start Free Today – No Risk, Just Results
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg max-sm:text-[8px] font-normal leading-snug">
                        Join thousands of contractors transforming how they  <br className="hidden sm:block" /> estimate. Get your first site mapped on us.
                    </div>
                    <div className='flex flex-row gap-4 text-sm max-sm:text-[8px] font-medium'>
                        <button
                            onClick={() => {
                                customTrack("Why we bottom banner Button Clicked", { buttonName: 'Try for free' })
                                window.open("https://app.ottermap.com/signup")
                            }}
                            className="text-white cursor-pointer bg-[#218448] border-2 rounded-full px-7 py-3 max-sm:py-1 max-sm:px-3 flex items-center justify-center gap-2 text-nowrap hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                            Try for free
                            <img src={RightArrow} alt="" />
                        </button>
                        <button
                            onClick={() => {
                                customTrack("Why we bottom banner Button Clicked", { buttonName: 'Book a demo' })
                                window.open("https://calendly.com/amit-ottermap/30min")
                            }}
                            className="text-black cursor-pointer border-2 border-[#218448] rounded-full px-7 py-3 max-sm:py-1 max-sm:px-3 text-nowrap hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                            Book a demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
