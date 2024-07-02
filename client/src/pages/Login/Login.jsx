import React, {useState} from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {
  const [signState, setsignState] = useState("Sign In");
  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState === "Sign Up"?  <input type="text"  placeholder = "Your name"/>: <></> }
         
          <input type="text" placeholder = "Email"/>
          <input type="text" placeholder = "password"/>
          <button>{signState} </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
 
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In"?  <p>New to netflix ?<span onClick={() => {setsignState("Sign Up")}}>Sign up now</span></p>:  <p>Already have account? <span onClick={() => {setsignState("Sign In")}}>Sign in now</span></p>
          }
         
         
        </div>
      </div>
    </div>
  );
};

export default Login;
