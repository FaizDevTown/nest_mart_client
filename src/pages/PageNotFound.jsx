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
                <h3 className="title-detail"><a href="shop-product-right.html" className="text-heading">Seeds of Change Organic Quinoa, Brown</a></h3>
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
                    <a href="#" className="qty-down"><i className="fi-rs-angle-small-down" /></a>
                    <input type="text" name="quantity" className="qty-val" defaultValue={1} min={1} />
                    <a href="#" className="qty-up"><i className="fi-rs-angle-small-up" /></a>
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
                <li><a href="page-account.html">My Cart</a></li>
                <li><a href="shop-wishlist.html">Checkout</a></li>
                <li><a href="shop-order.html">Order Tracking</a></li>
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
                  <a className="language-dropdown-active" href="#">English <i className="fi-rs-angle-small-down" /></a>
                  <ul className="language-dropdown">
                    <li>
                      <a href="#"><img src="assets/imgs/theme/flag-fr.png" alt />Français</a>
                    </li>
                    <li>
                      <a href="#"><img src="assets/imgs/theme/flag-dt.png" alt />Deutsch</a>
                    </li>
                    <li>
                      <a href="#"><img src="assets/imgs/theme/flag-ru.png" alt />Pусский</a>
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
            <a href="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
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
                  <a href="shop-wishlist.html">
                    <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                    <span className="pro-count blue">6</span>
                  </a>
                  <a href="shop-wishlist.html"><span className="lable">Wishlist</span></a>
                </div>
                <div className="header-action-icon-2">
                  <a className="mini-cart-icon" href="shop-cart.html">
                    <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                    <span className="pro-count blue">2</span>
                  </a>
                  <a href="shop-cart.html"><span className="lable">Cart</span></a>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" /></a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4><a href="shop-product-right.html">Daisy Casual Bag</a></h4>
                          <h4><span>1 × </span>$800.00</h4>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#"><i className="fi-rs-cross-small" /></a>
                        </div>
                      </li>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-2.jpg" /></a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4><a href="shop-product-right.html">Corduroy Shirts</a></h4>
                          <h4><span>1 × </span>$3200.00</h4>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#"><i className="fi-rs-cross-small" /></a>
                        </div>
                      </li>
                    </ul>
                    <div className="shopping-cart-footer">
                      <div className="shopping-cart-total">
                        <h4>Total <span>$4000.00</span></h4>
                      </div>
                      <div className="shopping-cart-button">
                        <a href="shop-cart.html" className="outline">View cart</a>
                        <a href="shop-checkout.html">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-action-icon-2">
                  <a href="page-account.html">
                    <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/icon-user.svg" />
                  </a>
                  <a href="page-account.html"><span className="lable ml-0">Account</span></a>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                    <ul>
                      <li>
                        <a href="page-account.html"><i className="fi fi-rs-user mr-10" />My Account</a>
                      </li>
                      <li>
                        <a href="page-account.html"><i className="fi fi-rs-location-alt mr-10" />Order Tracking</a>
                      </li>
                      <li>
                        <a href="page-account.html"><i className="fi fi-rs-label mr-10" />My Voucher</a>
                      </li>
                      <li>
                        <a href="shop-wishlist.html"><i className="fi fi-rs-heart mr-10" />My Wishlist</a>
                      </li>
                      <li>
                        <a href="page-account.html"><i className="fi fi-rs-settings-sliders mr-10" />Setting</a>
                      </li>
                      <li>
                        <a href="page-login.html"><i className="fi fi-rs-sign-out mr-10" />Sign out</a>
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
            <a href="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
          </div>
          <div className="header-nav d-none d-lg-flex">
            <div className="main-categori-wrap d-none d-lg-block">
              <a className="categories-button-active" href="#">
                <span className="fi-rs-apps" />   All Categories
                <i className="fi-rs-angle-down" />
              </a>
              <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                <div className="d-flex categori-dropdown-inner">
                  <ul>
                    <li>
                      <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-1.svg" alt />Milks and Dairies</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-2.svg" alt />Clothing &amp; beauty</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-3.svg" alt />Pet Foods &amp; Toy</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-4.svg" alt />Baking material</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-5.svg" alt />Fresh Fruit</a>
                    </li>
                  </ul>
                  <ul className="end">
                    <li>
                      <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-6.svg" alt />Wines &amp; Drinks</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-7.svg" alt />Fresh Seafood</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-8.svg" alt />Fast food</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-9.svg" alt />Vegetables</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-10.svg" alt />Bread and Juice</a>
                    </li>
                  </ul>
                </div>
                <div className="more_slide_open" style={{display: 'none'}}>
                  <div className="d-flex categori-dropdown-inner">
                    <ul>
                      <li>
                        <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-1.svg" alt />Milks and Dairies</a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-2.svg" alt />Clothing &amp; beauty</a>
                      </li>
                    </ul>
                    <ul className="end">
                      <li>
                        <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-3.svg" alt />Wines &amp; Drinks</a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-4.svg" alt />Fresh Seafood</a>
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
                    <a className="active" href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="page-about.html">About</a>
                  </li>
                  <li>
                    <a href="shop-grid-right.html">Shop <i className="fi-rs-angle-down" /></a>
                    <ul className="sub-menu">
                      <li><a href="shop-grid-right.html">Shop Grid – Right Sidebar</a></li>
                      <li><a href="shop-grid-left.html">Shop Grid – Left Sidebar</a></li>
                      <li><a href="shop-list-right.html">Shop List – Right Sidebar</a></li>
                      <li><a href="shop-list-left.html">Shop List – Left Sidebar</a></li>
                      <li><a href="shop-fullwidth.html">Shop - Wide</a></li>
                      <li>
                        <a href="#">Single Product <i className="fi-rs-angle-right" /></a>
                        <ul className="level-menu">
                          <li><a href="shop-product-right.html">Product – Right Sidebar</a></li>
                          <li><a href="shop-product-left.html">Product – Left Sidebar</a></li>
                          <li><a href="shop-product-full.html">Product – No sidebar</a></li>
                          <li><a href="shop-product-vendor.html">Product – Vendor Info</a></li>
                        </ul>
                      </li>
                      <li><a href="shop-filter.html">Shop – Filter</a></li>
                      <li><a href="shop-wishlist.html">Shop – Wishlist</a></li>
                      <li><a href="shop-cart.html">Shop – Cart</a></li>
                      <li><a href="shop-checkout.html">Shop – Checkout</a></li>
                      <li><a href="shop-compare.html">Shop – Compare</a></li>
                      <li>
                        <a href="#">Shop Invoice<i className="fi-rs-angle-right" /></a>
                        <ul className="level-menu">
                          <li><a href="shop-invoice-1.html">Shop Invoice 1</a></li>
                          <li><a href="shop-invoice-2.html">Shop Invoice 2</a></li>
                          <li><a href="shop-invoice-3.html">Shop Invoice 3</a></li>
                          <li><a href="shop-invoice-4.html">Shop Invoice 4</a></li>
                          <li><a href="shop-invoice-5.html">Shop Invoice 5</a></li>
                          <li><a href="shop-invoice-6.html">Shop Invoice 6</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Vendors <i className="fi-rs-angle-down" /></a>
                    <ul className="sub-menu">
                      <li><a href="vendors-grid.html">Vendors Grid</a></li>
                      <li><a href="vendors-list.html">Vendors List</a></li>
                      <li><a href="vendor-details-1.html">Vendor Details 01</a></li>
                      <li><a href="vendor-details-2.html">Vendor Details 02</a></li>
                      <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                      <li><a href="vendor-guide.html">Vendor Guide</a></li>
                    </ul>
                  </li>
                  <li className="position-static">
                    <a href="#">Mega menu <i className="fi-rs-angle-down" /></a>
                    <ul className="mega-menu">
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">Fruit &amp; Vegetables</a>
                        <ul>
                          <li><a href="shop-product-right.html">Meat &amp; Poultry</a></li>
                          <li><a href="shop-product-right.html">Fresh Vegetables</a></li>
                          <li><a href="shop-product-right.html">Herbs &amp; Seasonings</a></li>
                          <li><a href="shop-product-right.html">Cuts &amp; Sprouts</a></li>
                          <li><a href="shop-product-right.html">Exotic Fruits &amp; Veggies</a></li>
                          <li><a href="shop-product-right.html">Packaged Produce</a></li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">Breakfast &amp; Dairy</a>
                        <ul>
                          <li><a href="shop-product-right.html">Milk &amp; Flavoured Milk</a></li>
                          <li><a href="shop-product-right.html">Butter and Margarine</a></li>
                          <li><a href="shop-product-right.html">Eggs Substitutes</a></li>
                          <li><a href="shop-product-right.html">Marmalades</a></li>
                          <li><a href="shop-product-right.html">Sour Cream</a></li>
                          <li><a href="shop-product-right.html">Cheese</a></li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">Meat &amp; Seafood</a>
                        <ul>
                          <li><a href="shop-product-right.html">Breakfast Sausage</a></li>
                          <li><a href="shop-product-right.html">Dinner Sausage</a></li>
                          <li><a href="shop-product-right.html">Chicken</a></li>
                          <li><a href="shop-product-right.html">Sliced Deli Meat</a></li>
                          <li><a href="shop-product-right.html">Wild Caught Fillets</a></li>
                          <li><a href="shop-product-right.html">Crab and Shellfish</a></li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-34">
                        <div className="menu-banner-wrap">
                          <a href="shop-product-right.html"><img src="assets/imgs/banner/banner-menu.png" alt="Nest" /></a>
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
                              <a href="shop-product-right.html">Shop now</a>
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
                    <a href="blog-category-grid.html">Blog <i className="fi-rs-angle-down" /></a>
                    <ul className="sub-menu">
                      <li><a href="blog-category-grid.html">Blog Category Grid</a></li>
                      <li><a href="blog-category-list.html">Blog Category List</a></li>
                      <li><a href="blog-category-big.html">Blog Category Big</a></li>
                      <li><a href="blog-category-fullwidth.html">Blog Category Wide</a></li>
                      <li>
                        <a href="#">Single Post <i className="fi-rs-angle-right" /></a>
                        <ul className="level-menu level-menu-modify">
                          <li><a href="blog-post-left.html">Left Sidebar</a></li>
                          <li><a href="blog-post-right.html">Right Sidebar</a></li>
                          <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages <i className="fi-rs-angle-down" /></a>
                    <ul className="sub-menu">
                      <li><a href="page-about.html">About Us</a></li>
                      <li><a href="page-contact.html">Contact</a></li>
                      <li><a href="page-account.html">My Account</a></li>
                      <li><a href="page-login.html">Login</a></li>
                      <li><a href="page-register.html">Register</a></li>
                      <li><a href="page-forgot-password.html">Forgot password</a></li>
                      <li><a href="page-reset-password.html">Reset password</a></li>
                      <li><a href="page-purchase-guide.html">Purchase Guide</a></li>
                      <li><a href="page-privacy-policy.html">Privacy Policy</a></li>
                      <li><a href="page-terms.html">Terms of Service</a></li>
                      <li><a href="page-404.html">404 Page</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-contact.html">Contact</a>
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
                <a href="shop-wishlist.html">
                  <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                  <span className="pro-count white">4</span>
                </a>
              </div>
              <div className="header-action-icon-2">
                <a className="mini-cart-icon" href="#">
                  <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                  <span className="pro-count white">2</span>
                </a>
                <div className="cart-dropdown-wrap cart-dropdown-hm2">
                  <ul>
                    <li>
                      <div className="shopping-cart-img">
                        <a href="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" /></a>
                      </div>
                      <div className="shopping-cart-title">
                        <h4><a href="shop-product-right.html">Plain Striola Shirts</a></h4>
                        <h3><span>1 × </span>$800.00</h3>
                      </div>
                      <div className="shopping-cart-delete">
                        <a href="#"><i className="fi-rs-cross-small" /></a>
                      </div>
                    </li>
                    <li>
                      <div className="shopping-cart-img">
                        <a href="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-4.jpg" /></a>
                      </div>
                      <div className="shopping-cart-title">
                        <h4><a href="shop-product-right.html">Macbook Pro 2022</a></h4>
                        <h3><span>1 × </span>$3500.00</h3>
                      </div>
                      <div className="shopping-cart-delete">
                        <a href="#"><i className="fi-rs-cross-small" /></a>
                      </div>
                    </li>
                  </ul>
                  <div className="shopping-cart-footer">
                    <div className="shopping-cart-total">
                      <h4>Total <span>$383.00</span></h4>
                    </div>
                    <div className="shopping-cart-button">
                      <a href="shop-cart.html">View cart</a>
                      <a href="shop-checkout.html">Checkout</a>
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
          <a href="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
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
                <a href="index.html">Home</a>
              </li>
              <li className="menu-item-has-children">
                <a href="shop-grid-right.html">shop</a>
                <ul className="dropdown">
                  <li><a href="shop-grid-right.html">Shop Grid – Right Sidebar</a></li>
                  <li><a href="shop-grid-left.html">Shop Grid – Left Sidebar</a></li>
                  <li><a href="shop-list-right.html">Shop List – Right Sidebar</a></li>
                  <li><a href="shop-list-left.html">Shop List – Left Sidebar</a></li>
                  <li><a href="shop-fullwidth.html">Shop - Wide</a></li>
                  <li className="menu-item-has-children">
                    <a href="#">Single Product</a>
                    <ul className="dropdown">
                      <li><a href="shop-product-right.html">Product – Right Sidebar</a></li>
                      <li><a href="shop-product-left.html">Product – Left Sidebar</a></li>
                      <li><a href="shop-product-full.html">Product – No sidebar</a></li>
                      <li><a href="shop-product-vendor.html">Product – Vendor Infor</a></li>
                    </ul>
                  </li>
                  <li><a href="shop-filter.html">Shop – Filter</a></li>
                  <li><a href="shop-wishlist.html">Shop – Wishlist</a></li>
                  <li><a href="shop-cart.html">Shop – Cart</a></li>
                  <li><a href="shop-checkout.html">Shop – Checkout</a></li>
                  <li><a href="shop-compare.html">Shop – Compare</a></li>
                  <li className="menu-item-has-children">
                    <a href="#">Shop Invoice</a>
                    <ul className="dropdown">
                      <li><a href="shop-invoice-1.html">Shop Invoice 1</a></li>
                      <li><a href="shop-invoice-2.html">Shop Invoice 2</a></li>
                      <li><a href="shop-invoice-3.html">Shop Invoice 3</a></li>
                      <li><a href="shop-invoice-4.html">Shop Invoice 4</a></li>
                      <li><a href="shop-invoice-5.html">Shop Invoice 5</a></li>
                      <li><a href="shop-invoice-6.html">Shop Invoice 6</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Mega menu</a>
                <ul className="dropdown">
                  <li className="menu-item-has-children">
                    <a href="#">Women's Fashion</a>
                    <ul className="dropdown">
                      <li><a href="shop-product-right.html">Dresses</a></li>
                      <li><a href="shop-product-right.html">Blouses &amp; Shirts</a></li>
                      <li><a href="shop-product-right.html">Hoodies &amp; Sweatshirts</a></li>
                      <li><a href="shop-product-right.html">Women's Sets</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Men's Fashion</a>
                    <ul className="dropdown">
                      <li><a href="shop-product-right.html">Jackets</a></li>
                      <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                      <li><a href="shop-product-right.html">Genuine Leather</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Technology</a>
                    <ul className="dropdown">
                      <li><a href="shop-product-right.html">Gaming Laptops</a></li>
                      <li><a href="shop-product-right.html">Ultraslim Laptops</a></li>
                      <li><a href="shop-product-right.html">Tablets</a></li>
                      <li><a href="shop-product-right.html">Laptop Accessories</a></li>
                      <li><a href="shop-product-right.html">Tablet Accessories</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="blog-category-fullwidth.html">Blog</a>
                <ul className="dropdown">
                  <li><a href="blog-category-grid.html">Blog Category Grid</a></li>
                  <li><a href="blog-category-list.html">Blog Category List</a></li>
                  <li><a href="blog-category-big.html">Blog Category Big</a></li>
                  <li><a href="blog-category-fullwidth.html">Blog Category Wide</a></li>
                  <li className="menu-item-has-children">
                    <a href="#">Single Product Layout</a>
                    <ul className="dropdown">
                      <li><a href="blog-post-left.html">Left Sidebar</a></li>
                      <li><a href="blog-post-right.html">Right Sidebar</a></li>
                      <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="dropdown">
                  <li><a href="page-about.html">About Us</a></li>
                  <li><a href="page-contact.html">Contact</a></li>
                  <li><a href="page-account.html">My Account</a></li>
                  <li><a href="page-login.html">Login</a></li>
                  <li><a href="page-register.html">Register</a></li>
                  <li><a href="page-forgot-password.html">Forgot password</a></li>
                  <li><a href="page-reset-password.html">Reset password</a></li>
                  <li><a href="page-purchase-guide.html">Purchase Guide</a></li>
                  <li><a href="page-privacy-policy.html">Privacy Policy</a></li>
                  <li><a href="page-terms.html">Terms of Service</a></li>
                  <li><a href="page-404.html">404 Page</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Language</a>
                <ul className="dropdown">
                  <li><a href="#">English</a></li>
                  <li><a href="#">French</a></li>
                  <li><a href="#">German</a></li>
                  <li><a href="#">Spanish</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* mobile menu end */}
        </div>
        <div className="mobile-header-info-wrap">
          <div className="single-mobile-header-info">
            <a href="page-contact.html"><i className="fi-rs-marker" /> Our location </a>
          </div>
          <div className="single-mobile-header-info">
            <a href="page-login.html"><i className="fi-rs-user" />Log In / Sign Up </a>
          </div>
          <div className="single-mobile-header-info">
            <a href="#"><i className="fi-rs-headphones" />(+01) - 2345 - 6789 </a>
          </div>
        </div>
        <div className="mobile-social-icon mb-50">
          <h6 className="mb-15">Follow Us</h6>
          <a href="#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt /></a>
          <a href="#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt /></a>
          <a href="#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt /></a>
          <a href="#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt /></a>
          <a href="#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt /></a>
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
              visit the <a href="index.html"> <span> Homepage</span></a> or <a href="page-contact.html"><span>Contact us</span></a> about the problem
            </p>
            <div className="search-form">
              <form action="#">
                <input type="text" placeholder="Search…" />
                <button type="submit"><i className="fi-rs-search" /></button>
              </form>
            </div>
            <a className="btn btn-default submit-auto-width font-xs hover-up mt-30" href="index.html"><i className="fi-rs-home mr-5" /> Back To Home Page</a>
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
                <a href="index.html" className="mb-15"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
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
              <li><a href="#">About Us</a></li>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Support Center</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
            <h4 className="widget-title">Account</h4>
            <ul className="footer-list mb-sm-5 mb-md-0">
              <li><a href="#">Sign In</a></li>
              <li><a href="#">View Cart</a></li>
              <li><a href="#">My Wishlist</a></li>
              <li><a href="#">Track My Order</a></li>
              <li><a href="#">Help Ticket</a></li>
              <li><a href="#">Shipping Details</a></li>
              <li><a href="#">Compare products</a></li>
            </ul>
          </div>
          <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
            <h4 className="widget-title">Corporate</h4>
            <ul className="footer-list mb-sm-5 mb-md-0">
              <li><a href="#">Become a Vendor</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Farm Business</a></li>
              <li><a href="#">Farm Careers</a></li>
              <li><a href="#">Our Suppliers</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Promotions</a></li>
            </ul>
          </div>
          <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
            <h4 className="widget-title">Popular</h4>
            <ul className="footer-list mb-sm-5 mb-md-0">
              <li><a href="#">Milk &amp; Flavoured Milk</a></li>
              <li><a href="#">Butter and Margarine</a></li>
              <li><a href="#">Eggs Substitutes</a></li>
              <li><a href="#">Marmalades</a></li>
              <li><a href="#">Sour Cream and Dips</a></li>
              <li><a href="#">Tea &amp; Kombucha</a></li>
              <li><a href="#">Cheese</a></li>
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
            <a href="#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt /></a>
            <a href="#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt /></a>
            <a href="#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt /></a>
            <a href="#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt /></a>
            <a href="#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt /></a>
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
