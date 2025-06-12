import RightArrow from '../../assets/rightArrow.svg';
import Icon1 from '../../assets/aboutus/why/icon1.svg';
import Icon2 from '../../assets/aboutus/why/icon2.svg';
import Icon3 from '../../assets/aboutus/why/icon3.svg';
import Icon4 from '../../assets/aboutus/why/icon4.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const Why = () => {
    return (
        <div className='pb-14 mt-1 border-[1.5px] border-[#EFEFEF] rounded-xl pt-14 mx-20 max-lg:mx-5 sm:px-8 md:px-14 lg:px-14 max-sm:px-4 max-sm:pt-9 mb-24'>

            <div className='flex flex-col lg:flex-row items-start justify-evenly gap-10 lg:gap-28 text-start pb-20'>

                <div className='flex flex-col gap-6 w-[35%] max-sm:w-[75%]'>

                    <div className='text-2xl sm:text-3xl md:text-4xl max-sm:text-xl font-bold'>
                        Why Otter? Because We Work Like You Do
                    </div>
                    <div className='text-xl max-sm:text-sm font-normal'>
                        Smart. Compassionate. Collaborative.
                    </div>
                </div>

                <div className='flex flex-col gap-4 max-w-xl'>
                    <p className='text-base sm:text-lg md:text-xl max-sm:text-xs font-normal'>
                        Otters thrive by working together and that’s how Ottermap helps landscapers win more work with less effort.
                    </p>
                    <div className='flex flex-row flex-wrap gap-4 text-sm max-sm:text-xs font-medium pt-2'>
                        <button
                            onClick={() => {
                                customTrack("About us why Button Clicked", { buttonName: 'Try for free' })
                                window.open("https://app.ottermap.com/signup")
                            }}
                            className="text-white cursor-pointer bg-[#218448] border-2 rounded-full px-7 py-3 max-sm:py-2 flex items-center justify-center gap-2 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                            Try for free
                            <img src={RightArrow} alt="" />
                        </button>
                        <button
                            onClick={() => {
                                customTrack("About us why Button Clicked", { buttonName: 'Book a demo' })
                                window.open("https://calendly.com/amit-ottermap/30min")
                            }}
                            className="text-black cursor-pointer border-2 border-[#218448] rounded-full px-7 py-3 max-sm:py-2 hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out">
                            Book a demo
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {[
                    {
                        icon: Icon1,
                        title: 'Agility at Scale',
                        desc: 'Just like otters adapt to fast-changing environments, Ottermap helps your team quote faster and manage more properties with ease.',
                    },
                    {
                        icon: Icon2,
                        title: 'Smart Tools, No Complexity',
                        desc: 'Otters use tools instinctively we do the same. Our platform automates takeoffs and proposals without requiring GIS skills or hours of training.',
                    },
                    {
                        icon: Icon3,
                        title: 'Collaboration That Works',
                        desc: 'From sales to ops, Ottermap connects your team with shared maps, notes, and permissions—built for how real teams work.',
                    },
                    {
                        icon: Icon4,
                        title: 'Ready for What’s Next',
                        desc: 'Whether you’re managing 10 commercial sites or entering the residential market, Ottermap adapts to your workflow, not the other way around.',
                    },
                ].map(({ title, desc, icon }, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-5 items-start py-10 px-6 sm:px-8 border-2 border-[#EFEFEF] rounded-xl bg-white"
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

export default Why;
