
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast";
import {Link} from "react-router-dom"
import facebook from "../../assets/imgs/theme/icons/logo-facebook.svg"
import google from "../../assets/imgs/theme/icons/logo-google.svg"
import apple from "../../assets/imgs/theme/icons/logo-apple.svg"
import { useAuth } from "../../context/userAuth";

const Register = () => {

  const [username,setUsername ] = useState("")
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const {auth,setAuth} = useAuth()



 
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // console.log("jnjnjn");
    const res = await axios.post("/api/v1/auth/register", {
      username,
      email,
      password,
    confirmPassword
    });
    console.log(res.data);
    if (res && res.data.success) {
      localStorage.setItem("auth",JSON.stringify({
        user:res.data.user,
        token:res.data.token
      }))
      setAuth({
        user:res.data.user,
        token:res.data.token
      })

      toast.success(res.data && res.data.message);
      navigate("/login");
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};

  return <>

<div className="page-content pt-150 pb-150">
  <div className="container">
    <div className="row">
      <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <div className="login_wrap widget-taber-content background-white">
              <div className="padding_eight_all bg-white">
                <div className="heading_s1">
                  <h1 className="mb-5">Create an Account</h1>
                  <p className="mb-30">Already have an account? <Link to="/login">Login</Link></p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" required name="username" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} autoFocus  />
                  </div>
                  <div className="form-group">
                    <input type="text" required name="email" placeholder="Email"
                    value={email} onChange={(e)=>setEmail(e.target.value)} autoFocus  />
                  </div>
                  <div className="form-group">
                    <input required type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} autoFocus  />
                  </div>
                  <div className="form-group">
                    <input required type="password" name="password" placeholder="Confirm password" 
                    value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} autoFocus />
                  </div>
                  <div className="login_footer form-group">
                    <div className="chek-form">
                      <input type="text" required name="number" placeholder="Security code *" />
                    </div>
                    <span className="security-code">
                      <b className="text-new">8</b>
                      <b className="text-hot">6</b>
                      <b className="text-sale">7</b>
                      <b className="text-best">5</b>
                    </span>
                  </div>
                  {/* <div className="payment_option mb-50">
                    <div className="custome-radio">
                      <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios3" defaultChecked />
                      <label className="form-check-label" htmlFor="exampleRadios3" data-bs-toggle="collapse" data-target="#bankTranfer" aria-controls="bankTranfer">I am a customer</label>
                    </div>
                    <div className="custome-radio">
                      <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios4" defaultChecked />
                      <label className="form-check-label" htmlFor="exampleRadios4" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">I am a vendor</label>
                    </div>
                  </div> */}
                  <div className="login_footer form-group mb-50">
                    <div className="chek-form">
                      <div className="custome-checkbox">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12" defaultValue />
                        <label className="form-check-label" htmlFor="exampleCheckbox12"><span>I agree to terms &amp; Policy.</span></label>
                      </div>
                    </div>
                    <Link to="page-privacy-policy.html"><i className="fi-rs-book-alt mr-5 text-muted" />Lean more</Link>
                  </div>
                  <div className="form-group mb-30">
                    <button type="submit" className="btn btn-fill-out btn-block hover-up font-weight-bold" name="login">Submit &amp; Register</button>
                  </div>
                  <p className="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pr-30 d-none d-lg-block">
            <div className="card-login mt-115">
              <Link to="#" className="social-login facebook-login">
                <img src={facebook} alt />
                <span>Continue with Facebook</span>
              </Link>
              <Link to="#" className="social-login google-login">
                <img src={google} alt />
                <span>Continue with Google</span>
              </Link>
              <Link to="#" className="social-login apple-login">
                <img src={apple} alt />
                <span>Continue with Apple</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  </>;
};

export default Register;
