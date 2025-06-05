import SearchIcon from '../../assets/resources/hero/searchIcon.svg'
import Icon1 from '../../assets/resources/hero/gettingStarted/icon1.svg'
import Icon2 from '../../assets/resources/hero/gettingStarted/icon2.svg'
import Icon3 from '../../assets/resources/hero/gettingStarted/icon3.svg'
import Video from '../../assets/video.svg'
const Hero = () => {
    return (
        <div className='pt-12 px-20 max-sm:px-4 pb-24'>
            <div className='flex flex-col gap-6 justify-center items-center pb-24 max-sm:pb-16'>
                <div className='text-4xl max-sm:text-xl font-bold text-center'>Resources for Estimating Excellence</div>
                <div className='text-xl max-sm:text-xs font-normal text-[#61758A] text-center'>Tools, training, and support to make every bid smarter and every team more productive.</div>
            </div>
            <div className='pt-1 flex flex-col gap-5 max-sm:gap-3 justify-start pb-24'>
                <div className='text-4xl max-sm:text-xl font-bold'>
                    Help center
                </div>
                <div className='text-xl max-sm:text-xs font-normal text-[#61758A] pb-5'>
                    Find answers to common questions or contact our support team for assistance.
                </div>
                <div className='px-8 py-3 flex gap-4 bg-[#F0F2F5] items-center rounded-full w-2/3 max-sm:w-full'>
                    <div>
                        <img src={SearchIcon} alt="" />
                    </div>
                    <div className='w-full'>
                        <input className='text-[#61758A] placeholder:text-[#61758A] w-full py-0.5 outline-0 text-base' placeholder='Search for help topics' />
                    </div>
                </div>
            </div>
            <div className='pt-1'>
                <div className='text-4xl max-sm:text-xl font-bold flex justify-start pb-10'>
                    Getting started
                </div>
                <div className="pt-10 sm:pt-16 sm:pb-24 pb-24 w-full flex justify-center">
                               
                                <video className="w-full max-w-2xl h-auto rounded-2xl"
                                    src='https://video.wixstatic.com/video/abe956_ad5303cd52084bd0a35c0f40c2dc203a/1080p/mp4/file.mp4'
                                    poster={Video}
                                    muted controls controlsList='nodownload'
                                ></video>
                            </div>
                {/* <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
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
                            className="flex flex-col gap-5 items-start py-10 max-sm:py-4 px-6 sm:px-8 border border-[#DBE0E5] rounded-xl bg-white"
                        >
                            <img className="w-6 h-6 object-contain shrink-0 mt-1" src={icon} alt="" />
                            <div className="flex flex-col gap-2">
                                <h3 className="text-base max-sm:text-sm font-bold text-[#121417]">{title}</h3>
                                <p className="text-sm max-sm:text-xs font-normal text-[#61758A] max-w-xs">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Hero
