import RightArrow from '../../../assets/rightArrow.svg';
import Icon1 from '../../../assets/industries/facilitiesServices/workflows/icon1.svg';
import Icon2 from '../../../assets/industries/facilitiesServices/workflows/icon2.svg';
import Icon3 from '../../../assets/industries/facilitiesServices/workflows/icon3.svg';
import Icon4 from '../../../assets/industries/facilitiesServices/workflows/icon4.svg';
import { customTrack } from '../../../utils/mixpanel/customTrack';

const Workflow = () => {
    return (
        <div className='pb-20 pt-1 px-4 sm:px-8 md:px-16 lg:px-20'>
            {/* Top Section */}
            <div className='flex flex-col lg:flex-row items-start justify-center gap-10 max-sm:gap-5 lg:gap-28 text-start pb-20'>
                {/* Title */}
                <div className='text-2xl sm:text-3xl md:text-4xl max-sm:text-xl font-bold max-w-md'>
                    OtterMaps Streamlines Your Workflow
                </div>

                {/* Description + CTA */}
                <div className='flex flex-col gap-4 max-w-2xl'>
                    <p className='text-base sm:text-lg md:text-xl max-sm:text-xs font-normal'>
                        Instantly generate layered maps with property boundaries, lawn areas, snow zones, drive lanes, tree lines, sidewalks, and more. Share, export, and estimate in one place.
                    </p>
                    <div className='flex flex-row flex-wrap gap-4 text-sm max-sm:text-xs font-medium pt-2'>
                        <button
                            onClick={() => {
                                customTrack("Landscaping Workflow Button Clicked", { buttonName: 'Try for free' })
                                window.open("https://app.ottermap.com/signup")
                            }}
                            className="text-white cursor-pointer bg-[#218448] border-2 rounded-full px-6 py-3 max-sm:py-2 max-sm:px-4 flex items-center justify-center gap-2">
                            Try for free
                            <img src={RightArrow} alt="" />
                        </button>
                        <button
                            onClick={() => {
                                customTrack("Landscaping Workflow Button Clicked", { buttonName: 'Book a demo' })
                                window.open("https://calendly.com/amit-ottermap/30min")
                            }}
                            className="text-black cursor-pointer border-2 border-[#218448] rounded-full px-6 py-3 max-sm:py-2 max-sm:px-4">
                            Book a demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {[
                    {
                        icon: Icon1,
                        title: '90% Time Saved',
                        desc: 'on Estimation & Site Walks',
                    },
                    {
                        icon: Icon2,
                        title: 'Centralized Management',
                        desc: 'of 10 to 10,000 Sites',
                    },
                    {
                        icon: Icon3,
                        title: '98%+ Measurement Accuracy',
                        desc: '= Confident Pricing',
                    },
                    {
                        icon: Icon4,
                        title: '50% Faster RFP Response',
                        desc: 'Beat competitors to procurement',
                    },
                ].map(({ title, desc, icon }, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-5 items-start py-10 max-sm:py-6 px-6 sm:px-8 border-2 border-[#EFEFEF] rounded-xl bg-white"
                    >
                        <img className="w-6 h-6 object-contain shrink-0 mt-1" src={icon} alt="" />
                        <div className="flex flex-col gap-2">
                            <h3 className="text-base sm:text-lg max-sm:text-base font-bold">{title}</h3>
                            <p className="text-sm sm:text-base max-sm:text-xs font-normal">{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Workflow;
