import React from 'react'
import { customTrack } from '../../utils/mixpanel/customTrack'

const ContactSupport = () => {
    return (
        <div className='px-20 max-lg:px-6 pt-1'>
            <div className='text-4xl max-sm:text-xl font-bold pb-6'>
                Contact support
            </div>
            <div className='text-xl max-sm:text-xs font-normal pb-3'>
                If you need further assistance, Please contact our support team, We’re here to help you!
            </div>
            <div
                onClick={() => {
                    customTrack("Resources Contact Support Button Clicked", { buttonName: "info@ottermap.com" })
                    window.open("mailto:info@ottermap.com")
                }}
                className='text-xl max-sm:text-base font-bold underline text-[#0D80F2]'>
                info@ottermap.com
            </div>
        </div>
    )
}

export default ContactSupport
