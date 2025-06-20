import BannerSection from '../common/banner/BannerSection';
import bottomBanner from '../../../icons/industries/facilitiesServices/bottomBanner/bottomBanner.png';
const Banner = () => {
  return (
    <BannerSection bottomBanner={bottomBanner.src} title={"Faster Estimates for Every Facility Site"} subtitle={"Accurate maps. Automated takeoffs."} subtitle1={"Fewer headaches."} />
  )
}

export default Banner
