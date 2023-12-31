// import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import img1 from "../../assets/imgs/shop/cat-13.png";
// import img2 from "../../assets/imgs/shop/cat-12.png";
// import img3 from "../../assets/imgs/shop/cat-11.png";
// import img4 from "../../assets/imgs/shop/cat-9.png";
// import img5 from "../../assets/imgs/shop/cat-3.png";
// import img6 from "../../assets/imgs/shop/cat-1.png";
// import img7 from "../../assets/imgs/shop/cat-2.png";
// import img8 from "../../assets/imgs/shop/cat-4.png";
// import img9 from "../../assets/imgs/shop/cat-5.png";
// import img10 from "../../assets/imgs/shop/cat-14.png";
// import img11 from "../../assets/imgs/shop/cat-5.png";
const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/category/get-category")
      .then((res) => {
        console.log("hbhb");
        setCategory(res.data.category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(category);

  return (
    <>
      <div className="section-title">
        <div className="title">
          <h3>Featured Categories</h3>
        </div>
      </div>
      <Swiper loop slidesPerView={10} draggable spaceBetween={30}>
        {category.map((item) => {
          return (
            <SwiperSlide key={item._id}>
              <Link to={`/category/${item.slug}`}>
                <div
                  className="card-2 bg-9 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <figure className="img-hover-scale overflow-hidden">
                    <Link to="shop-grid-right.html">
                      <img src={item.image} alt />
                    </Link>
                  </figure>
                  <h6>
                    <Link to="*"> {item.name} </Link>
                  </h6>
                  <span>26 items</span>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
          {" "}
          <div
            className="card-2 bg-10 wow animate__animated animate__fadeInUp"
            data-wow-delay=".2s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <Link to="shop-grid-right.html">
                <img src={img2} alt />
              </Link>
            </figure>
            <h6>
              <Link to="shop-grid-right.html">Oganic Kiwi</Link>
            </h6>
            <span>28 items</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div
            className="card-2 bg-11 wow animate__animated animate__fadeInUp"
            data-wow-delay=".3s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <Link to="shop-grid-right.html">
                <img src={img3} alt />
              </Link>
            </figure>
            <h6>
              <Link to="shop-grid-right.html">Peach</Link>
            </h6>
            <span>14 items</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div
            className="card-2 bg-12 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <Link to="shop-grid-right.html">
                <img src={img4} alt />
              </Link>
            </figure>
            <h6>
              <Link to="shop-grid-right.html">Red Apple</Link>
            </h6>
            <span>54 items</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div
            className="card-2 bg-13 wow animate__animated animate__fadeInUp"
            data-wow-delay=".5s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <Link to="shop-grid-right.html">
                <img src={img5} alt />
              </Link>
            </figure>
            <h6>
              <Link to="shop-grid-right.html">Snack</Link>
            </h6>
            <span>56 items</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div
            className="card-2 bg-14 wow animate__animated animate__fadeInUp"
            data-wow-delay=".6s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <Link to="shop-grid-right.html">
                <img src={img6} alt />
              </Link>
            </figure>
            <h6>
              <Link to="shop-grid-right.html">Vegetables</Link>
            </h6>
            <span>72 items</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div
            className="card-2 bg-15 wow animate__animated animate__fadeInUp"
            data-wow-delay=".7s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <Link to="shop-grid-right.html">
                <img src={img7} alt />
              </Link>
            </figure>
            <h6>
              <Link to="shop-grid-right.html">Strawberry</Link>
            </h6>
            <span>36 items</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div
            className="card-2 bg-12 wow animate__animated animate__fadeInUp"
            data-wow-delay=".8s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <Link to="shop-grid-right.html">
                <img src={img8} alt />
              </Link>
            </figure>
            <h6>
              <Link to="shop-grid-right.html">Black plum</Link>
            </h6>
            <span>123 items</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="card-2 bg-10 wow animate__animated animate__fadeInUp"
            data-wow-delay=".9s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <Link to="shop-grid-right.html">
                <img src={img9} alt />
              </Link>
            </figure>
            <h6>
              <Link to="shop-grid-right.html">Custard apple</Link>
            </h6>
            <span>34 items</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="card-2 bg-12 wow animate__animated animate__fadeInUp"
            data-wow-delay="1s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <Link to="shop-grid-right.html">
                <img src={img10} alt />
              </Link>
            </figure>
            <h6>
              <Link to="shop-grid-right.html">Coffe &amp; Tea</Link>
            </h6>
            <span>89 items</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div
            className="card-2 bg-11 wow animate__animated animate__fadeInUp"
            data-wow-delay="0s"
          >
            <figure className="img-hover-scale overflow-hidden">
              <Link to="shop-grid-right.html">
                <img src={img11} alt />
              </Link>
            </figure>
            <h6>
              <Link to="shop-grid-right.html">Headphone</Link>
            </h6>
            <span>87 items</span>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Category;
