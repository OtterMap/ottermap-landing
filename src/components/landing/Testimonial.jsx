import React from 'react';
import CircularImage from '../../assets/landing/testimonial/circularImage.svg';
import CircularImage1 from '../../assets/landing/testimonial/circularImage1.svg';
import CircularImage2 from '../../assets/landing/testimonial/circularImage2.svg';

const Testimonial = () => {
  const testimonials = [
    {
      logo: CircularImage2,
      name: 'Virginia Nelson',
      position: 'Executive-Business Development',
      content: 'The platform is exceptionally user-friendly. The detailed maps have significantly improved our operational workflow, saving time and enhancing productivity. Plus, the support team is highly responsive and professional, always there to help whenever I’ve had a question or listen to any feature implementation ideas from my team.',
    },
    {
      logo: CircularImage1,
      name: 'David Sobel',
      position: 'Business Development',
      content: 'Ottermap has been great for our company! Their accuracy and speed for site maps are like none other. Any suggestions for how to make our experience better have been taken into consideration and implemented thoroughly.',
    },
    {
      logo: CircularImage,
      name: 'Bill Jacobson',
      position: 'VP-Business Development',
      content: 'Ottermap\'s exceptional communication kept us on track. They\'re focused on our needs, respecting our time and business. Invaluable support, ensuring smooth operations.',
    },
    {
      logo: CircularImage,
      name: 'Bill Jacobson',
      position: 'VP-Business Development',
      content: 'OtterMap has been a game-changer for our business! The platform is incredibly user-friendly, making site mapping effortless and efficient. It’s saved us time, boosted productivity, and the responsive support team is always ready to help. Highly recommend it!',
    },
  ];
  return (
    <div className="bg-[#F3F1EF] w-full flex justify-center flex-col pt-10 pb-14 gap-12">
      <div className="flex flex-col items-start px-5 md:px-10 lg:px-20 gap-2">
        <div className="text-2xl md:text-3xl font-bold">Real Stories from Real People</div>
        <div className="text-lg md:text-2xl font-semibold">
          Hear how teams across industries use OtterMap to save time, cut costs, and stay in control.
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-5 md:px-10 lg:px-5 w-full">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] xl:w-[22%] rounded-xl bg-white flex flex-col justify-between gap-6 p-6 px-10 text-sm text-[#587485]"
          >
            <p>
              {item.content}
            </p>
            <div className="flex items-center gap-3">
              <div className="rounded-full w-10 h-10 overflow-hidden">
                <img className="w-full h-full object-cover" src={item.logo} alt="story logo" />
              </div>
              <div className="flex flex-col">
                <div className="text-sm font-semibold text-[#333333]">{item.name}</div>
                <div className="text-xs text-[#587485]">{item.position}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
