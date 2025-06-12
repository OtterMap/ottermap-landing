import React from 'react';
import Logo from '../../assets/footerLogo.svg';
import InstaLogo from '../../assets/instaLogo.svg';
import LinkedinLogo from '../../assets/linkedinLogo.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';
import RightArrow from '../../assets/rightArrow.svg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const footer = [
        {
            title: "Product",
            links: [
                {
                    name: "Features",
                    link: "/#features"
                },
                {
                    name: "Success Metrics",
                    link: "/why-we"
                },
                {
                    name: "Walkthrough Video",
                    link: "/#walkthrough"
                },
                {
                    name: "FAQ’S",
                    link: "/#faqs"
                },
            ]
        },
        {
            title: "Industries",
            links: [
                {
                    name: "Landscaping",
                    link: "/industries/landscaping"
                },
                {
                    name: "Snow Removal",
                    link: "/industries/snow"
                },
                {
                    name: "Paving",
                    link: "/industries/paving"
                },
                {
                    name: "Facility Services",
                    link: "/industries/facilities-services"
                },
            ]
        },
        // {
        //     title: "Resources",
        //     links: [
        //         {
        //             name: "Blog",
        //             link: "/resources"
        //         },
        //         {
        //             name: "Case Studies",
        //             link: "/resources"
        //         },
        //     ]
        // },
        {
            title: "Company",
            links: [
                {
                    name: "Why we",
                    link: "/why-we"
                },
                {
                    name: "About us",
                    link: "/about-us"
                },
                {
                    name: "Newsletter",
                    link: "/resources"
                },
            ]
        },
    ]
    return (
        <div className="bg-[#2a2a2a] flex flex-col mt-36 text-white">
            <div className='flex max-xl:flex-col justify-between w-full gap-20 pt-10 sm:pt-14'>

                <div className="px-6 sm:px-10 lg:pl-20 max-w-[30%] max-xl:max-w-[70%]">
                    <img src={Logo} alt="Ottermap Logo" />
                    <div className='text-sm sm:text-base font-medium mt-4'>
                        Revolutionizing property takeoffs and site mapping for service contractors.
                    </div>
                    <div className='text-xs sm:text-sm font-medium mt-4 opacity-50'>
                        800 N King St, Wilmington, DE 19801, United States
                    </div>
                    <div className='text-xs sm:text-sm font-medium mt-6'>
                        <div className='flex gap-1'>
                            <div className='text-[#FFFFFF99]'>Email:</div>
                            <div onClick={() => {
                                customTrack('Footer Email Clicked', { email: 'info@ottermap.com' })
                                window.open("mailto:info@ottermap.com")
                            }} className='cursor-pointer'>info@ottermap.com</div>
                        </div>
                        <div className='flex gap-1 pt-3'>
                            <div className='text-[#FFFFFF99]'>Phone:</div>
                            <div onClick={() => {
                                customTrack('Footer Phone Clicked', { phone: '+1 (302) 572 9515' })
                                window.open("tel:+1 (302) 572 9515")
                            }} className='cursor-pointer'>+1 (302) 572 9515</div>
                        </div>
                    </div>
                </div>

                <div className="px-6 sm:px-10 lg:px-20 pb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 text-sm">
                        {footer.map((item, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <div className="font-bold">{item.title}</div>
                                <div className="flex flex-col gap-1.5 text-gray-300">
                                    {item.links.map((link, index) => (
                                        <div key={index}>
                                            <div className='cursor-pointer hover:text-white w-fit'
                                                onClick={() => {
                                                    if (link.link.startsWith("/#")) {
                                                        const targetId = link.link.split("#")[1];
                                                        navigate("/"); // Navigate to homepage first
                                                        setTimeout(() => {
                                                            const element = document.getElementById(targetId);
                                                            element?.scrollIntoView({ behavior: "smooth" });
                                                        }, 100); // slight delay to allow route load
                                                    } else {
                                                        navigate(link.link);
                                                    }
                                                }}
                                            > {link.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='pt-20'>
                        <div className='text-xl font-bold pb-2.5'>Ready to see the Difference?</div>
                        <div className='text-sm font-normal pb-7 opacity-50'>Book a demo and get your first property mapped absolutely free—no credit card needed.</div>
                        <button onClick={() => {
                            customTrack("Footer CTA Click", { buttonName: "Try for free" })
                            window.open("https://app.ottermap.com/signup")
                        }} className='w-fit h-12 text-sm border-2 font-semibold rounded-full border-[#218448] bg-[#218448] text-white px-4 py-1 max-sm:py-0 flex justify-center items-center gap-1 cursor-pointer text-nowrap hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out'>Try for free
                            <img src={RightArrow} alt="right arrow" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-6 sm:px-10 lg:px-20 flex justify-between items-start sm:items-center gap-4 sm:gap-0 pb-8">
                <div className="flex flex-wrap gap-4 sm:gap-8 text-white text-xs opacity-50">
                    {/* <div>Terms of use</div>
                    <div>Privacy policy</div>
                    <div>Cookie policy</div> */}
                    <div>&copy; Ottermap, 2025</div>
                </div>
                <div className="flex gap-4 sm:gap-6">
                    <img onClick={() => {
                        customTrack("Footer Linkedin Icon Click", { buttonName: "Linkedin Icon" })
                        window.open("https://www.linkedin.com/company/ottermap/")
                    }
                    } src={LinkedinLogo} alt="LinkedIn" className="w-5 h-5 cursor-pointer" />
                </div>
            </div>
        </div >
    );
};

export default Footer;
