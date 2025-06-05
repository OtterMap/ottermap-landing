import RightArrow from '../../../assets/rightArrow.svg'
import Icon1 from '../../../assets/industries/facilitiesServices/solutions/icon1.svg';
import Icon2 from '../../../assets/industries/facilitiesServices/solutions/icon2.svg';
import Icon3 from '../../../assets/industries/facilitiesServices/solutions/icon3.svg';
import Icon4 from '../../../assets/industries/facilitiesServices/solutions/icon4.svg';
import Icon5 from '../../../assets/industries/facilitiesServices/solutions/icon5.svg';
import Icon6 from '../../../assets/industries/facilitiesServices/solutions/icon6.svg';
import { customTrack } from '../../../utils/mixpanel/customTrack';
import Image from '../../../assets/industries/facilitiesServices/solutions/image.svg';

const Solutions = () => {
    return (
        <div className="pt-5 pb-24 px-4 sm:px-8 lg:px-20">
            <div className="flex flex-col items-center max-w-screen-xl mx-auto">
                <h2 className="text-3xl sm:text-4xl max-sm:text-xl font-bold text-center pb-6">
                    How OtterMaps Helps Facility Service Providers
                </h2>
                {/* <p className="text-base sm:text-lg font-normal text-center max-w-4xl pb-8">
                    OtterMaps delivers layered takeoffs for turf, beds, mulch zones, hardscapes, and more.
                    From one property to hundreds, create accurate, visually compelling site maps in minutes not hours.
                </p> */}

                <div className="flex flex-row flex-wrap justify-center gap-4 text-sm max-sm:text-xs font-medium pb-20">
                    <button
                        onClick={() => {
                            customTrack("Landscaping Solution Button Clicked", { buttonName: 'Try for free' })
                            window.open("https://app.ottermap.com/signup")
                        }}
                        className="text-white cursor-pointer bg-[#218448] border-2 rounded-full px-6 py-3 max-sm:py-2 max-sm:px-4 flex items-center justify-center gap-2">
                        Try for free
                        <img src={RightArrow} alt="" />
                    </button>
                    <button
                        onClick={() => {
                            customTrack("Landscaping Solution Button Clicked", { buttonName: 'Book a demo' })
                            window.open("https://calendly.com/amit-ottermap/30min")
                        }}
                        className="text-black cursor-pointer border-2 border-[#218448] rounded-full px-7 py-3 max-sm:py-2 max-sm:px-4">
                        Book a demo
                    </button>
                </div>

                <div className="w-full rounded-2xl bg-[#D7F4E499] mb-12">
                    <img src={Image} alt="" loading='lazy' />
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full">
                    {[
                        {
                            icon: Icon1,
                            title: 'Submit Property Takeoffs in Minutes',
                            desc: 'Map out all relevant facility zones: mowing areas, snow removal paths, tree care sections, walkways, and service pads.',
                        },
                        {
                            icon: Icon2,
                            title: 'Multi-Site Dashboard & Tags',
                            desc: 'Sort and organize by region, service type, client group, or contract phase.',
                        },
                        {
                            icon: Icon3,
                            title: 'Team Collaboration Tools',
                            desc: 'Assign sites to team members, share notes, and track project status across your organization.',
                        },
                        {
                            icon: Icon4,
                            title: 'Exportable Scope Visuals',
                            desc: 'Send branded PDFs with high-resolution service maps—ready for procurement teams.',
                        },
                        {
                            icon: Icon5,
                            title: 'Contract Management Integration',
                            desc: 'Link maps to contract terms, seasonal schedules, and service level agreements.',
                        },
                        {
                            icon: Icon6,
                            title: 'On-Site Access via Mobile',
                            desc: 'Use GPS pin drop, draw edits in the field, and sync updates instantly.',
                        }
                    ].map(({ title, desc, icon }, i) => (
                        <div key={i} className="flex flex-col gap-5 items-start py-8 px-6 border-[0.5px] border-[#218448] rounded-lg">
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
