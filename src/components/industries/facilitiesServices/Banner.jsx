import React from 'react'
import BannerSection from '../common/banner/BannerSection';
import bottomBanner from '../../../assets/industries/facilitiesServices/bottomBanner/bottomBanner.svg';
const Banner = () => {
  return (
    <BannerSection bottomBanner={bottomBanner} title={"Faster Estimates for Every Facility Site"} subtitle={"Accurate maps. Automated takeoffs."} subtitle1={"Fewer headaches."} />
  )
}

export default Banner
