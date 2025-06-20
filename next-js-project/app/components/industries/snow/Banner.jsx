import React from 'react'
import BannerSection from '../common/banner/BannerSection';
import bottomBanner from '../../../icons/industries/snow/bottomBanner/bottomBanner.png'
const Banner = () => {
    return (
        <BannerSection bottomBanner={bottomBanner.src} title={"Ready to Win This Snow Season?"} subtitle={"Accurate maps. Automated takeoffs."} subtitle1={"Fewer headaches."} />
    )
}
export default Banner
