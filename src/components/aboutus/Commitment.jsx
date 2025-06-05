import Icon1 from '../../assets/aboutus/commitment/icon1.svg';
import Icon2 from '../../assets/aboutus/commitment/icon2.svg';
import Icon3 from '../../assets/aboutus/commitment/icon3.svg';
import Icon4 from '../../assets/aboutus/commitment/icon4.svg';

const Commitment = () => {
    return (
        <div className='px-20 max-sm:px-4 pt-1 pb-24'>
            <div className='text-4xl max-sm:text-xl font-bold pb-20 max-sm:pb-5'>
                Commitment to Your Growth
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {[
                    {
                        icon: Icon1,
                        title: 'Free onboarding and live training for your whole teams',
                    },
                    {
                        icon: Icon2,
                        title: 'Help center, chat support, and phone consultations',
                    },
                    {
                        icon: Icon3,
                        title: 'Ongoing development based on client feedback',
                    },
                    {
                        icon: Icon4,
                        title: 'We scale with you, not just sell to you',
                    }
                ].map(({ title, icon }, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-8 items-start py-5 pl-5 sm:pl-5 pr-3 border-[1.5px] border-[#EFEFEF] rounded-xl bg-white"
                    >
                        <img className="w-10 h-10 object-contain shrink-0" src={icon} alt="" />
                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg sm:text-xl max-sm:text-base font-medium">{title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Commitment
