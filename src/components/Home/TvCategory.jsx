import img1 from "../../assets/imgs/shop/product-1-1.jpg";
import img2 from "../../assets/imgs/shop/product-1-2.jpg";
import img3 from "../../assets/imgs/shop/product-3-1.jpg";
import img4 from "../../assets/imgs/shop/product-3-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

const TvCategory = () => {
  return <>
   {/* <section className="section-padding pb-5"> */}
        <div className="container">
          <div className="section-title wow animate__animated animate__fadeIn">
            <h3 className> Computer Category</h3>
          </div>
          </div>

  <div
              className="col-lg-9 col-md-12 wow animate__animated animate__fadeIn"
              data-wow-delay=".4s"
            >
              <div className="tab-content" id="myTabContent-1">
                {" "}
                <div
                  className="tab-pane fade show active"
                  id="tab-one-1"
                  role="tabpanel"
                  aria-labelledby="tab-one-1"
                >
                  {" "}
                  <div className="carausel-4-columns-cover arrow-center position-relative">
                    {" "}
                    <Swiper slidesPerView={4} spaceBetween={50}>
                      {" "}
                      <div
                        className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                        id="carausel-4-columns-arrows"
                      />{" "}
                      <div
                        className="carausel-4-columns carausel-arrow-center"
                        id="carausel-4-columns"
                      >
                        {" "}
                        <SwiperSlide>
                          {" "}
                          <div className="product-cart-wrap">
                            {" "}
                            <div className="product-img-action-wrap">
                              {" "}
                              <div className="product-img product-img-zoom">
                                {" "}
                                <a href="shop-product-right.html">
                                  {" "}
                                  <img
                                    className="default-img"
                                    src={img1}
                                    alt
                                  />{" "}
                                  <img className="hover-img" src={img2} alt />{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="product-action-1">
                                {" "}
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />{" "}
                                </a>{" "}
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  {" "}
                                  <i className="fi-rs-heart" />{" "}
                                </a>{" "}
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  {" "}
                                  <i className="fi-rs-shuffle" />{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="product-badges product-badges-position product-badges-mrg">
                                {" "}
                                <span className="hot">Save 15%</span>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="product-content-wrap">
                              {" "}
                              <div className="product-category">
                                {" "}
                                <a href="shop-grid-right.html">
                                  Hodo Foods
                                </a>{" "}
                              </div>{" "}
                              <h2>
                                {" "}
                                <a href="shop-product-right.html">
                                  {" "}
                                  Seeds of Change Organic Quinoa, Brown{" "}
                                </a>{" "}
                              </h2>{" "}
                              <div className="product-rate d-inline-block">
                                {" "}
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />{" "}
                              </div>{" "}
                              <div className="product-price mt-10">
                                {" "}
                                <span>$238.85 </span>{" "}
                                <span className="old-price">$245.8</span>{" "}
                              </div>{" "}
                              <div className="sold mt-15 mb-15">
                                {" "}
                                <div className="progress mb-5">
                                  {" "}
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />{" "}
                                </div>{" "}
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120{" "}
                                </span>{" "}
                              </div>{" "}
                              <a
                                href="shop-cart.html"
                                className="btn w-100 hover-up"
                              >
                                {" "}
                                <i className="fi-rs-shopping-cart mr-5" /> Add
                                To Cart{" "}
                              </a>{" "}
                            </div>{" "}
                          </div>{" "}
                          {/*End product Wrap*/}{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="product-cart-wrap">
                            {" "}
                            <div className="product-img-action-wrap">
                              {" "}
                              <div className="product-img product-img-zoom">
                                {" "}
                                <a href="shop-product-right.html">
                                  {" "}
                                  <img
                                    className="default-img"
                                    src={img3}
                                    alt
                                  />{" "}
                                  <img className="hover-img" src={img4} alt />{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="product-action-1">
                                {" "}
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />{" "}
                                </a>{" "}
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  {" "}
                                  <i className="fi-rs-heart" />{" "}
                                </a>{" "}
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  {" "}
                                  <i className="fi-rs-shuffle" />{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="product-badges product-badges-position product-badges-mrg">
                                {" "}
                                <span className="sale">Sale</span>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="product-content-wrap">
                              {" "}
                              <div className="product-category">
                                {" "}
                                <a href="shop-grid-right.html">
                                  Hodo Foods
                                </a>{" "}
                              </div>{" "}
                              <h2>
                                {" "}
                                <a href="shop-product-right.html">
                                  {" "}
                                  Angie’s Boomchickapop Sweet and womnies{" "}
                                </a>{" "}
                              </h2>{" "}
                              <div className="product-rate d-inline-block">
                                {" "}
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />{" "}
                              </div>{" "}
                              <div className="product-price mt-10">
                                {" "}
                                <span>$238.85 </span>{" "}
                                <span className="old-price">$245.8</span>{" "}
                              </div>{" "}
                              <div className="sold mt-15 mb-15">
                                {" "}
                                <div className="progress mb-5">
                                  {" "}
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />{" "}
                                </div>{" "}
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120{" "}
                                </span>{" "}
                              </div>{" "}
                              <a
                                href="shop-cart.html"
                                className="btn w-100 hover-up"
                              >
                                {" "}
                                <i className="fi-rs-shopping-cart mr-5" /> Add
                                To Cart{" "}
                              </a>{" "}
                            </div>{" "}
                          </div>
                          {/*End product Wrap*/}{" "}
                        </SwiperSlide>{" "}
                        <SwiperSlide>
                          {" "}
                          <div className="product-cart-wrap">
                            {" "}
                            <div className="product-img-action-wrap">
                              {" "}
                              <div className="product-img product-img-zoom">
                                {" "}
                                <a href="shop-product-right.html">
                                  {" "}
                                  <img
                                    className="default-img"
                                    src={img1}
                                    alt
                                  />{" "}
                                  <img className="hover-img" src={img2} alt />{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="product-action-1">
                                {" "}
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />{" "}
                                </a>{" "}
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  {" "}
                                  <i className="fi-rs-heart" />{" "}
                                </a>{" "}
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  {" "}
                                  <i className="fi-rs-shuffle" />{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="product-badges product-badges-position product-badges-mrg">
                                {" "}
                                <span className="best">Best sale</span>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="product-content-wrap">
                              {" "}
                              <div className="product-category">
                                {" "}
                                <a href="shop-grid-right.html">
                                  Hodo Foods
                                </a>{" "}
                              </div>{" "}
                              <h2>
                                {" "}
                                <a href="shop-product-right.html">
                                  {" "}
                                  Foster Farms Takeout Crispy Classic{" "}
                                </a>{" "}
                              </h2>{" "}
                              <div className="product-rate d-inline-block">
                                {" "}
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />{" "}
                              </div>{" "}
                              <div className="product-price mt-10">
                                {" "}
                                <span>$238.85 </span>{" "}
                                <span className="old-price">$245.8</span>{" "}
                              </div>{" "}
                              <div className="sold mt-15 mb-15">
                                {" "}
                                <div className="progress mb-5">
                                  {" "}
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />{" "}
                                </div>{" "}
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120{" "}
                                </span>{" "}
                              </div>{" "}
                              <a
                                href="shop-cart.html"
                                className="btn w-100 hover-up"
                              >
                                {" "}
                                <i className="fi-rs-shopping-cart mr-5" /> Add
                                To Cart{" "}
                              </a>{" "}
                            </div>{" "}
                          </div>{" "}
                          {/*End product Wrap*/}{" "}
                        </SwiperSlide>{" "}
                        <SwiperSlide>
                          {" "}
                          <div className="product-cart-wrap">
                            {" "}
                            <div className="product-img-action-wrap">
                              {" "}
                              <div className="product-img product-img-zoom">
                                {" "}
                                <a href="shop-product-right.html">
                                  {" "}
                                  <img
                                    className="default-img"
                                    src={img3}
                                    alt
                                  />{" "}
                                  <img className="hover-img" src={img4} alt />{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="product-action-1">
                                {" "}
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />{" "}
                                </a>{" "}
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  {" "}
                                  <i className="fi-rs-heart" />{" "}
                                </a>{" "}
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  {" "}
                                  <i className="fi-rs-shuffle" />{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="product-badges product-badges-position product-badges-mrg">
                                {" "}
                                <span className="hot">Save 15%</span>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="product-content-wrap">
                              {" "}
                              <div className="product-category">
                                {" "}
                                <a href="shop-grid-right.html">
                                  Hodo Foods
                                </a>{" "}
                              </div>{" "}
                              <h2>
                                {" "}
                                <a href="shop-product-right.html">
                                  {" "}
                                  Blue Diamond Almonds Lightly Salted{" "}
                                </a>{" "}
                              </h2>{" "}
                              <div className="product-rate d-inline-block">
                                {" "}
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />{" "}
                              </div>{" "}
                              <div className="product-price mt-10">
                                {" "}
                                <span>$238.85 </span>{" "}
                                <span className="old-price">$245.8</span>{" "}
                              </div>{" "}
                              <div className="sold mt-15 mb-15">
                                {" "}
                                <div className="progress mb-5">
                                  {" "}
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />{" "}
                                </div>{" "}
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120{" "}
                                </span>{" "}
                              </div>{" "}
                              <a
                                href="shop-cart.html"
                                className="btn w-100 hover-up"
                              >
                                {" "}
                                <i className="fi-rs-shopping-cart mr-5" /> Add
                                To Cart{" "}
                              </a>{" "}
                            </div>{" "}
                          </div>{" "}
                          {/*End product Wrap*/}{" "}
                        </SwiperSlide>{" "}
                      </div>{" "}
                    </Swiper>{" "}
                  </div>{" "}
                </div>{" "}
                {/*End tab-pane*/}{" "}
              </div>
              {/*End tab-content*/}
            </div>
  </>;
};

export default TvCategory;
