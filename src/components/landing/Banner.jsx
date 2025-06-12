import BottomBanner from '../../assets/landing/bottomBanner/bottomBanner.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';
import RightArrow from '../../assets/rightArrow.svg';

const Banner = () => {
    return (
        <div className='px-20 max-sm:px-1'>
            <div
                className="relative w-full h-[400px] sm:h-[500px] lg:h-[627px] bg-cover bg-center mt-2 rounded-xl"
                style={{ backgroundImage: `url(${BottomBanner})` }}
            >
                <div className="absolute bottom-8 sm:bottom-12 lg:bottom-14 max-sm:bottom-4 left-4 sm:left-10 lg:left-14 bg-[#5F615E] rounded-3xl text-[#E1FFD7] px-5 sm:px-7 lg:pl-7 lg:pr-28 py-6 flex flex-col gap-6 max-sm:gap-3 w-[90%] sm:w-[80%] md:w-fit">
                    <div className="text-lg sm:text-xl lg:text-2xl max-sm:text-xs font-medium leading-snug">
                        Your Team’s New Secret Weapon for Winning  <br className="hidden sm:block" /> Location Bids
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg max-sm:text-xs font-normal leading-snug">
                        The Industry-Trusted Solution Empowering Professionals to Bid  <br className="hidden sm:block" /> Smarter, Faster, and with Confidence
                    </div>
                    <div className='flex gap-4 justify-start items-center'>
                        <button
                            onClick={() => {
                                customTrack("Bottom banner cta Clicked", { buttonName: "Try for Free" })
                                window.open("https://app.ottermap.com/signup")
                            }}
                            className="bg-[#218448] cursor-pointer rounded-full max-sm:text-[10px] text-sm text-white px-7 py-3 max-sm:py-1 max-sm:px-4 flex items-center gap-2 mt-4 text-nowrap hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                            Try for Free <img src={RightArrow} alt="right arrow" />
                        </button>
                        <button
                            onClick={() => {
                                customTrack("Bottom banner cta Clicked", { buttonName: "Book a Demo" })
                                window.open("https://calendly.com/amit-ottermap/30min")
                            }}
                            className="border-2 cursor-pointer border-[#ffffff] rounded-full max-sm:text-[10px] text-sm text-white px-7 py-3 max-sm:py-1.5 max-sm:px-4 flex items-center gap-2 mt-4 text-nowrap hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
