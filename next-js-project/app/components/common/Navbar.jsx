"use client"
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../../icons/logo.svg';
import DownArrow from '../../icons/navbar/common/downArrow.svg';
import DownIcon from '../../icons/navbar/common/downIcon.svg';
import UpArrow from '../../icons/navbar/common/upArrow.svg';
import UpIcon from '../../icons/navbar/common/upIcon.svg';
import RightArrow from '../../icons/rightArrow.svg';
import Hamburger from '../../icons/navbar/common/menu.svg';
import Close from '../../icons/navbar/common/close.svg';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import industries1 from '../../icons/navbar/industries/industries1.svg';
import industries2 from '../../icons/navbar/industries/industries2.svg';
import industries3 from '../../icons/navbar/industries/industries3.svg';
import industries4 from '../../icons/navbar/industries/industries4.svg';
import { customTrack } from '../../utils/mixpanel/customTrack';

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [openIndustries, setopenIndustries] = useState(false)
    const [mobileOpenIndustries, setMobileOpenIndustries] = useState(false)
    const industriesRef = useRef(null);
    const [mobileViewOpen, setMobileViewOpen] = useState(false)

    useEffect(() => {
        function handleClickOutside(event) {
            if (industriesRef.current && !industriesRef.current.contains(event.target)) {
                setopenIndustries(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (mobileViewOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Clean up
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [mobileViewOpen]);

    return (

        <div className='flex w-full justify-between items-center gap-2 bg-white sticky top-0 z-50 border-b border-[#e4e5ea]'>
            <div className='relative flex justify-between items-center w-full h-full py-5 xl:px-20 lg:px-10 md:px-5 sm:px-10 px-10 max-sm:px-4'>

                <div className='w-fit'>

                    <Image onClick={() => {
                        router.push("/");
                    }} className='w-32 min-w-24 cursor-pointer' src={Logo} alt="logo" />
                </div>
                <div ref={industriesRef} className='relative md:flex items-center w-fit h-12 xl:ml-12 lg:text-sm md:text-xs hidden text-xs rounded-full border-2 border-[#218448] gap-7 px-5 text-[#218448] font-medium'>

                    <div onClick={
                        () => {

                            setopenIndustries(!openIndustries);
                        }
                    }
                        className={`flex justify-center items-center gap-1 cursor-pointer h-fit border-b-2 hover:scale-105 ${pathname.startsWith("/industries") ? "border-[#218448]" : "border-transparent"}`}>
                        Industries
                        <Image src={openIndustries ? UpArrow : DownArrow} alt="" />
                    </div>

                    <div onClick={() => {
                        router.push("/resources")
                    }}
                        className={`flex justify-center items-center gap-1 cursor-pointer h-fit border-b-2 hover:scale-105 ${pathname.includes("/resources") ? "border-[#218448]" : "border-transparent"}`}>
                        Resources
                    </div>

                    <div onClick={() => {
                        router.push("/whyus")
                    }}
                        className={`flex justify-center items-center gap-1 cursor-pointer h-fit border-b-2 hover:scale-105 ${pathname.includes("/whyus") ? "border-[#218448]" : "border-transparent"}`}>
                        Why we
                    </div>



                    <div onClick={() => {
                        router.push("/about")
                    }}
                        className={`flex justify-center items-center gap-1 cursor-pointer h-fit border-b-2 hover:scale-105 ${pathname.includes("/about") ? "border-[#218448]" : "border-transparent"}`}>
                        About Us
                    </div>

                    {
                        openIndustries &&
                        <div className='absolute top-14 left-0 px-0 w-full z-50'>
                            <div className='flex flex-col px-5 py-5 bg-[#fafafa] shadow-xl rounded-xl gap-8'>
                                <div className='flex justify-evenly gap-0'>
                                    <div onClick={() => {
                                        router.push("/industries/landscaping")
                                    }} className='flex flex-col items-start gap-3 cursor-pointer w-[50%]'>
                                        <div className=''><Image className='w-6' src={industries1} alt="" /></div>
                                        <div className='flex flex-col gap-2'>
                                            <div className='text-base font-medium text-black'>Landscaping</div>
                                            <div className='text-sm text-[#808080] font-normal'>Takeoff and workflow software tailored to your specific requirements.</div>
                                        </div>
                                    </div>
                                    <div onClick={() => {
                                        router.push("/industries/snow")
                                    }} className='flex flex-col items-start gap-3 cursor-pointer w-[50%]'>
                                        <div className=''><Image className='w-6' src={industries2} alt="" /></div>
                                        <div className='flex flex-col gap-2'>
                                            <div className='text-base font-medium text-black'>Snow</div>
                                            <div className='text-sm text-[#808080] font-normal'>Automated takeoff for drive lanes, sidewalks, and more.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-evenly items-start gap-5'>
                                    <div onClick={() => {
                                        router.push("/industries/paving")
                                    }} className='flex flex-col items-start gap-3 cursor-pointer w-[50%]'>
                                        <div className=''><Image className='w-6' src={industries3} alt="" /></div>
                                        <div className='flex flex-col gap-2'>
                                            <div className='text-base font-medium text-black'>Paving</div>
                                            <div className='text-sm text-[#808080] font-normal'>Complete measurement of all site features for precise paving estimates.</div>
                                        </div>
                                    </div>
                                    <div onClick={() => {
                                        router.push("/industries/facilities-services")
                                    }} className='flex flex-col items-start gap-3 cursor-pointer w-[50%]'>
                                        <div className=''><Image className='w-6' src={industries4} alt="" /></div>
                                        <div className='flex flex-col gap-2'>
                                            <div className='text-base font-medium text-black'>Facilities services</div>
                                            <div className='text-sm text-[#808080] font-normal'>Accurate multi-property takeoffs powered by industry-leading technology.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
                <div className='md:flex gap-2 hidden'>
                    <button onClick={() => {
                        customTrack("Navbar Sign In Click", { buttonName: "Sign In" })
                        window.open("https://app.ottermap.com/signup")
                    }} className='w-fit h-12 text-sm border-2 font-semibold rounded-full border-[#218448] bg-white text-black px-6 py-1 cursor-pointer text-nowrap hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out'>Sign In</button>
                    <button onClick={() => {
                        customTrack("Navbar CTA Click", { buttonName: "Try for free" })
                        window.open("https://app.ottermap.com/signup")
                    }} className='w-fit h-12 text-sm border-2 font-semibold rounded-full border-[#218448] bg-[#218448] text-white px-4 py-1 flex justify-center items-center gap-1 cursor-pointer text-nowrap hover:shadow-2xl hover:scale-105 hover:transform hover:transition-all hover:duration-200 hover:ease-in-out'>Try for free
                        <Image src={RightArrow} alt="right arrow" />
                    </button>
                </div>
                <div className='hidden max-md:flex relative'>
                    <Image className='cursor-pointer' onClick={() => setMobileViewOpen(!mobileViewOpen)} src={mobileViewOpen ? Close : Hamburger} alt="" />
                </div>
                {
                    mobileViewOpen &&
                    <div className='absolute bg-[#FAFAFA] top-17 left-0 w-[92%] h-fit max-h-[80vh] border border-[#e4e5ea] mx-4 rounded-xl pt-6 pb-7 px-3 overflow-scroll z-50'>
                        <div
                            onClick={() => {
                                customTrack("Navbar Industry button Clicked", { buttonName: "Industries", view: "Mobile" })
                                setMobileOpenIndustries(!mobileOpenIndustries)
                            }}
                            className='flex justify-between items-center pb-3 border-b border-[#E2E5EA]'>
                            <div className='text-base font-semibold'>Industries</div>
                            <div>
                                <Image className='cursor-pointer z-50' src={mobileOpenIndustries ? UpIcon : DownIcon} alt="" />
                            </div>
                        </div>
                        {
                            mobileOpenIndustries &&
                            <div className='flex flex-col gap-4'>

                                <div
                                    onClick={() => {
                                        customTrack("Navbar - Industries dropdown button Click", { buttonName: "Landscaping", view: "Mobile" });
                                        router.push("/industries/landscaping")
                                    }}
                                    className='pl-5 pt-4 flex items-start gap-3'>
                                    <div>
                                        <Image className='h-7' src={industries1} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='text-sm font-medium'>Landscaping</div>
                                        <div className='text-xs text-[#808080] font-normal'>Takeoff and workflow software tailored to your specific requirements.</div>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        customTrack("Navbar - Industries dropdown button Click", { buttonName: "Snow", view: "Mobile" });
                                        router.push("/industries/snow")
                                    }}
                                    className='pl-5 pt-4 flex items-start gap-3'>
                                    <div>
                                        <Image className='h-7' src={industries2} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='text-sm font-medium'>Snow</div>
                                        <div className='text-xs text-[#808080] font-normal'>Automated takeoff for drive lanes, sidewalks, and more.</div>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        customTrack("Navbar - Industries dropdown button Click", { buttonName: "Paving", view: "Mobile" });
                                        router.push("/industries/paving")
                                    }}
                                    className='pl-5 pt-4 flex items-start gap-3'>
                                    <div>
                                        <Image className='h-7' src={industries3} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='text-sm font-medium'>Paving</div>
                                        <div className='text-xs text-[#808080] font-normal'>Complete measurement of all site features for precise paving estimates.</div>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        customTrack("Navbar - Industries dropdown button Click", { buttonName: "Facilities Services", view: "Mobile" });
                                        router.push("/industries/facilities-services")
                                    }}
                                    className='pl-5 pt-4 flex items-start gap-3'>
                                    <div>
                                        <Image className='h-7' src={industries4} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='text-sm font-medium'>Facilities services</div>
                                        <div className='text-xs text-[#808080] font-normal'>Accurate multi-property takeoffs powered by industry-leading technology.</div>
                                    </div>
                                </div>
                            </div>
                        }
                        <div
                            onClick={() => {

                                customTrack("Navbar Resources button Clicked", { buttonName: "Resources", view: "Mobile" });
                                router.push("/resources")
                            }}
                            className='flex justify-between items-center pb-3 border-b pt-7 border-[#E2E5EA]'>
                            <div className='text-base font-semibold'>Resources</div>
                        </div>
                        <div
                            onClick={() => {

                                customTrack("Navbar Why we button Clicked", { buttonName: "Why we", view: "Mobile" });
                                router.push("/whyus")
                            }}
                            className='flex justify-between items-center pb-3 border-b pt-7 border-[#E2E5EA]'>
                            <div className='text-base font-semibold'>Why we</div>
                        </div>
                        {/* <div
                            onClick={() => {

                                customTrack("Navbar Pricing button Clicked", { buttonName: "Pricing", view: "Mobile" })
                            }}
                            className='flex justify-between items-center pb-3 border-b pt-7 border-[#E2E5EA]'>
                            <div className='text-base font-semibold'>Pricing</div>
                        </div> */}
                        <div
                            onClick={() => {

                                customTrack("Navbar About us button Clicked", { buttonName: "About us", view: "Mobile" });
                                router.push("/about")
                            }}
                            className='flex justify-between items-center pb-3 border-b pt-7 border-[#E2E5EA]'>
                            <div className='text-base font-semibold'>About us</div>
                        </div>

                    </div>
                }
            </div>
        </div >
    )
}

export default Navbar
