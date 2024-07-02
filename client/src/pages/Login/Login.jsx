import React, {useState} from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";

const Login = () => {
  const [signState, setsignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    if(signState === "Sign In"){
      await login(email, password);
    }else{
      await signup(name, email, password);
    }
  }
  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState === "Sign Up"?  
          <input value={name} onChange={(e) => {setName(e.target.value)}} type="text"  placeholder = "Your name"/>: <></> }
         
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder = "Email"/>
          <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder = "password"/>
          <button onClick={user_auth} type= 'submit'>{signState} </button>
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
