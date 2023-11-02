import React from 'react'
const PageNotFound = () => {
  return (
    <>
      
   <div>
  <div className="modal fade custom-modal" id="quickViewModal" tabIndex={-1} aria-labelledby="quickViewModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        <div className="modal-body">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
              <div className="detail-gallery">
                <span className="zoom-icon"><i className="fi-rs-search" /></span>
                {/* MAIN SLIDES */}
                <div className="product-image-slider">
                  <figure className="border-radius-10">
                    <img src="assets/imgs/shop/product-16-2.jpg" alt="product image" />
                  </figure>
                  <figure className="border-radius-10">
                    <img src="assets/imgs/shop/product-16-1.jpg" alt="product image" />
                  </figure>
                  <figure className="border-radius-10">
                    <img src="assets/imgs/shop/product-16-3.jpg" alt="product image" />
                  </figure>
                  <figure className="border-radius-10">
                    <img src="assets/imgs/shop/product-16-4.jpg" alt="product image" />
                  </figure>
                  <figure className="border-radius-10">
                    <img src="assets/imgs/shop/product-16-5.jpg" alt="product image" />
                  </figure>
                  <figure className="border-radius-10">
                    <img src="assets/imgs/shop/product-16-6.jpg" alt="product image" />
                  </figure>
                  <figure className="border-radius-10">
                    <img src="assets/imgs/shop/product-16-7.jpg" alt="product image" />
                  </figure>
                </div>
                {/* THUMBNAILS */}
                <div className="slider-nav-thumbnails">
                  <div><img src="assets/imgs/shop/thumbnail-3.jpg" alt="product image" /></div>
                  <div><img src="assets/imgs/shop/thumbnail-4.jpg" alt="product image" /></div>
                  <div><img src="assets/imgs/shop/thumbnail-5.jpg" alt="product image" /></div>
                  <div><img src="assets/imgs/shop/thumbnail-6.jpg" alt="product image" /></div>
                  <div><img src="assets/imgs/shop/thumbnail-7.jpg" alt="product image" /></div>
                  <div><img src="assets/imgs/shop/thumbnail-8.jpg" alt="product image" /></div>
                  <div><img src="assets/imgs/shop/thumbnail-9.jpg" alt="product image" /></div>
                </div>
              </div>
              {/* End Gallery */}
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="detail-info pr-30 pl-30">
                <span className="stock-status out-stock"> Sale Off </span>
                <h3 className="title-detail"><Link to="shop-product-right.html" className="text-heading">Seeds of Change Organic Quinoa, Brown</Link></h3>
                <div className="product-detail-rating">
                  <div className="product-rate-cover text-end">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '90%'}} />
                    </div>
                    <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                  </div>
                </div>
                <div className="clearfix product-price-cover">
                  <div className="product-price primary-color float-left">
                    <span className="current-price text-brand">$38</span>
                    <span>
                      <span className="save-price font-md color3 ml-15">26% Off</span>
                      <span className="old-price font-md ml-15">$52</span>
                    </span>
                  </div>
                </div>
                <div className="detail-extralink mb-30">
                  <div className="detail-qty border radius">
                    <Link to="#" className="qty-down"><i className="fi-rs-angle-small-down" /></Link>
                    <input type="text" name="quantity" className="qty-val" defaultValue={1} min={1} />
                    <Link to="#" className="qty-up"><i className="fi-rs-angle-small-up" /></Link>
                  </div>
                  <div className="product-extra-link2">
                    <button type="submit" className="button button-add-to-cart"><i className="fi-rs-shopping-cart" />Add to cart</button>
                  </div>
                </div>
                <div className="font-xs">
                  <ul>
                    <li className="mb-5">Vendor: <span className="text-brand">Nest</span></li>
                    <li className="mb-5">MFG:<span className="text-brand"> Jun 4.2022</span></li>
                  </ul>
                </div>
              </div>
              {/* Detail Info */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Header  */}
  <header className="header-area header-style-1 header-height-2">
    <div className="mobile-promotion">
      <span>Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left</span>
    </div>
    <div className="header-top header-top-ptb-1 d-none d-lg-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg-4">
            <div className="header-info">
              <ul>
                <li><Link to="page-account.html">My Cart</Link></li>
                <li><Link to="shop-wishlist.html">Checkout</Link></li>
                <li><Link to="shop-order.html">Order Tracking</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4">
            <div className="text-center">
              <div id="news-flash" className="d-inline-block">
                <ul>
                  <li>100% Secure delivery without contacting the courier</li>
                  <li>Supper Value Deals - Save more with coupons</li>
                  <li>Trendy 25silver jewelry, save up 35% off today</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="header-info header-info-right">
              <ul>
                <li>
                  <a className="language-dropdown-active" href="#">English <i className="fi-rs-angle-small-down" /></Link>
                  <ul className="language-dropdown">
                    <li>
                      <Link to="#"><img src="assets/imgs/theme/flag-fr.png" alt />Français</Link>
                    </li>
                    <li>
                      <Link to="#"><img src="assets/imgs/theme/flag-dt.png" alt />Deutsch</Link>
                    </li>
                    <li>
                      <Link to="#"><img src="assets/imgs/theme/flag-ru.png" alt />Pусский</Link>
                    </li>
                  </ul>
                </li>
                <li>Need help? Call Us: <strong className="text-brand"> + 1800 900</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
      <div className="container">
        <div className="header-wrap">
          <div className="logo logo-width-1">
            <Link to="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></Link>
          </div>
          <div className="header-right">
            <div className="search-style-2">
              <form action="#">
                <select className="select-active">
                  <option>All Categories</option>
                  <option>Milks and Dairies</option>
                  <option>Wines &amp; Alcohol</option>
                  <option>Clothing &amp; Beauty</option>
                  <option>Pet Foods &amp; Toy</option>
                  <option>Fast food</option>
                  <option>Baking material</option>
                  <option>Vegetables</option>
                  <option>Fresh Seafood</option>
                  <option>Noodles &amp; Rice</option>
                  <option>Ice cream</option>
                </select>
                <input type="text" placeholder="Search for items..." />
              </form>
            </div>
            <div className="header-action-right">
              <div className="header-action-2">
                <div className="search-location">
                  <form action="#">
                    <select className="select-active">
                      <option>Your Location</option>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>Arizona</option>
                      <option>Delaware</option>
                      <option>Florida</option>
                      <option>Georgia</option>
                      <option>Hawaii</option>
                      <option>Indiana</option>
                      <option>Maryland</option>
                      <option>Nevada</option>
                      <option>New Jersey</option>
                      <option>New Mexico</option>
                      <option>New York</option>
                    </select>
                  </form>
                </div>
                <div className="header-action-icon-2">
                  <Link to="shop-wishlist.html">
                    <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                    <span className="pro-count blue">6</span>
                  </Link>
                  <Link to="shop-wishlist.html"><span className="lable">Wishlist</span></Link>
                </div>
                <div className="header-action-icon-2">
                  <a className="mini-cart-icon" href="shop-cart.html">
                    <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                    <span className="pro-count blue">2</span>
                  </Link>
                  <Link to="shop-cart.html"><span className="lable">Cart</span></Link>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                      <li>
                        <div className="shopping-cart-img">
                          <Link to="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" /></Link>
                        </div>
                        <div className="shopping-cart-title">
                          <h4><Link to="shop-product-right.html">Daisy Casual Bag</Link></h4>
                          <h4><span>1 × </span>$800.00</h4>
                        </div>
                        <div className="shopping-cart-delete">
                          <Link to="#"><i className="fi-rs-cross-small" /></Link>
                        </div>
                      </li>
                      <li>
                        <div className="shopping-cart-img">
                          <Link to="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-2.jpg" /></Link>
                        </div>
                        <div className="shopping-cart-title">
                          <h4><Link to="shop-product-right.html">Corduroy Shirts</Link></h4>
                          <h4><span>1 × </span>$3200.00</h4>
                        </div>
                        <div className="shopping-cart-delete">
                          <Link to="#"><i className="fi-rs-cross-small" /></Link>
                        </div>
                      </li>
                    </ul>
                    <div className="shopping-cart-footer">
                      <div className="shopping-cart-total">
                        <h4>Total <span>$4000.00</span></h4>
                      </div>
                      <div className="shopping-cart-button">
                        <Link to="shop-cart.html" className="outline">View cart</Link>
                        <Link to="shop-checkout.html">Checkout</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-action-icon-2">
                  <Link to="page-account.html">
                    <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/icon-user.svg" />
                  </Link>
                  <Link to="page-account.html"><span className="lable ml-0">Account</span></Link>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                    <ul>
                      <li>
                        <Link to="page-account.html"><i className="fi fi-rs-user mr-10" />My Account</Link>
                      </li>
                      <li>
                        <Link to="page-account.html"><i className="fi fi-rs-location-alt mr-10" />Order Tracking</Link>
                      </li>
                      <li>
                        <Link to="page-account.html"><i className="fi fi-rs-label mr-10" />My Voucher</Link>
                      </li>
                      <li>
                        <Link to="shop-wishlist.html"><i className="fi fi-rs-heart mr-10" />My Wishlist</Link>
                      </li>
                      <li>
                        <Link to="page-account.html"><i className="fi fi-rs-settings-sliders mr-10" />Setting</Link>
                      </li>
                      <li>
                        <Link to="page-login.html"><i className="fi fi-rs-sign-out mr-10" />Sign out</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-bottom header-bottom-bg-color sticky-bar">
      <div className="container">
        <div className="header-wrap header-space-between position-relative">
          <div className="logo logo-width-1 d-block d-lg-none">
            <Link to="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></Link>
          </div>
          <div className="header-nav d-none d-lg-flex">
            <div className="main-categori-wrap d-none d-lg-block">
              <a className="categories-button-active" href="#">
                <span className="fi-rs-apps" />   All Categories
                <i className="fi-rs-angle-down" />
              </Link>
              <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                <div className="d-flex categori-dropdown-inner">
                  <ul>
                    <li>
                      <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-1.svg" alt />Milks and Dairies</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-2.svg" alt />Clothing &amp; beauty</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-3.svg" alt />Pet Foods &amp; Toy</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-4.svg" alt />Baking material</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-5.svg" alt />Fresh Fruit</Link>
                    </li>
                  </ul>
                  <ul className="end">
                    <li>
                      <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-6.svg" alt />Wines &amp; Drinks</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-7.svg" alt />Fresh Seafood</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-8.svg" alt />Fast food</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-9.svg" alt />Vegetables</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-10.svg" alt />Bread and Juice</Link>
                    </li>
                  </ul>
                </div>
                <div className="more_slide_open" style={{display: 'none'}}>
                  <div className="d-flex categori-dropdown-inner">
                    <ul>
                      <li>
                        <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-1.svg" alt />Milks and Dairies</Link>
                      </li>
                      <li>
                        <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-2.svg" alt />Clothing &amp; beauty</Link>
                      </li>
                    </ul>
                    <ul className="end">
                      <li>
                        <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-3.svg" alt />Wines &amp; Drinks</Link>
                      </li>
                      <li>
                        <Link to="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-4.svg" alt />Fresh Seafood</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="more_categories"><span className="icon" /> <span className="heading-sm-1">Show more...</span></div>
              </div>
            </div>
            <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
              <nav>
                <ul>
                  <li>
                    <a className="active" href="index.html">Home</Link>
                  </li>
                  <li>
                    <Link to="page-about.html">About</Link>
                  </li>
                  <li>
                    <Link to="shop-grid-right.html">Shop <i className="fi-rs-angle-down" /></Link>
                    <ul className="sub-menu">
                      <li><Link to="shop-grid-right.html">Shop Grid – Right Sidebar</Link></li>
                      <li><Link to="shop-grid-left.html">Shop Grid – Left Sidebar</Link></li>
                      <li><Link to="shop-list-right.html">Shop List – Right Sidebar</Link></li>
                      <li><Link to="shop-list-left.html">Shop List – Left Sidebar</Link></li>
                      <li><Link to="shop-fullwidth.html">Shop - Wide</Link></li>
                      <li>
                        <Link to="#">Single Product <i className="fi-rs-angle-right" /></Link>
                        <ul className="level-menu">
                          <li><Link to="shop-product-right.html">Product – Right Sidebar</Link></li>
                          <li><Link to="shop-product-left.html">Product – Left Sidebar</Link></li>
                          <li><Link to="shop-product-full.html">Product – No sidebar</Link></li>
                          <li><Link to="shop-product-vendor.html">Product – Vendor Info</Link></li>
                        </ul>
                      </li>
                      <li><Link to="shop-filter.html">Shop – Filter</Link></li>
                      <li><Link to="shop-wishlist.html">Shop – Wishlist</Link></li>
                      <li><Link to="shop-cart.html">Shop – Cart</Link></li>
                      <li><Link to="shop-checkout.html">Shop – Checkout</Link></li>
                      <li><Link to="shop-compare.html">Shop – Compare</Link></li>
                      <li>
                        <Link to="#">Shop Invoice<i className="fi-rs-angle-right" /></Link>
                        <ul className="level-menu">
                          <li><Link to="shop-invoice-1.html">Shop Invoice 1</Link></li>
                          <li><Link to="shop-invoice-2.html">Shop Invoice 2</Link></li>
                          <li><Link to="shop-invoice-3.html">Shop Invoice 3</Link></li>
                          <li><Link to="shop-invoice-4.html">Shop Invoice 4</Link></li>
                          <li><Link to="shop-invoice-5.html">Shop Invoice 5</Link></li>
                          <li><Link to="shop-invoice-6.html">Shop Invoice 6</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Vendors <i className="fi-rs-angle-down" /></Link>
                    <ul className="sub-menu">
                      <li><Link to="vendors-grid.html">Vendors Grid</Link></li>
                      <li><Link to="vendors-list.html">Vendors List</Link></li>
                      <li><Link to="vendor-details-1.html">Vendor Details 01</Link></li>
                      <li><Link to="vendor-details-2.html">Vendor Details 02</Link></li>
                      <li><Link to="vendor-dashboard.html">Vendor Dashboard</Link></li>
                      <li><Link to="vendor-guide.html">Vendor Guide</Link></li>
                    </ul>
                  </li>
                  <li className="position-static">
                    <Link to="#">Mega menu <i className="fi-rs-angle-down" /></Link>
                    <ul className="mega-menu">
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">Fruit &amp; Vegetables</Link>
                        <ul>
                          <li><Link to="shop-product-right.html">Meat &amp; Poultry</Link></li>
                          <li><Link to="shop-product-right.html">Fresh Vegetables</Link></li>
                          <li><Link to="shop-product-right.html">Herbs &amp; Seasonings</Link></li>
                          <li><Link to="shop-product-right.html">Cuts &amp; Sprouts</Link></li>
                          <li><Link to="shop-product-right.html">Exotic Fruits &amp; Veggies</Link></li>
                          <li><Link to="shop-product-right.html">Packaged Produce</Link></li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">Breakfast &amp; Dairy</Link>
                        <ul>
                          <li><Link to="shop-product-right.html">Milk &amp; Flavoured Milk</Link></li>
                          <li><Link to="shop-product-right.html">Butter and Margarine</Link></li>
                          <li><Link to="shop-product-right.html">Eggs Substitutes</Link></li>
                          <li><Link to="shop-product-right.html">Marmalades</Link></li>
                          <li><Link to="shop-product-right.html">Sour Cream</Link></li>
                          <li><Link to="shop-product-right.html">Cheese</Link></li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">Meat &amp; Seafood</Link>
                        <ul>
                          <li><Link to="shop-product-right.html">Breakfast Sausage</Link></li>
                          <li><Link to="shop-product-right.html">Dinner Sausage</Link></li>
                          <li><Link to="shop-product-right.html">Chicken</Link></li>
                          <li><Link to="shop-product-right.html">Sliced Deli Meat</Link></li>
                          <li><Link to="shop-product-right.html">Wild Caught Fillets</Link></li>
                          <li><Link to="shop-product-right.html">Crab and Shellfish</Link></li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-34">
                        <div className="menu-banner-wrap">
                          <Link to="shop-product-right.html"><img src="assets/imgs/banner/banner-menu.png" alt="Nest" /></Link>
                          <div className="menu-banner-content">
                            <h4>Hot deals</h4>
                            <h3>
                              Do not  miss<br />
                              Trending
                            </h3>
                            <div className="menu-banner-price">
                              <span className="new-price text-success">Save to 50%</span>
                            </div>
                            <div className="menu-banner-btn">
                              <Link to="shop-product-right.html">Shop now</Link>
                            </div>
                          </div>
                          <div className="menu-banner-discount">
                            <h3>
                              <span>25%</span>
                              off
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="blog-category-grid.html">Blog <i className="fi-rs-angle-down" /></Link>
                    <ul className="sub-menu">
                      <li><Link to="blog-category-grid.html">Blog Category Grid</Link></li>
                      <li><Link to="blog-category-list.html">Blog Category List</Link></li>
                      <li><Link to="blog-category-big.html">Blog Category Big</Link></li>
                      <li><Link to="blog-category-fullwidth.html">Blog Category Wide</Link></li>
                      <li>
                        <Link to="#">Single Post <i className="fi-rs-angle-right" /></Link>
                        <ul className="level-menu level-menu-modify">
                          <li><Link to="blog-post-left.html">Left Sidebar</Link></li>
                          <li><Link to="blog-post-right.html">Right Sidebar</Link></li>
                          <li><Link to="blog-post-fullwidth.html">No Sidebar</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Pages <i className="fi-rs-angle-down" /></Link>
                    <ul className="sub-menu">
                      <li><Link to="page-about.html">About Us</Link></li>
                      <li><Link to="page-contact.html">Contact</Link></li>
                      <li><Link to="page-account.html">My Account</Link></li>
                      <li><Link to="page-login.html">Login</Link></li>
                      <li><Link to="page-register.html">Register</Link></li>
                      <li><Link to="page-forgot-password.html">Forgot password</Link></li>
                      <li><Link to="page-reset-password.html">Reset password</Link></li>
                      <li><Link to="page-purchase-guide.html">Purchase Guide</Link></li>
                      <li><Link to="page-privacy-policy.html">Privacy Policy</Link></li>
                      <li><Link to="page-terms.html">Terms of Service</Link></li>
                      <li><Link to="page-404.html">404 Page</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="page-contact.html">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="hotline d-none d-lg-flex">
            <img src="assets/imgs/theme/icons/icon-headphone.svg" alt="hotline" />
            <p>1900 - 888<span>24/7 Support Center</span></p>
          </div>
          <div className="header-action-icon-2 d-block d-lg-none">
            <div className="burger-icon burger-icon-white">
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </div>
          </div>
          <div className="header-action-right d-block d-lg-none">
            <div className="header-action-2">
              <div className="header-action-icon-2">
                <Link to="shop-wishlist.html">
                  <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                  <span className="pro-count white">4</span>
                </Link>
              </div>
              <div className="header-action-icon-2">
                <a className="mini-cart-icon" href="#">
                  <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                  <span className="pro-count white">2</span>
                </Link>
                <div className="cart-dropdown-wrap cart-dropdown-hm2">
                  <ul>
                    <li>
                      <div className="shopping-cart-img">
                        <Link to="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" /></Link>
                      </div>
                      <div className="shopping-cart-title">
                        <h4><Link to="shop-product-right.html">Plain Striola Shirts</Link></h4>
                        <h3><span>1 × </span>$800.00</h3>
                      </div>
                      <div className="shopping-cart-delete">
                        <Link to="#"><i className="fi-rs-cross-small" /></Link>
                      </div>
                    </li>
                    <li>
                      <div className="shopping-cart-img">
                        <Link to="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-4.jpg" /></Link>
                      </div>
                      <div className="shopping-cart-title">
                        <h4><Link to="shop-product-right.html">Macbook Pro 2022</Link></h4>
                        <h3><span>1 × </span>$3500.00</h3>
                      </div>
                      <div className="shopping-cart-delete">
                        <Link to="#"><i className="fi-rs-cross-small" /></Link>
                      </div>
                    </li>
                  </ul>
                  <div className="shopping-cart-footer">
                    <div className="shopping-cart-total">
                      <h4>Total <span>$383.00</span></h4>
                    </div>
                    <div className="shopping-cart-button">
                      <Link to="shop-cart.html">View cart</Link>
                      <Link to="shop-checkout.html">Checkout</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* End Header  */}
  <div className="mobile-header-active mobile-header-wrapper-style">
    <div className="mobile-header-wrapper-inner">
      <div className="mobile-header-top">
        <div className="mobile-header-logo">
          <Link to="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></Link>
        </div>
        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
          <button className="close-style search-close">
            <i className="icon-top" />
            <i className="icon-bottom" />
          </button>
        </div>
      </div>
      <div className="mobile-header-content-area">
        <div className="mobile-search search-style-3 mobile-header-border">
          <form action="#">
            <input type="text" placeholder="Search for items…" />
            <button type="submit"><i className="fi-rs-search" /></button>
          </form>
        </div>
        <div className="mobile-menu-wrap mobile-header-border">
          {/* mobile menu start */}
          <nav>
            <ul className="mobile-menu font-heading">
              <li className="menu-item-has-children">
                <Link to="index.html">Home</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="shop-grid-right.html">shop</Link>
                <ul className="dropdown">
                  <li><Link to="shop-grid-right.html">Shop Grid – Right Sidebar</Link></li>
                  <li><Link to="shop-grid-left.html">Shop Grid – Left Sidebar</Link></li>
                  <li><Link to="shop-list-right.html">Shop List – Right Sidebar</Link></li>
                  <li><Link to="shop-list-left.html">Shop List – Left Sidebar</Link></li>
                  <li><Link to="shop-fullwidth.html">Shop - Wide</Link></li>
                  <li className="menu-item-has-children">
                    <Link to="#">Single Product</Link>
                    <ul className="dropdown">
                      <li><Link to="shop-product-right.html">Product – Right Sidebar</Link></li>
                      <li><Link to="shop-product-left.html">Product – Left Sidebar</Link></li>
                      <li><Link to="shop-product-full.html">Product – No sidebar</Link></li>
                      <li><Link to="shop-product-vendor.html">Product – Vendor Infor</Link></li>
                    </ul>
                  </li>
                  <li><Link to="shop-filter.html">Shop – Filter</Link></li>
                  <li><Link to="shop-wishlist.html">Shop – Wishlist</Link></li>
                  <li><Link to="shop-cart.html">Shop – Cart</Link></li>
                  <li><Link to="shop-checkout.html">Shop – Checkout</Link></li>
                  <li><Link to="shop-compare.html">Shop – Compare</Link></li>
                  <li className="menu-item-has-children">
                    <Link to="#">Shop Invoice</Link>
                    <ul className="dropdown">
                      <li><Link to="shop-invoice-1.html">Shop Invoice 1</Link></li>
                      <li><Link to="shop-invoice-2.html">Shop Invoice 2</Link></li>
                      <li><Link to="shop-invoice-3.html">Shop Invoice 3</Link></li>
                      <li><Link to="shop-invoice-4.html">Shop Invoice 4</Link></li>
                      <li><Link to="shop-invoice-5.html">Shop Invoice 5</Link></li>
                      <li><Link to="shop-invoice-6.html">Shop Invoice 6</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">Mega menu</Link>
                <ul className="dropdown">
                  <li className="menu-item-has-children">
                    <Link to="#">Women's Fashion</Link>
                    <ul className="dropdown">
                      <li><Link to="shop-product-right.html">Dresses</Link></li>
                      <li><Link to="shop-product-right.html">Blouses &amp; Shirts</Link></li>
                      <li><Link to="shop-product-right.html">Hoodies &amp; Sweatshirts</Link></li>
                      <li><Link to="shop-product-right.html">Women's Sets</Link></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">Men's Fashion</Link>
                    <ul className="dropdown">
                      <li><Link to="shop-product-right.html">Jackets</Link></li>
                      <li><Link to="shop-product-right.html">Casual Faux Leather</Link></li>
                      <li><Link to="shop-product-right.html">Genuine Leather</Link></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">Technology</Link>
                    <ul className="dropdown">
                      <li><Link to="shop-product-right.html">Gaming Laptops</Link></li>
                      <li><Link to="shop-product-right.html">Ultraslim Laptops</Link></li>
                      <li><Link to="shop-product-right.html">Tablets</Link></li>
                      <li><Link to="shop-product-right.html">Laptop Accessories</Link></li>
                      <li><Link to="shop-product-right.html">Tablet Accessories</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="blog-category-fullwidth.html">Blog</Link>
                <ul className="dropdown">
                  <li><Link to="blog-category-grid.html">Blog Category Grid</Link></li>
                  <li><Link to="blog-category-list.html">Blog Category List</Link></li>
                  <li><Link to="blog-category-big.html">Blog Category Big</Link></li>
                  <li><Link to="blog-category-fullwidth.html">Blog Category Wide</Link></li>
                  <li className="menu-item-has-children">
                    <Link to="#">Single Product Layout</Link>
                    <ul className="dropdown">
                      <li><Link to="blog-post-left.html">Left Sidebar</Link></li>
                      <li><Link to="blog-post-right.html">Right Sidebar</Link></li>
                      <li><Link to="blog-post-fullwidth.html">No Sidebar</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">Pages</Link>
                <ul className="dropdown">
                  <li><Link to="page-about.html">About Us</Link></li>
                  <li><Link to="page-contact.html">Contact</Link></li>
                  <li><Link to="page-account.html">My Account</Link></li>
                  <li><Link to="page-login.html">Login</Link></li>
                  <li><Link to="page-register.html">Register</Link></li>
                  <li><Link to="page-forgot-password.html">Forgot password</Link></li>
                  <li><Link to="page-reset-password.html">Reset password</Link></li>
                  <li><Link to="page-purchase-guide.html">Purchase Guide</Link></li>
                  <li><Link to="page-privacy-policy.html">Privacy Policy</Link></li>
                  <li><Link to="page-terms.html">Terms of Service</Link></li>
                  <li><Link to="page-404.html">404 Page</Link></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">Language</Link>
                <ul className="dropdown">
                  <li><Link to="#">English</Link></li>
                  <li><Link to="#">French</Link></li>
                  <li><Link to="#">German</Link></li>
                  <li><Link to="#">Spanish</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* mobile menu end */}
        </div>
        <div className="mobile-header-info-wrap">
          <div className="single-mobile-header-info">
            <Link to="page-contact.html"><i className="fi-rs-marker" /> Our location </Link>
          </div>
          <div className="single-mobile-header-info">
            <Link to="page-login.html"><i className="fi-rs-user" />Log In / Sign Up </Link>
          </div>
          <div className="single-mobile-header-info">
            <Link to="#"><i className="fi-rs-headphones" />(+01) - 2345 - 6789 </Link>
          </div>
        </div>
        <div className="mobile-social-icon mb-50">
          <h6 className="mb-15">Follow Us</h6>
          <Link to="#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt /></Link>
          <Link to="#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt /></Link>
          <Link to="#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt /></Link>
          <Link to="#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt /></Link>
          <Link to="#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt /></Link>
        </div>
        <div className="site-copyright">Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.</div>
      </div>
    </div>
  </div>
  {/*End header*/}
  <main className="main page-404">
    <div className="page-content pt-150 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
            <p className="mb-20"><img src="assets/imgs/page/page-404.png" alt className="hover-up" /></p>
            <h1 className="display-2 mb-30">Page Not Found</h1>
            <p className="font-lg text-grey-700 mb-30">
              The link you clicked may be broken or the page may have been removed.<br />
              visit the <Link to="index.html"> <span> Homepage</span></Link> or <Link to="page-contact.html"><span>Contact us</span></Link> about the problem
            </p>
            <div className="search-form">
              <form action="#">
                <input type="text" placeholder="Search…" />
                <button type="submit"><i className="fi-rs-search" /></button>
              </form>
            </div>
            <a className="btn btn-default submit-auto-width font-xs hover-up mt-30" href="index.html"><i className="fi-rs-home mr-5" /> Back To Home Page</Link>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer className="main">
    <section className="newsletter mb-15 wow animate__animated animate__fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="position-relative newsletter-inner">
              <div className="newsletter-content">
                <h2 className="mb-20">
                  Stay home &amp; get your daily <br />
                  needs from our shop
                </h2>
                <p className="mb-45">Start You'r Daily Shopping with <span className="text-brand">Nest Mart</span></p>
                <form className="form-subcriber d-flex">
                  <input type="email" placeholder="Your emaill address" />
                  <button className="btn" type="submit">Subscribe</button>
                </form>
              </div>
              <img src="assets/imgs/banner/banner-9.png" alt="newsletter" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="featured section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
            <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay={0}>
              <div className="banner-icon">
                <img src="assets/imgs/theme/icons/icon-1.svg" alt />
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
                <img src="assets/imgs/theme/icons/icon-2.svg" alt />
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
                <img src="assets/imgs/theme/icons/icon-3.svg" alt />
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
                <img src="assets/imgs/theme/icons/icon-4.svg" alt />
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
                <img src="assets/imgs/theme/icons/icon-5.svg" alt />
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
                <img src="assets/imgs/theme/icons/icon-6.svg" alt />
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
                <Link to="index.html" className="mb-15"><img src="assets/imgs/theme/logo.svg" alt="logo" /></Link>
                <p className="font-lg text-heading">Awesome grocery store website template</p>
              </div>
              <ul className="contact-infor">
                <li><img src="assets/imgs/theme/icons/icon-location.svg" alt /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                <li><img src="assets/imgs/theme/icons/icon-email-2.svg" alt /><strong>Email:</strong><span>sale@Nest.com</span></li>
                <li><img src="assets/imgs/theme/icons/icon-clock.svg" alt /><strong>Hours:</strong><span>10:00 - 18:00, Mon - Sat</span></li>
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
          <p className="font-sm mb-0">© 2022, <strong className="text-brand">Nest</strong> - HTML Ecommerce Template <br />All rights reserved</p>
        </div>
        <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
          <div className="hotline d-lg-inline-flex">
            <img src="assets/imgs/theme/icons/phone-call.svg" alt="hotline" />
            <p>1900 - 8888<span>24/7 Support Center</span></p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
          <div className="mobile-social-icon">
            <h6>Follow Us</h6>
            <Link to="#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt /></Link>
            <Link to="#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt /></Link>
            <Link to="#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt /></Link>
            <Link to="#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt /></Link>
            <Link to="#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt /></Link>
          </div>
          <p className="font-sm">Up to 15% discount on your first subscribe</p>
        </div>
      </div>
    </div>
  </footer>
  {/* Preloader Start */}
  <div id="preloader-active">
    <div className="preloader d-flex align-items-center justify-content-center">
      <div className="preloader-inner position-relative">
        <div className="text-center">
          <img src="assets/imgs/theme/loading.gif" alt />
        </div>
      </div>
    </div>
  </div>
</div>

      
    </>
  )
}

export default PageNotFound
