import { Link } from "react-router-dom"
import img1 from "../../assets/imgs/shop/product-1-1.jpg"
import img2 from "../../assets/imgs/shop/product-1-2.jpg"
import img3 from "../../assets/imgs/shop/product-3-1.jpg"
import img4 from "../../assets/imgs/shop/product-3-2.jpg"
const ProductTile = () => {
  return (
    <>
      

<section className="product-tabs section-padding position-relative">
  <div className="container">
    <div className="section-title style-2 wow animate__animated animate__fadeIn">
      <h3> New Products </h3>
      <ul className="nav nav-tabs links" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="nav-tab-one" data-bs-toggle="tab" data-bs-target="#tab-one" type="button" role="tab" aria-controls="tab-one" aria-selected="true">All</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="nav-tab-two" data-bs-toggle="tab" data-bs-target="#tab-two" type="button" role="tab" aria-controls="tab-two" aria-selected="false">Milks &amp; Dairies</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="nav-tab-three" data-bs-toggle="tab" data-bs-target="#tab-three" type="button" role="tab" aria-controls="tab-three" aria-selected="false">Coffes &amp; Teas</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="nav-tab-four" data-bs-toggle="tab" data-bs-target="#tab-four" type="button" role="tab" aria-controls="tab-four" aria-selected="false">Pet Foods</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="nav-tab-five" data-bs-toggle="tab" data-bs-target="#tab-five" type="button" role="tab" aria-controls="tab-five" aria-selected="false">Meats</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="nav-tab-six" data-bs-toggle="tab" data-bs-target="#tab-six" type="button" role="tab" aria-controls="tab-six" aria-selected="false">Vegetables</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="nav-tab-seven" data-bs-toggle="tab" data-bs-target="#tab-seven" type="button" role="tab" aria-controls="tab-seven" aria-selected="false">Fruits</button>
        </li>
      </ul>
    </div>
    {/*End nav-tabs*/}
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
        <div className="row product-grid-4">
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <Link to="shop-product-right.html">
                    <img className="default-img" src={img1} alt />
                    <img className="hover-img" src={img2}alt />
                  </Link>
                </div>
                <div className="product-action-1">
                  <Link  aria-label="Add To Wishlist" className="action-btn" to="shop-wishlist.html"><i className="fi-rs-heart" /></Link>
                  <Link  aria-label="Compare" className="action-btn" to="shop-compare.html"><i className="fi-rs-shuffle" /></Link>
                  <Link  aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></Link>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="hot">Hot</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <Link to="shop-grid-right.html">Snack</Link>
                </div>
                <h2><Link to="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, &amp; Red Rice</Link></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '90%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <Link to="vendor-details-1.html">NestFood</Link></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$28.85</span>
                    <span className="old-price">$32.8</span>
                  </div>
                  <div className="add-cart">
                    <Link  className="add" to="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end product card*/}
  
          {/*end product card*/}
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <Link to="shop-product-right.html">
                    <img className="default-img" src={img3} alt />
                    <img className="hover-img" src={img4}alt />
                  </Link>
                </div>
                <div className="product-action-1">
                  <Link  aria-label="Add To Wishlist" className="action-btn" to="shop-wishlist.html"><i className="fi-rs-heart" /></Link>
                  <Link  aria-label="Compare" className="action-btn" to="shop-compare.html"><i className="fi-rs-shuffle" /></Link>
                  <Link  aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></Link>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="new">New</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <Link to="shop-grid-right.html">Snack</Link>
                </div>
                <h2><Link to="shop-product-right.html">Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn</Link></h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{width: '85%'}} />
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div>
                  <span className="font-small text-muted">By <Link to="vendor-details-1.html">StarKist</Link></span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$48.85</span>
                    <span className="old-price">$52.8</span>
                  </div>
                  <div className="add-cart">
                    <Link  className="add" to="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/*end product card*/}
      
          {/*end product card*/}
        </div>
        {/*End product-grid-4*/}
      </div>
      {/*En tab seven*/}
    </div>
   
  </div>
</section>


    </>
  )
}

export default ProductTile
