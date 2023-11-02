import { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
 
  
  
    try {
      // console.log("jnjnjn");
      const res = await axios.post("/api/v1/auth/login", {
        username,
      
        password,
     
      });
      console.log(res.data);
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };


  return (
    <>
   <div className="col-lg-6 col-md-8">
  <div className="login_wrap widget-taber-content background-white">
    <div className="padding_eight_all bg-white">
      <div className="heading_s1">
        <h1 className="mb-5">Login</h1>
        <p className="mb-30">Do not  have an account? <Link to="/register">Create here</Link></p>
      </div>
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" required name="email" placeholder="Username *" value={username}  onChange={(e)=> setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <input required type="password" name="password" placeholder="Your password *" value={password}  onChange={(e)=> setPassword(e.target.value)}/>
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
          <Link className="text-muted" to="/forgot">Forgot password?</Link>
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
