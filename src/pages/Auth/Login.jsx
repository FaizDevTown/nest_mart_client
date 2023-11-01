

const Login = () => {
  return (
    <>
   <div className="col-lg-6 col-md-8">
  <div className="login_wrap widget-taber-content background-white">
    <div className="padding_eight_all bg-white">
      <div className="heading_s1">
        <h1 className="mb-5">Login</h1>
        <p className="mb-30">Do not  have an account? <a href="page-register.html">Create here</a></p>
      </div>
      <form method="post">
        <div className="form-group">
          <input type="text" required name="email" placeholder="Username or Email *" />
        </div>
        <div className="form-group">
          <input required type="password" name="password" placeholder="Your password *" />
        </div>
        <div className="login_footer form-group">
          <div className="chek-form">
            <input type="text" required name="email" placeholder="Security code *" />
          </div>
          <span className="security-code">
            <b className="text-new">8</b>
            <b className="text-hot">6</b>
            <b className="text-sale">7</b>
            <b className="text-best">5</b>
          </span>
        </div>
        <div className="login_footer form-group mb-50">
          <div className="chek-form">
            <div className="custome-checkbox">
              <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" defaultValue />
              <label className="form-check-label" htmlFor="exampleCheckbox1"><span>Remember me</span></label>
            </div>
          </div>
          <a className="text-muted" href="#">Forgot password?</a>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-heading btn-block hover-up" name="login">Log in</button>
        </div>
      </form>
    </div>
  </div>
</div>

      
    </>
  )
}

export default Login