import Icon1 from '../../assets/whywe/reality/icon1.svg';
import Icon2 from '../../assets/whywe/reality/icon2.svg';
import Icon3 from '../../assets/whywe/reality/icon3.svg';
import Icon4 from '../../assets/whywe/reality/icon4.svg';
import Cross from '../../assets/whywe/reality/cross.svg';
import Tick from '../../assets/whywe/reality/tick.svg';
import Logo from '../../assets/logo.svg';

const Commitment = () => {
    return (
        <div className='px-20 max-sm:px-6 pt-1 pb-24'>
            <div className='text-4xl max-sm:text-xl font-bold text-center pb-6'>
                Built for B2B Operational reality
            </div>
            <div className='max-sm:px-8'>
                <div className='text-xl max-sm:text-xs font-normal text-center '>
                    Ottermap is purpose-built for operational leaders juggling multiple bids, properties, and service lines.
                </div>
                <div className='text-xl max-sm:text-xs font-bold text-[#218448] pb-20 max-sm:pb-10 uppercase text-center'>
                    We solve real pain.
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {[
                    {
                        icon: Icon1,
                        title: 'Inconsistent proposal quality',
                    },
                    {
                        icon: Icon2,
                        title: 'Time-killing manual takeoffs',
                    },
                    {
                        icon: Icon3,
                        title: 'Lack of standardization across estimators.',
                    },
                    {
                        icon: Icon4,
                        title: 'Missed opportunities due to slow turnarounds',
                    }
                ].map(({ title, icon }, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-8 items-start py-5 pl-5 sm:pl-5 pr-3 border-[1.5px] border-[#EFEFEF] rounded-xl bg-white"
                    >
                        <img className="w-10 h-10 object-contain shrink-0" src={icon} alt="" />
                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className='pt-24'>
                <div className='text-4xl font-bold text-center pb-6'>
                    Why Operational Teams Choose OtterMap Over the Rest
                </div>
                <div className='text-xl font-normal text-center pb-20'>
                    See how Ottermap stacks up against other platforms built for B2B service estimation.
                </div>
            </div>
            <div className='mt-0 border border-[#EFEFEF] rounded-3xl px-14 max-lg:px-0 py-11'>
                <div className='flex justify-between items-center border-b border-[#EFEFEF] pb-6 w-full'>
                    <div className='text-4xl max-lg:text-2xl font-bold w-[50%] flex justify-start'>Features</div>
                    <div className='flex items-center w-[50%] justify-between'>
                        <div className='text-2xl max-lg:text-sm font-bold flex justify-center w-1/2'>Other competiators</div>
                        <div className='flex justify-center w-1/2'>
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                </div>
                {[
                    {
                        title: 'GIS-Free Drag & Drop Interface',
                    },
                    {
                        title: 'AI-Powered Snow Zone Separation',
                    },
                    {
                        title: 'CRM ready proposal',
                    },
                    {
                        title: 'Multi-site dashboard with filters',
                    },
                    {
                        title: 'White-Label Branded Proposals (PDF Export)',
                    },
                    {
                        title: 'Post-Login Advanced Feature Walkthroughs',
                    },
                    {
                        title: 'Visual, Editable Proposals for Teams',
                    },
                    {
                        title: 'Visual, Editable Proposals for Teams',
                    },
                    {
                        title: 'Mobile Access with GPS Service Zone Marking',
                    },
                ].map(({ title, icon }, i) => (
                    <div key={i} className='flex justify-between items-center border-b border-[#EFEFEF] pb-6 pt-6 w-full'>
                        <div className='text-xl max-lg:text-xs font-medium w-[50%] flex justify-start'>{title}</div>
                        <div className='flex items-between w-[50%] justify-between'>
                            <div className='w-1/2 flex justify-center'>
                                <img className='w-8 h-8 object-contain shrink-0' src={Cross} alt="" />
                            </div>
                            <div className='w-1/2 flex justify-center'>
                                <img className='w-8 h-8 object-contain shrink-0' src={Tick} alt="" />
                            </div>
                        </div>
                    </div>
                ))}


            </div> */}
        </div>
    )
}

export default Commitment
