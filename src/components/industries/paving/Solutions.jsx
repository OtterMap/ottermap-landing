import RightArrow from '../../../assets/rightArrow.svg'
import Icon1 from '../../../assets/industries/paving/solutions/icon1.svg';
import Icon2 from '../../../assets/industries/paving/solutions/icon2.svg';
import Icon3 from '../../../assets/industries/paving/solutions/icon3.svg';
import Icon4 from '../../../assets/industries/paving/solutions/icon4.svg';
import Icon5 from '../../../assets/industries/paving/solutions/icon5.svg';
import Icon6 from '../../../assets/industries/paving/solutions/icon6.svg';
import { customTrack } from '../../../utils/mixpanel/customTrack';
import Image from '../../../assets/industries/paving/solutions/image.svg';
const Solutions = () => {
    return (
        <div className="pt-5 pb-28 px-4 sm:px-8 lg:px-20">
            <div className="flex flex-col items-center max-w-screen-xl mx-auto">
                <h2 className="text-3xl sm:text-4xl max-sm:text-xl font-bold text-center pb-6">
                    Precise calculations save money
                </h2>

                <div className="flex flex-row flex-wrap justify-center gap-4 text-sm max-sm:text-xs font-medium pb-12">
                    <button
                        onClick={() => {
                            customTrack("Paving solutions Button Clicked", { buttonName: 'Try for free' })
                            window.open("https://app.ottermap.com/signup")
                        }}
                        className="text-white cursor-pointer bg-[#218448] border-2 rounded-full px-6 py-3 max-sm:py-2 max-sm:px-4 flex items-center justify-center gap-2">
                        Try for free
                        <img src={RightArrow} alt="" />
                    </button>
                    <button
                        onClick={() => {
                            customTrack("Paving solutions Button Clicked", { buttonName: 'Book a demo' })
                            window.open("https://calendly.com/amit-ottermap/30min")
                        }} className="text-black cursor-pointer border-2 border-[#218448] rounded-full px-7 py-3 max-sm:py-2 max-sm:px-4">

                        Book a demo
                    </button>
                </div>

                <div className="w-full rounded-2xl bg-[#D7F4E499] mb-12">
                    <img src={Image} alt="" loading='lazy' />
                </div>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full">
                    {[
                        {
                            icon: Icon1,
                            title: 'Automated Asphalt Area Takeoffs',
                            desc: 'Quickly calculate square footage for paved surfaces—drive lanes, parking lots, and sidewalks.',
                        },
                        {
                            icon: Icon2,
                            title: 'Accessibility Area Mapping',
                            desc: 'Easily identify and measure ramps, sidewalks, and access zones for complete, professional paving estimates.',
                        },
                        {
                            icon: Icon3,
                            title: 'Material Planning & Zone Estimates',
                            desc: 'Identify zones for sealcoating, striping, patching, and overlay work.',
                        },
                        {
                            icon: Icon4,
                            title: 'Portfolio Tagging & Filters',
                            desc: 'Manage paving bids for franchises, schools, and municipalities all in one place.',
                        },
                        {
                            icon: Icon5,
                            title: 'Field-Ready Edits & Mobile Access',
                            desc: 'Mark zones, annotate edges, and adjust scope live on mobile or tablet.',
                        },
                        {
                            icon: Icon6,
                            title: 'Branded Proposal Exports',
                            desc: 'Download professional PDFs with paving zone layers and your company logo.',
                        }
                    ].map(({ title, desc, icon }, i) => (
                        <div key={i} className="flex gap-5 items-start">
                            <img className="w-6 h-6 object-contain shrink-0" src={icon} alt="" />
                            <div className="flex flex-col gap-2">
                                <div className="text-lg max-sm:text-base font-bold">{title}</div>
                                <div className="text-base max-sm:text-sm font-normal">{desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Solutions;