import logo from "../../assets/imgs/theme/logo.svg"
import heart from '../../assets/imgs/theme/icons/icon-heart.svg'
import cartimg from '../../assets/imgs/theme/icons/icon-cart.svg'
import thumbnail from '../../assets/imgs/shop/thumbnail-3.jpg'
// import thumnnail2  from '../../assets/imgs/shop/thumbnail-2.jpg'
import  account from '../../assets/imgs/theme/icons/icon-user.svg'
import banner from '../../assets/imgs/banner/banner-menu.png'
import hulk  from  '../../assets/imgs/shop/thumbnail-4.jpg'
import cart from '../../assets/imgs/theme/icons/icon-cart.svg'
import headphone from '../../assets/imgs/theme/icons/icon-headphone.svg'
// "svgInject" alt="Nest" src="assets/imgs/theme/icons/icon-user.svg"
const Header = () => {
  return <>
 <div>
  <header className="header-area header-style-1 header-height-2">
   
    <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
      <div className="container">
        <div className="header-wrap">
          <div className="logo logo-width-1">
            <a href="index.html"><img src={logo}alt="logo" /></a>
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
                    <img className="svgInject" alt="Nest" src={heart} />
                    <span className="pro-count blue">6</span>
                  </a>
                  <a href="shop-wishlist.html"><span className="lable">Wishlist</span></a>
                </div>
                <div className="header-action-icon-2">
                  <a className="mini-cart-icon" href="shop-cart.html">
                    <img alt="Nest" src={heart} />
                    <span className="pro-count blue">2</span>
                  </a>
                  <a href="shop-cart.html"><span className="lable">Cart</span></a>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html"><img alt="Nest" src={thumbnail} /></a>
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
                          <a href="shop-product-right.html"><img alt="Nest" src={cartimg}/></a>
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
                    <img className="svgInject" alt="Nest" src={account} />
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
            <a href="index.html"><img src={logo} alt="logo" /></a>
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
                          <a href="shop-product-right.html"><img src={banner} alt="Nest" /></a>
                          <div className="menu-banner-content">
                            <h4>Hot deals</h4>
                            <h3>
                              do not  miss<br />
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
            <img src={headphone} alt="hotline" />
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
                  <img alt="Nest" src={cart} />
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
                        <a href="shop-product-right.html"><img alt="Nest" src={hulk} /></a>
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
          <a href="index.html"><img src={logo} alt="logo" /></a>
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
</div>



  </>;
};

export default Header;
