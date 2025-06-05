import Icon1 from '../../assets/resources/how/icon1.svg'
import Icon2 from '../../assets/resources/how/icon2.svg'
import { customTrack } from '../../utils/mixpanel/customTrack'

const How = () => {
    return (
        <div className='pt-1 px-20 max-sm:px-4 pb-24'>
            <div className='text-4xl max-sm:text-xl font-bold pb-20 max-sm:pb-5 max-sm:w-[70%]'>
                How real B2B clients use Ottermap to win
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
                {[
                    {
                        icon: Icon1,
                        title: 'RMCL saves 90% of its time by switching to Ottermap',
                        desc: 'Ottermap provided a good return on investment and is an efficient tool for measuring sites and preparing take-offs. He particularly appreciated the cost factor and the time-saving aspect of the software. Ottermap reduced lead times and allowed the company to submit estimates on time, which increased their chances of winning bids',
                    },
                    {
                        icon: Icon2,
                        title: 'GRO outdoor living',
                        desc: 'Ottermap provided a good return on investment and is an efficient tool for measuring sites and preparing take-offs. He particularly appreciated the cost factor and the time-saving aspect of the software. Ottermap reduced lead times and allowed the company to submit estimates on time, which increased their chances of winning bids',
                    },
                ].map(({ title, desc, icon }, i) => (
                    <div
                        key={i}
                        className="flex flex-row-reverse gap-5 justify-between py-7 px-6 sm:px-8 border border-[#EFEFEF] rounded-xl bg-white"
                    >
                        <img className="w-16 h-16 object-contain shrink-0 mt-1" src={icon} alt="" />
                        <div className="flex flex-col justify-between gap-2 max-w-sm">
                            <h3 className="text-2xl max-sm:text-sm font-bold text-[#121417]">{title}</h3>
                            <p className="text-sm max-sm:text-xs font-normal text-[#61758A]">{desc}</p>
                            <button
                                onClick={() => {
                                    customTrack("Resources How section Button Clicked", { buttonName: "Read case study" })
                                }}
                                className='bg-[#218448] text-sm max-sm:text-[10px] text-white rounded-full py-2.5 px-3 w-fit mt-6'>Read case study</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default How
