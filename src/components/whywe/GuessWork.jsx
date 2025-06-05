import RightArrow from '../../assets/rightArrow.svg';
import Icon1 from '../../assets/whywe/guesswork/icon1.svg';
import Icon2 from '../../assets/whywe/guesswork/icon2.svg';
import Icon3 from '../../assets/whywe/guesswork/icon3.svg';
import Icon4 from '../../assets/whywe/guesswork/icon4.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const GuessWork = () => {
    return (
        <div className='px-20 max-sm:px-1 pb-24'>
            <div className='flex flex-col gap-6 justify-center items-center pb-20'>
                <div className='text-4xl max-sm:text-xl font-bold'>You Can’t Win Big with Guesswork</div>
                <div className='text-xl max-sm:text-xs max-sm:text-center max-sm:px-1.5 font-normal'>Manual measurements, legacy tools, and inconsistent proposal formatting aren’t just slowing you down—they’re costing you deals.</div>
                <div className='flex flex-row gap-4 text-sm max-sm:text-xs font-medium'>
                    <button
                        onClick={() => {
                            customTrack("Why we guesswork Button Clicked", { buttonName: 'Try for free' })
                            window.open("https://app.ottermap.com/signup")
                        }}
                        className="text-white cursor-pointer bg-[#218448] border-2 rounded-full px-7 py-3 max-sm:py-2 flex items-center justify-center gap-2 text-nowrap">
                        Try for free
                        <img src={RightArrow} alt="" />
                    </button>
                    <button
                        onClick={() => {
                            customTrack("Why we guesswork Button Clicked", { buttonName: 'Book a demo' })
                            window.open("https://calendly.com/amit-ottermap/30min")
                        }}
                        className="text-black cursor-pointer border-2 border-[#218448] rounded-full px-7 py-3 max-sm:py-2 text-nowrap">
                        Book a demo
                    </button>
                </div>
            </div>
            <div className='text-2xl max-sm:text-xl font-bold pb-12 text-center'>
                Ottermap Empowers You To:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-2 gap-6 w-full max-sm:px-2">
                {[
                    {
                        icon: Icon1,
                        title: 'Quote 10x faster',
                    },
                    {
                        icon: Icon2,
                        title: 'Build trust with 98%+ accurate',
                    },
                    {
                        icon: Icon3,
                        title: 'Send branded proposals your competitors can’t match',
                    },
                    {
                        icon: Icon4,
                        title: 'Scale your estimation team without hiring',
                    }
                ].map(({ title, icon }, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-5 items-start py-5 pl-5 sm:pl-5 pr-3 bg-white"
                    >
                        <img className="w-12 h-12 object-contain shrink-0" src={icon} alt="" />
                        <div className="flex flex-col gap-3 max-w-[300px]">
                            <h3 className="text-lg sm:text-xl max-sm:text-sm font-bold">{title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GuessWork
