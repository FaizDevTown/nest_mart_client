// import Swiper core and required modules
import img from "../../assets/imgs/slider/slider-2.png";
import img2 from "../../assets/imgs/slider/slider-2.png";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <>
    <div className="py-5 ">

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        //   containerModifierClass="swiper-container"
        navigation
        pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true, }}
        onSwiper={(swiper) => console.log(swiper)}
        className="slider-container"
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div
            className="single-hero-slider single-animation-wrap"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="slider-content">
              <h1 className="display-2 mb-40">
                Fresh Vegetables
                <br />
                Big discount
              </h1>
              <p className="mb-65">Save up to 50% off on your first order</p>
              <form className="form-subcriber d-flex">
                <input type="email" placeholder="Your emaill address" />
                <button className="btn" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="single-hero-slider single-animation-wrap"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="slider-content">
              <h1 className="display-2 mb-40">
                Fresh Vegetables
                <br />
                Big discount
              </h1>
              <p className="mb-65">Save up to 50% off on your first order</p>
              <form className="form-subcriber d-flex">
                <input type="email" placeholder="Your emaill address" />
                <button className="btn" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </SwiperSlide>
     
      </Swiper>
    </div>
    

     
    </>
  );
};

export default Slider;
