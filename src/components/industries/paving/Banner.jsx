import React from 'react'
import BannerSection from '../common/banner/BannerSection';
import bottomBanner from '../../../assets/industries/paving/bottomBanner/bottomBanner.svg';
const Banner = () => {
    return (
        <BannerSection bottomBanner={bottomBanner} title={"Estimate Smarter. Pave Faster."} subtitle={"Accurate maps. Automated takeoffs."} subtitle1={"Fewer headaches."} />
    )
}

export default Banner
