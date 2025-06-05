import Icon1 from '../../assets/aboutus/promise/icon1.svg';
import Icon2 from '../../assets/aboutus/promise/icon2.svg';
import Icon3 from '../../assets/aboutus/promise/icon3.svg';
const Promise = () => {
    return (
        <div className='px-20 max-sm:px-4 pb-24'>
            <div className='text-4xl max-sm:text-xl font-bold pb-20 max-sm:pb-5'>
                Our Promise
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                {[
                    {
                        icon: Icon1,
                        title: 'Fewer Site Visits',
                        desc: 'Save time, fuel, and coordination efforts. Our tools work from anywhere.',
                    },
                    {
                        icon: Icon2,
                        title: 'More Deals Closed',
                        desc: 'Automate repetitive tasks so your sales reps can focus on selling.',
                    },
                    {
                        icon: Icon3,
                        title: 'Data-Driven Proposals',
                        desc: 'Support every bid with visual clarity and layered precision.',
                    }
                ].map(({ title, desc, icon }, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-4 items-start py-14 max-sm:py-8 px-8 sm:px-8 max-sm:px-7 border-[0.5px] border-[#218448] rounded-xl bg-white"
                    >
                        <img className="w-6 h-6 object-contain shrink-0 mt-1" src={icon} alt="" />
                        <div className="flex flex-col gap-3">
                            <h3 className="text-base sm:text-lg max-sm:text-base font-bold">{title}</h3>
                            <p className="text-sm sm:text-base max-sm:text-xs font-normal">{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Promise
