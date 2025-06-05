import React from 'react'
import BannerSection from '../common/banner/BannerSection';
import bottomBanner from '../../../assets/industries/snow/bottomBanner/bottomBanner.svg'
const Banner = () => {
    return (
        <BannerSection bottomBanner={bottomBanner} title={"Ready to Win This Snow Season?"} subtitle={"Accurate maps. Automated takeoffs."} subtitle1={"Fewer headaches."} />
    )
}
export default Banner
