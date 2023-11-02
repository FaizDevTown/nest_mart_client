

const BannerFooter = () => {
  return (
    <>
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
            <p className="mb-45">Start You are  Daily Shopping with <span className="text-brand">Nest Mart</span></p>
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

      
    </>
  )
}

export default BannerFooter
