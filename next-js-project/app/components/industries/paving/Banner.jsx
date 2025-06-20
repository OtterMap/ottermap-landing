import React from 'react'
import BannerSection from '../common/banner/BannerSection';
import bottomBanner from '../../../icons/industries/paving/bottomBanner/bottomBanner.png';
const Banner = () => {
    return (
        <BannerSection bottomBanner={bottomBanner.src} title={"Estimate Smarter. Pave Faster."} subtitle={"Accurate maps. Automated takeoffs."} subtitle1={"Fewer headaches."} />
    )
}

export default Banner
