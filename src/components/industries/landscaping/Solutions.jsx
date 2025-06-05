import RightArrow from '../../../assets/rightArrow.svg'
import Icon1 from '../../../assets/industries/landscaping/solutions/icon1.svg';
import Icon2 from '../../../assets/industries/landscaping/solutions/icon2.svg';
import Icon3 from '../../../assets/industries/landscaping/solutions/icon3.svg';
import Icon4 from '../../../assets/industries/landscaping/solutions/icon4.svg';
import Icon5 from '../../../assets/industries/landscaping/solutions/icon5.svg';
import Icon6 from '../../../assets/industries/landscaping/solutions/icon6.svg';
import { customTrack } from '../../../utils/mixpanel/customTrack';
import Image from '../../../assets/industries/landscaping/solutions/image.svg';

const Solutions = () => {
    return (
        <div className="pt-5 pb-24 px-4 sm:px-8 lg:px-20">
            <div className="flex flex-col items-center max-w-screen-xl mx-auto">
                <h2 className="text-3xl sm:text-4xl max-sm:text-xl font-bold text-center pb-6">
                    How OtterMaps Solves It
                </h2>
                <p className="text-base sm:text-lg max-sm:text-xs font-normal text-center max-w-4xl pb-8">
                    OtterMaps delivers layered takeoffs for turf, beds, mulch zones, hardscapes, and more.
                    From one property to hundreds, create accurate, visually compelling site maps in minutes not hours.
                </p>

                <div className="flex flex-row flex-wrap justify-center gap-4 text-sm max-sm:text-xs font-medium pb-12">
                    <button
                        onClick={() => {
                            customTrack("Landscaping solutions Button Clicked", { buttonName: 'Try for free' })
                            window.open("https://app.ottermap.com/signup")
                        }}
                        className="text-white cursor-pointer bg-[#218448] border-2 rounded-full px-6 py-3 max-sm:py-2 max-sm:px-4 flex items-center justify-center gap-2">
                        Try for free
                        <img src={RightArrow} alt="" />
                    </button>
                    <button
                        onClick={() => {
                            customTrack("Landscaping solutions Button Clicked", { buttonName: 'Book a demo' })
                            window.open("https://calendly.com/amit-ottermap/30min")
                        }}
                        className="text-black cursor-pointer border-2 border-[#218448] rounded-full px-7 py-3 max-sm:py-2 max-sm:px-4">
                        Book a demo
                    </button>
                </div>

                <div className="w-full rounded-2xl bg-[#D7F4E499] mb-12" >
                    <img src={Image} alt="" loading='lazy' />
                </div>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full">
                    {[
                        {
                            icon: Icon1,
                            title: 'Automated Lawn & Bed Takeoffs',
                            desc: 'Generate site maps for turf, mulch, flowerbeds, and hardscapes with automated drawing and zone detection.',
                        },
                        {
                            icon: Icon2,
                            title: 'Property Perimeter & Access Planning',
                            desc: 'Quickly assess site boundaries, entry points, and equipment access routes for efficient landscaping operations." in place of irrigation under landscaping page',
                        },
                        {
                            icon: Icon3,
                            title: 'Portfolio Management Dashboard',
                            desc: 'Filter and tag landscaping properties by region, client, or contract status.',
                        },
                        {
                            icon: Icon4,
                            title: 'Map Editing Tools Built for Estimators',
                            desc: 'Draw or adjust shapes, label key features, and mark irrigation lines or tree zones.',
                        },
                        {
                            icon: Icon5,
                            title: 'Mobile-Friendly for Field Teams',
                            desc: 'Edit or create maps on-site using a GPS-enabled mobile interface.',
                        },
                        {
                            icon: Icon6,
                            title: 'Visual, Branded Proposals',
                            desc: 'Send PDF proposals with clear overlays and company branding.',
                        }
                    ].map(({ title, desc, icon }, i) => (
                        <div key={i} className="flex gap-5 items-start">
                            <img className="w-6 h-6 object-contain shrink-0" src={icon} alt="" />
                            <div className="flex flex-col gap-2">
                                <div className="text-lg max-sm:text-base font-bold">{title}</div>
                                <div className="text-base max-sm:text-xs font-normal">{desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Solutions;
