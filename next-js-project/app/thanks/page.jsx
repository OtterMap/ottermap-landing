"use client"
import { useEffect } from "react"
import ThanksIcon from '../icons/thanks/thanks.svg';
import Image from "next/image";
import { customTrack } from "../utils/mixpanel/customTrack";

const page = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        customTrack("Thanks page entered", { page: 'thanks page' });
    })
    return (
        <div className="flex flex-col gap-10 pt-20 items-center h-screen bg-gradient-to-b from-[#04471E] to-[#DCD7BB]">
            <Image src={ThanksIcon} alt='thanks image' className="w-80 min-w-80" />
            <div className="text-3xl max-sm:text-base text-[#ffffff] font-bold text-center">
                Thank you! Your interest has been recorded.
            </div>
            <div className="flex flex-col items-center justify-center text-center px-5">
                <div className="text-[22px] max-sm:text-sm text-[#ffffff] font-normal text-center">
                    We’ll activate your beta access soon and email you with next steps.
                </div>
                <div className="text-[22px] max-sm:text-sm text-[#ffffff] font-normal text-center">
                    We appreciate your time and look forward to having you explore the new Ottermap experience.
                </div>
            </div>
        </div>
    )
}
export default page