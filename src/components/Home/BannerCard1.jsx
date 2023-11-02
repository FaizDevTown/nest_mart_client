
import banner1 from "../../assets/imgs/banner/banner-1.png"
import banner2 from "../../assets/imgs/banner/banner-2.png"
import banner3 from "../../assets/imgs/banner/banner-3.png"
// import banner4 from "../../assets/imgs/banner/banner-4.png"


const BannerCard1 = () => {
  return <>
   <section className="banners mb-25">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay={0}>
          <img src={banner1} alt />
          <div className="banner-text">
            <h4>
              Everyday Fresh &amp; <br />Clean with Our<br />
              Products
            </h4>
            <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
          <img src={banner2} alt />
          <div className="banner-text">
            <h4>
              Make your Breakfast<br />
              Healthy and Easy
            </h4>
            <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 d-md-none d-lg-flex">
        <div className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
          <img src={banner3} alt />
          <div className="banner-text">
            <h4>The best Organic <br />Products Online</h4>
            <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  
  </>;
};

export default BannerCard1;
