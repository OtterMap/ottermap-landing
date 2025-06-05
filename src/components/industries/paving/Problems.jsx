import Icon1 from '../../../assets/industries/paving/problems/icon1.svg';
import Icon2 from '../../../assets/industries/paving/problems/icon2.svg';
import Icon3 from '../../../assets/industries/paving/problems/icon3.svg';
import Icon4 from '../../../assets/industries/paving/problems/icon4.svg';

const Problems = () => {
    return (
        <div className='pt-24 max-sm:pt-12 px-4 md:px-20 pb-24'>
            <div className='flex flex-col gap-6 pb-20 max-sm:pb-5 justify-center items-center text-center'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl max-sm:text-xl font-bold'>
                    Take the Pain Out of Paving Estimation
                </h2>
                <p className='text-lg sm:text-xl max-sm:text-sm font-normal'>
                    The Problem with Traditional Paving Bids
                </p>
            </div>

            <div className='flex flex-col gap-6'>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='w-full md:w-7/12 bg-[#04471E]/10 rounded-2xl p-6 md:pl-14 md:py-16 flex flex-col gap-6'>
                        <img className='w-14 h-14 max-sm:w-10 max-sm:h-10 object-contain' src={Icon1} alt="" />
                        <div className='flex flex-col gap-3 text-black'>
                            <h3 className='text-lg sm:text-xl max-sm:text-base font-medium'>Manual Site Walks Waste Time</h3>
                            <p className='text-base sm:text-lg max-sm:text-sm font-normal max-w-sm'>
                                Hours spent measuring parking lots and driveways
                            </p>
                        </div>
                    </div>

                    <div className='w-full md:w-5/12 bg-[#04471E]/10 rounded-2xl p-6 md:pl-14 md:py-16 flex flex-col gap-6'>
                        <img className='w-14 h-14 max-sm:w-10 max-sm:h-10 object-contain' src={Icon2} alt="" />
                        <div className='flex flex-col gap-3 text-black'>
                            <h3 className='text-lg sm:text-xl max-sm:text-base font-medium'>Inconsistent Area Estimates = Wrong Asphalt Volumes</h3>
                            <p className='text-base sm:text-lg max-sm:text-sm font-normal max-w-sm'>
                                Costly material miscalculations
                            </p>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='w-full md:w-5/12 bg-[#04471E]/10 rounded-2xl p-6 md:pl-14 md:py-16 flex flex-col gap-6'>
                        <img className='w-14 h-14 max-sm:w-10 max-sm:h-10 object-contain' src={Icon3} alt="" />
                        <div className='flex flex-col gap-3 text-black'>
                            <h3 className='text-lg sm:text-xl max-sm:text-base font-medium'>Multi-Site Contracts Are Hard to Scale</h3>
                            <p className='text-base sm:text-lg max-sm:text-sm font-normal max-w-sm'>
                                Managing dozens of locations manually
                            </p>
                        </div>
                    </div>

                    <div className='w-full md:w-7/12 bg-[#04471E]/10 rounded-2xl p-6 md:pl-14 md:py-16 flex flex-col gap-6'>
                        <img className='w-14 h-14 max-sm:w-10 max-sm:h-10 object-contain' src={Icon4} alt="" />
                        <div className='flex flex-col gap-3 text-black'>
                            <h3 className='text-lg sm:text-xl max-sm:text-base font-medium'>Win More Bids with Polished Paving Estimates</h3>
                            <p className='text-base sm:text-lg max-sm:text-sm font-normal max-w-sm'>
                                Clear visuals and accurate takeoffs that earn client trust.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Problems;
