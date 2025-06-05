import Icon1 from '../../assets/whywe/proof/icon1.svg';
import Icon2 from '../../assets/whywe/proof/icon2.svg';
import Icon3 from '../../assets/whywe/proof/icon3.svg';
import Icon4 from '../../assets/whywe/proof/icon4.svg';
const Proof = () => {
    return (
        <div className='px-20 max-sm:px-5 pb-24'>
            <div className='text-4xl max-sm:text-xl font-bold pb-20'>
                Key Proof Point
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {[
                    {
                        icon: Icon1,
                        title: '20,000+ Sites',
                        desc: 'Processed via Ottermap',
                    },
                    {
                        icon: Icon2,
                        title: '98%+ Accuracy',
                        desc: 'Across Lawn, Snow & Paving Zones',
                    },
                    {
                        icon: Icon3,
                        title: '20% Increase in Rep revenue',
                        desc: 'Among Current Clients',
                    },
                    {
                        icon: Icon4,
                        title: 'Used by National leaders',
                        desc: 'in Landscape & Snow Ops',
                    }
                ].map(({ title, desc, icon }, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-4 items-start py-14 max-sm:py-6 px-8 sm:px-8 border-[1.5px] border-[#EFEFEF] rounded-xl bg-white"
                    >
                        <img className="w-6 h-6 object-contain shrink-0 mt-1" src={icon} alt="" />
                        <div className="flex flex-col gap-3">
                            <h3 className="text-base sm:text-lg font-bold">{title}</h3>
                            <p className="text-sm sm:text-base font-normal">{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Proof
