import Image from '../../assets/resources/learn/image.svg';
import Icon1 from '../../assets/resources/learn/gettingStarted/icon1.svg';
import Icon2 from '../../assets/resources/learn/gettingStarted/icon2.svg';
import Icon3 from '../../assets/resources/learn/gettingStarted/icon3.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const Learn = () => {
    return (
        <div className="pt-1 px-5 md:px-20 pb-24">
            <div className="flex gap-6 max-sm:gap-4 flex-col pb-10 md:pb-20">
                <div className="text-3xl md:text-4xl max-sm:text-xl font-bold">Learn & Master</div>
                <div className="text-base md:text-xl max-sm:text-xs font-normal">
                    Your step-by-step guide to navigating every module of Ottermap with ease. Ottermap is
                    designed with simplicity and purpose. Whether you're a first-time user or an experienced
                    explorer, our detailed module manuals will help you get the most out of every feature.
                </div>
            </div>

            <div className="border border-[#EFEFEF] rounded-xl px-5 py-5 md:px-7 flex max-lg:flex-col justify-between items-start md:items-center gap-6 mb-24">

                <div className="flex flex-col max-w-full md:max-w-xl">
                    <div className="flex flex-col gap-6 md:gap-10">
                        <div className="text-xl md:text-2xl max-sm:text-sm font-bold">Map Explorer Module</div>
                        <div className="text-base md:text-xl max-sm:text-sm font-normal">
                            The core of Ottermap — explore geospatial data, smart layers, and contextual insights.
                        </div>

                        <div className="text-base md:text-lg max-sm:text-xs font-normal">
                            <div>What You'll Learn:</div>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Navigating the interactive map</li>
                                <li>Using filters and layers (e.g., terrain, hotspots, sentiment overlays)</li>
                                <li>Bookmarking and saving locations</li>
                                <li>Accessing detailed place data</li>
                                <li>Measuring distances and travel time</li>
                            </ul>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            customTrack("Resources Learn section Button Clicked", { buttonName: "Learn more on this" })
                        }}
                        className="mt-6 bg-[#218448] text-sm max-sm:text-[10px] font-medium px-4 py-2.5 w-fit text-white rounded-full cursor-pointer">
                        Learn more
                    </button>
                </div>


                <div className="w-full md:w-auto flex justify-center">
                    <img src={Image} alt="Map Explorer" className="w-full max-w-full md:max-w-sm lg:max-w-md"  loading='lazy'/>
                </div>
            </div>
            <div className='pt-1'>
                <div className='text-4xl max-sm:text-xl font-bold flex justify-start pb-10 max-sm:pb-5'>
                    The manual for the Core Product
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
                    {[
                        {
                            icon: Icon1,
                            title: 'Creating Your First Map',
                            desc: 'A step-by-step guide to creating your first interactive map.',
                        },
                        {
                            icon: Icon2,
                            title: 'Understanding Map Layers',
                            desc: 'Learn about managing and customizing map layers.',
                        },
                        {
                            icon: Icon3,
                            title: 'Adding markers & Annotations',
                            desc: 'How to add customize markers and annotations on your map.',
                        },
                    ].map(({ title, desc, icon }, i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-5 items-start py-10 px-6 sm:px-8 border border-[#DBE0E5] rounded-xl bg-white"
                        >
                            <img className="w-6 h-6 object-contain shrink-0 mt-1" src={icon} alt="" />
                            <div className="flex flex-col gap-2">
                                <h3 className="text-base max-sm:text-sm font-bold text-[#121417]">{title}</h3>
                                <p className="text-sm max-sm:text-xs font-normal text-[#61758A] max-w-xs">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Learn;
