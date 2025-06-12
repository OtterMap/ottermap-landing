import RightArrow from '../../assets/rightArrow.svg';
import BottomBanner from '../../assets/aboutus/bottomBanner/bottomBanner.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';
const BannerSection = () => {
    return (
        <div className='px-20 max-sm:px-4'>

            <div
                className="relative  h-[400px] sm:h-[500px] lg:h-[550px] bg-cover bg-center mt-20 mb-4 rounded-xl"
                style={{ backgroundImage: `url(${BottomBanner})` }}
            >
                <div className="absolute bottom-8 sm:bottom-12 lg:bottom-14 left-4 sm:left-10 lg:left-20 bg-[#fafafa] rounded-3xl text-[#218448] px-5 sm:px-7 lg:pl-7 lg:pr-16 py-6 flex flex-col gap-4 w-[90%] sm:w-[80%] md:w-[40%] opacity-90">
                    <div className="text-3xl sm:text-xl lg:text-2xl max-sm:text-[10px] font-bold leading-snug">
                        Trusted by Pros. Built for Speed. Priced for Value.
                    </div>
                    <div className="text-2xl sm:text-lg lg:text-xl max-sm:text-[8px] font-normal leading-snug">
                        OtterMap helps landscapers win more bids faster, easier, and without breaking the budget.
                    </div>
                    <div className='flex flex-row flex-wrap gap-4 text-sm max-sm:text-[8px] font-medium'>
                        <button
                            onClick={() => {
                                customTrack("About us bottom banner Button Clicked", { buttonName: 'Try for free' })
                                window.open("https://app.ottermap.com/signup")
                            }}
                            className="text-white cursor-pointer bg-[#218448] border-2 rounded-full px-6 py-3 max-sm:py-0.5 max-sm:px-3 flex items-center justify-center gap-2 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                            Try for free
                            <img src={RightArrow} alt="" />
                        </button>
                        <button
                            onClick={() => {
                                customTrack("About us bottom banner Button Clicked", { buttonName: 'Book a demo' })
                                window.open("https://calendly.com/amit-ottermap/30min")
                            }}
                            className="text-black cursor-pointer border-2 border-[#218448] rounded-full px-6 py-3 max-sm:py-0.5 max-sm:px-3 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                            Book a demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
