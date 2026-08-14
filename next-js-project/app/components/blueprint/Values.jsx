import Image from 'next/image';
import Value1 from '../../icons/landing/values/value1.svg';
import Value2 from '../../icons/landing/values/value2.svg';
import Value3 from '../../icons/landing/values/value3.svg';
import Value4 from '../../icons/landing/values/value4.svg';

const valueItems = [
  {
    icon: Value1,
    title: "Precision that wins contracts",
    points: [
      "Quantities pulled straight from the plan set, not estimated by eye",
      "Consistent numbers across every trade and estimator",
      "Fewer change orders from missed scope",
    ],
  },
  {
    icon: Value2,
    title: "Speed without the overhead",
    points: [
      "Full plan sets processed in minutes, not days",
      "No manual scaling or ruler work",
      "Bid more jobs with the same estimating team",
    ],
  },
  {
    icon: Value3,
    title: "Built for how you already work",
    points: [
      "Works alongside Ottermap's aerial and parcel takeoffs",
      "No GIS or CAD experience required",
      "Mobile and desktop access for field and office",
    ],
  },
  {
    icon: Value4,
    title: "Support that scales with you",
    points: [
      "Free onboarding for your estimating team",
      "White-labeled exports with your branding",
      "Responsive support as your bid volume grows",
    ],
  },
];

const Values = () => {
  return (
    <div className="py-16 sm:py-24 px-4 md:px-20">
      <div className="flex flex-col gap-4 pb-12 sm:pb-16 justify-center items-center text-center">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#D85A30] uppercase">
          Why it matters
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Win more bids with plan-accurate numbers
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {valueItems.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <div className="p-2 bg-[#218448] w-fit rounded-full">
              <Image src={item.icon} alt="" />
            </div>
            <h3 className="text-base sm:text-lg font-bold">{item.title}</h3>
            <ul className="text-sm text-[#5B5F5A] space-y-2">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#218448] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
