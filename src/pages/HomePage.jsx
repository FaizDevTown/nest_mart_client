
// import Login from './Auth/Login';
import BannerCard1 from '../components/Home/BannerCard1';
import BannerFooter from '../components/Home/BannerFooter';
import Deals from '../components/Home/Deals';
import FeatureProducts from '../components/Home/FeatureProducts';
import ProductTile from '../components/Home/ProductTile';
import TvCategory from '../components/Home/TvCategory';
import Category from './../components/Home/Category';
import Slider from './../components/Home/Slider';

const HomePage = () => {
  return (
    <>
      {/* <Login/> */}
      <Slider/>
      <Category/>
      <BannerCard1/>
      <ProductTile/>
      <FeatureProducts/>
      <TvCategory/>
      <Deals/>
      <BannerFooter/>
     
      </>
  )
}

export default HomePage
