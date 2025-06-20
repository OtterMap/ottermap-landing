import Icon1 from '../../icons/whyus/reality/icon1.svg';
import Icon2 from '../../icons/whyus/reality/icon2.svg';
import Icon3 from '../../icons/whyus/reality/icon3.svg';
import Icon4 from '../../icons/whyus/reality/icon4.svg';
import Image from 'next/image';

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
                        <Image className="w-10 h-10 object-contain shrink-0" src={icon} alt="" />
                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Commitment
