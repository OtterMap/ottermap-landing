import React from 'react'
import Feature1 from '../../assets/landing/features/feature1.svg';
import Feature2 from '../../assets/landing/features/feature2.svg';
import Feature3 from '../../assets/landing/features/feature3.svg';
import Feature4 from '../../assets/landing/features/feature4.svg';
import Feature5 from '../../assets/landing/features/feature5.svg';
import Feature6 from '../../assets/landing/features/feature6.svg';
import Feature1a from '../../assets/landing/features/feature1-1.svg';
import Feature1b from '../../assets/landing/features/feature1-2.svg';
import Feature1c from '../../assets/landing/features/feature1-3.svg';
import Feature1d from '../../assets/landing/features/feature1-4.svg';
import Feature2a from '../../assets/landing/features/feature2-1.svg';
import Feature2b from '../../assets/landing/features/feature2-2.svg';
import Feature2c from '../../assets/landing/features/feature2-3.svg';
import Feature3a from '../../assets/landing/features/feature3-1.svg';
import Feature3b from '../../assets/landing/features/feature3-2.svg';
import Feature3c from '../../assets/landing/features/feature3-3.svg';
import Feature3d from '../../assets/landing/features/feature3-4.svg';
import Feature4a from '../../assets/landing/features/feature4-1.svg';
import Feature4b from '../../assets/landing/features/feature4-2.svg';
import Feature4c from '../../assets/landing/features/feature4-3.svg';
import Feature5a from '../../assets/landing/features/feature5-1.svg';
import Feature5b from '../../assets/landing/features/feature5-2.svg';
import Feature5c from '../../assets/landing/features/feature5-3.svg';
import Feature6a from '../../assets/landing/features/feature6-1.svg';
import Feature6b from '../../assets/landing/features/feature6-2.svg';
import Feature6c from '../../assets/landing/features/feature6-3.svg';
import Feature6d from '../../assets/landing/features/feature6-4.svg';
import RightArrow from '../../assets/rightArrow.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const Features = () => {
    const features = [
        {
            image: Feature1,
            heading: 'On Demand automated takeoffs',
            points: [
                {
                    icon: Feature1a,
                    text: 'High-resolution aerial & satellite images of different times.'
                },
                {
                    icon: Feature1b,
                    text: 'Auto-generated parcel from addresses or pin drops',
                },
                {
                    icon: Feature1c,
                    text: 'Layered takeoffs: lawns, beds, snow zones, hardscapes, etc.',
                },
                {
                    icon: Feature1d,
                    text: 'Automated property mapping',
                }
            ]
        },
        {
            image: Feature2,
            heading: 'Portfolio & site management',
            points: [
                {
                    icon: Feature2a,
                    text: 'Multi-site dashboard to manage 5 to 5,000 properties',
                },
                {
                    icon: Feature2b,
                    text: 'Tagging & filtering by site type, region, or client.',
                },
                {
                    icon: Feature2c,
                    text: 'Map version history & change tracking',
                },
            ]
        },
        {
            image: Feature3,
            heading: 'Mapping & Measurement Tools',
            points: [
                {
                    icon: Feature3a,
                    text: 'Smart measuring tools: area, line, and count',
                },
                {
                    icon: Feature3b,
                    text: 'Easy-to-use editing: Draw zones, adjust shapes, customize boundaries',
                },
                {
                    icon: Feature3c,
                    text: 'Notes and labels directly on maps',
                },
                {
                    icon: Feature3d,
                    text: 'Edit maps as per your scope and use case',
                },
            ]
        },
        {
            image: Feature4,
            heading: 'White-label & branding',
            points: [
                {
                    icon: Feature4a,
                    text: 'Add your company logo to all exported maps',
                },
                {
                    icon: Feature4b,
                    text: 'Custom color schemes for service zones',
                },
                {
                    icon: Feature4c,
                    text: 'Present a fully branded, professional experience to clients.',
                },
            ]
        },
        {
            image: Feature5,
            heading: 'Mobile & field access',
            points: [
                {
                    icon: Feature5a,
                    text: 'Mobile-friendly interface for on-site use.',
                },
                {
                    icon: Feature5b,
                    text: 'GPS pin drop for accurate service area creation',
                },
                {
                    icon: Feature5c,
                    text: 'Work seamlessly across desktop & mobile',
                },
            ]
        },
        {
            image: Feature6,
            heading: 'Team collaboration & permission',
            points: [
                {
                    icon: Feature6a,
                    text: 'Multi-user access with role-based permissions',
                },
                {
                    icon: Feature6b,
                    text: 'Share maps with internal teams or external partners',
                },
                {
                    icon: Feature6c,
                    text: 'Commenting & notes to streamline communication',
                },
                {
                    icon: Feature6d,
                    text: 'On-demand integration with CRMs',
                },
            ]
        },
    ]
    return (
        <div id='features' className="px-4 sm:px-6 md:px-10 lg:px-20">
            <div className="text-3xl sm:text-4xl max-sm:text-xl font-bold mb-4 text-center max-sm:px-5">
                Everything You Need to Map, Measure, and Win More Work
            </div>

            <div className="text-lg sm:text-xl max-sm:text-xs text-center pt-6 px-3">
                From quick takeoffs to full-scale mapping, Ottermap streamlines estimating with fast, accurate, and flexible tools—helping your team estimate smarter and win more.
            </div>


            <div className='pt-20 max-sm:pt-0 max-sm:px-2'>
                {features.map((feature, index) => {
                    const isImageRight = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} justify-evenly gap-10 items-start py-12 max-sm:py-9`}
                        >
                            <div className={`flex flex-col justify-center items-start gap-6 xl:w-[40%]`}>
                                <div className='flex flex-col gap-6 justify-start items-start'>

                                    <h3 className="text-3xl max-sm:text-sm font-bold">{feature.heading}</h3>
                                    <div className="flex flex-col gap-4 text-lg max-sm:text-xs">
                                        {feature.points.map((point, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <img src={point.icon} alt="" className="w-6 h-6" />
                                                <span>{point.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex gap-4 justify-center items-center font-medium'>
                                        <button
                                            onClick={() => {
                                                customTrack("Landing Features Button Clicked", { buttonName: "Try for Free", featureName: feature.heading })
                                                window.open("https://app.ottermap.com/signup")
                                            }}
                                            className="bg-[#218448] cursor-pointer rounded-full text-white px-5 py-3 max-sm:py-2 text-sm flex items-center gap-2 mt-4 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                                            Try for Free <img src={RightArrow} alt="right arrow" />
                                        </button>
                                        <button
                                            onClick={() => {
                                                customTrack("Landing Features Button Clicked", { buttonName: "Book a Demo" })
                                                window.open("https://calendly.com/amit-ottermap/30min")
                                            }}
                                            className="border-2 cursor-pointer border-[#218448] rounded-full text-black px-5 py-3 max-sm:py-2 text-sm flex items-center gap-2 mt-4 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                                            Book a Demo
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="xl:w-[45%] px-4 sm:px-6 max-sm:px-0">
                                <img src={feature.image} alt={feature.heading} className="xl:w-[90%] h-auto object-contain" loading='lazy' />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    )
}

export default Features
