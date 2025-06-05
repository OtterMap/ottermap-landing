import { customTrack } from '../../../../utils/mixpanel/customTrack'

const HeroSection = ({ heroImage, title, subtitle, buttonText1, buttonText2 }) => {
    return (
        <div>
            <div className="bg-[#04471e] text-white py-16 max-sm:py-1 max-sm:pb-10 pl-6 md:pl-10 pr-28 max-sm:pr-0 max-sm:pl-0 flex flex-col lg:flex-row items-center">

                <div className="w-full lg:w-1/2 max-sm:pr-4 max-sm:pl-4 flex flex-col gap-6 lg:px-14 text-center lg:text-left mt-10 lg:mt-0">
                    <h1 className="text-3xl sm:text-4xl lg:text-4xl max-sm:text-xl max-sm:text-start font-bold leading-snug">
                        {title}
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl max-sm:text-xs max-sm:text-start font-normal opacity-70">
                        {subtitle}
                    </p>
                    <div className="flex flex-row gap-4 justify-center lg:justify-start max-sm:justify-start text-sm max-sm:text-xs font-medium pb-10">
                        <button
                            onClick={() => {
                                customTrack("Industries Hero Button Clicked", { buttonName: buttonText1, location: location.pathname })
                            }}
                            className="bg-white text-black border-2 border-white rounded-full px-6 py-3">
                            {buttonText1}
                        </button>
                        <button
                            onClick={() => {
                                customTrack("Industries Hero Button Clicked", { buttonName: buttonText1, location: location.pathname })
                            }}
                            className="text-white border-2 border-white rounded-full px-6 py-3">
                            {buttonText2}
                        </button>
                    </div>
                </div>

                <div className="xl:w-[47%] max-sm:px-4  flex justify-center">
                    <img src={heroImage} alt="Hero" className=" w-full" loading='lazy' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
