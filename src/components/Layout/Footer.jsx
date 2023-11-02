import { Link } from "react-router-dom"
import img1 from "../../assets/imgs/theme/icons/icon-1.svg"
import img2 from "../../assets/imgs/theme/icons/icon-2.svg"
import img3 from "../../assets/imgs/theme/icons/icon-3.svg"
import img4 from "../../assets/imgs/theme/icons/icon-4.svg"
import img5 from "../../assets/imgs/theme/icons/icon-5.svg"
import img6 from "../../assets/imgs/theme/icons/icon-5.svg"
import icon1 from "../../assets/imgs/theme/logo.svg"
import icon2 from "../../assets/imgs/theme/icons/icon-location.svg"
import icon3 from "../../assets/imgs/theme/icons/icon-contact.svg"
import icon4 from "../../assets/imgs/theme/icons/icon-email-2.svg"
import icon5 from "../../assets/imgs/theme/icons/icon-clock.svg"
import phone from "../../assets/imgs/theme/icons/phone-call.svg"

import footerimg1 from "../../assets/imgs/theme/icons/icon-facebook-white.svg"
import footerimg2 from "../../assets/imgs/theme/icons/icon-twitter-white.svg"
import footerimg3 from "../../assets/imgs/theme/icons/icon-instagram-white.svg"
import footerimg4 from "../../assets/imgs/theme/icons/icon-pinterest-white.svg"
import footerimg5 from "../../assets/imgs/theme/icons/icon-youtube-white.svg"






const Footer = () => {
  return <>
 <footer className="main">
 
  <section className="featured section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
          <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay={0}>
            <div className="banner-icon">
              <img src={img1} alt />
            </div>
            <div className="banner-text">
              <h3 className="icon-box-title">Best prices &amp; offers</h3>
              <p>Orders $50 or more</p>
            </div>
          </div>
        </div>
        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
          <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
            <div className="banner-icon">
              <img src={img2} alt />
            </div>
            <div className="banner-text">
              <h3 className="icon-box-title">Free delivery</h3>
              <p>24/7 amazing services</p>
            </div>
          </div>
        </div>
        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
          <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
            <div className="banner-icon">
              <img src={img3} alt />
            </div>
            <div className="banner-text">
              <h3 className="icon-box-title">Great daily deal</h3>
              <p>When you sign up</p>
            </div>
          </div>
        </div>
        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
          <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
            <div className="banner-icon">
              <img src={img4} alt />
            </div>
            <div className="banner-text">
              <h3 className="icon-box-title">Wide assortment</h3>
              <p>Mega Discounts</p>
            </div>
          </div>
        </div>
        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
          <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
            <div className="banner-icon">
              <img src={img5}alt />
            </div>
            <div className="banner-text">
              <h3 className="icon-box-title">Easy returns</h3>
              <p>Within 30 days</p>
            </div>
          </div>
        </div>
        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
          <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
            <div className="banner-icon">
              <img src={img6} alt />
            </div>
            <div className="banner-text">
              <h3 className="icon-box-title">Safe delivery</h3>
              <p>Within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-padding footer-mid">
    <div className="container pt-15 pb-20">
      <div className="row">
        <div className="col">
          <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp" data-wow-delay={0}>
            <div className="logo mb-30">
              <Link to="index.html" className="mb-15"><img src={icon1} alt="logo" /></Link>
              <p className="font-lg text-heading">Awesome grocery store website template</p>
            </div>
            <ul className="contact-infor">
              <li><img src={icon2} alt /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
              <li><img src={icon3} alt /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
              <li><img src={icon4} alt /><strong>Email:</strong><span>sale@Nest.com</span></li>
              <li><img src={icon5} alt /><strong>Hours:</strong><span>10:00 - 18:00, Mon - Sat</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
          <h4 className="widget-title">Company</h4>
          <ul className="footer-list mb-sm-5 mb-md-0">
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Delivery Information</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms &amp; Conditions</Link></li>
            <li><Link to="#">Contact Us</Link></li>
            <li><Link to="#">Support Center</Link></li>
            <li><Link to="#">Careers</Link></li>
          </ul>
        </div>
        <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
          <h4 className="widget-title">Account</h4>
          <ul className="footer-list mb-sm-5 mb-md-0">
            <li><Link to="#">Sign In</Link></li>
            <li><Link to="#">View Cart</Link></li>
            <li><Link to="#">My Wishlist</Link></li>
            <li><Link to="#">Track My Order</Link></li>
            <li><Link to="#">Help Ticket</Link></li>
            <li><Link to="#">Shipping Details</Link></li>
            <li><Link to="#">Compare products</Link></li>
          </ul>
        </div>
        <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
          <h4 className="widget-title">Corporate</h4>
          <ul className="footer-list mb-sm-5 mb-md-0">
            <li><Link to="#">Become a Vendor</Link></li>
            <li><Link to="#">Affiliate Program</Link></li>
            <li><Link to="#">Farm Business</Link></li>
            <li><Link to="#">Farm Careers</Link></li>
            <li><Link to="#">Our Suppliers</Link></li>
            <li><Link to="#">Accessibility</Link></li>
            <li><Link to="#">Promotions</Link></li>
          </ul>
        </div>
        <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
          <h4 className="widget-title">Popular</h4>
          <ul className="footer-list mb-sm-5 mb-md-0">
            <li><Link to="#">Milk &amp; Flavoured Milk</Link></li>
            <li><Link to="#">Butter and Margarine</Link></li>
            <li><Link to="#">Eggs Substitutes</Link></li>
            <li><Link to="#">Marmalades</Link></li>
            <li><Link to="#">Sour Cream and Dips</Link></li>
            <li><Link to="#">Tea &amp; Kombucha</Link></li>
            <li><Link to="#">Cheese</Link></li>
          </ul>
        </div>
      </div>
    </div></section>
  <div className="container pb-30 wow animate__animated animate__fadeInUp" data-wow-delay={0}>
    <div className="row align-items-center">
      <div className="col-12 mb-30">
        <div className="footer-bottom" />
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <p className="font-sm mb-0">© 2022, <strong className="text-brand">Nest</strong> - In House Project <br />All rights reserved by hexabells</p>
      </div>
      <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
        <div className="hotline d-lg-inline-flex">
          <img src={phone} alt="hotline" />
          <p>1900 - 8888<span>24/7 Support Center</span></p>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
        <div className="mobile-social-icon">
          <h6>Follow Us</h6>
          <Link to="#"><img src={footerimg1} alt /></Link>
          <Link to="#"><img src={footerimg2} alt /></Link>
          <Link to="#"><img src={footerimg3} alt /></Link>
          <Link to="#"><img src={footerimg4} alt /></Link>
          <Link to="#"><img src={footerimg5} alt /></Link>
        </div>
        <p className="font-sm">Up to 15% discount on your first subscribe</p>
      </div>
    </div>
  </div>
</footer>

  </>;
};

export default Footer;
