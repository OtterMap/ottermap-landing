import Banner from '../../assets/whywe/commercial/banner.svg';
const Commercial = () => {
    return (
        <div className='px-20 max-sm:px-8 pb-24'>

            <div className='flex flex-col gap-6 justify-center items-center'>
                <div className='text-4xl max-sm:text-xl max-sm:text-center font-bold'>The Landscaping Industry Is Growing Fast. So Are the Stakes</div>
                <div className='text-xl max-sm:text-xs font-normal'>If your proposals aren’t fast, accurate, and professional—you’re already losing bids to those who are</div>
            </div>

            <div
                className="relative  h-[550px] max-sm:h-[580px] bg-cover bg-center mt-20 mb-4 rounded-xl"
                style={{ backgroundImage: `url(${Banner})` }}
            >
                <div className="absolute top-10 sm:top-10 lg:top-10 max-sm:top-3 left-4 sm:left-14 lg:left-14 rounded-3xl max-xl:pr-10 xl:pr-16 py-6 flex flex-col gap-4 w-[100%] text-white sm:w-[80%] md:w-fit xl:text-2xl max-xl:text-base max-sm:text-xs">
                    The U.S. landscaping and property service market is projected to hit $347.21 billion by 2025, with North America owning more than 35% of the global share. This is no longer a small business sector—it's a technology-first, speed-driven arena.
                </div>
                <div className='flex lg:flex-row flex-col xl:gap-8 max-xl:gap-4 xl:px-14 max-xl:px-5 absolute bottom-5'>

                    <div className=" bg-[#FFFFFFA6] rounded-lg text-black xl:pl-7 max-xl:pl-4 xl:pr-16 max-xl:pr-4 xl:py-14 max-lg:py-2 max-xl:pt-3 flex flex-col gap-5 xl:w-[30%] max-xl:w-full">
                        <div className="text-base xl:text-xl font-bold leading-snug">
                            50% of contracts are recurring maintenance
                        </div>
                        <div className="text-sm xl:text-xl font-normal leading-snug">
                            which means accuracy equals long-term revenue.
                        </div>
                    </div>
                    <div className=" bg-[#FFFFFFA6] rounded-lg text-black xl:pl-7 max-xl:pl-4 xl:pr-16 max-xl:pr-4 xl:py-14 max-lg:py-2 max-xl:pt-3 flex flex-col gap-5 xl:w-[30%] max-xl:w-full">
                        <div className="text-base xl:text-xl font-bold leading-snug">
                            35% of your revenue depends on repeat business
                        </div>
                        <div className="text-sm xl:text-xl font-normal leading-snug">
                            And consistency is what retains those clients.
                        </div>
                    </div>
                    <div className=" bg-[#FFFFFFA6] rounded-lg text-black xl:pl-7 max-xl:pl-4 xl:pr-16 max-xl:pr-4 xl:py-14 max-lg:py-2 max-xl:pt-3 flex flex-col gap-5 xl:w-[30%] max-xl:w-full">
                        <div className="text-base xl:text-xl font-bold leading-snug">
                            Large-scale buyers—retail chains, hotels, hospitals, corporate campuses
                        </div>
                        <div className="text-sm xl:text-xl font-normal leading-snug">
                            expect instant, visual, and data-driven proposals
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commercial
