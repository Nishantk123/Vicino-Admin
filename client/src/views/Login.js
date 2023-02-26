import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForgetPassword = () => {
    history.push("/register");
  };
  const handleLogin = () =>{
    let data ={
      email,
      password
    }
    axios({
      method:"POST",
      url:process.env.REACT_APP_API+"/user/login",
      data: data
    })
    .then(
      res=>{
        if(res.data){
          window.sessionStorage.setItem("token",res.data.token);
          window.sessionStorage.setItem("user_data",JSON.stringify(res.data))
          history.push("/dashboard")

        }
        
      }
    )
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-3 bg-dark left-side login_left_side d-none d-md-block d-lg-block">
          {/* <img className="register-logo" src={logo} /> */}
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-5  top_margin">
              <h1 className="text-gray text-center my-3">Login</h1>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" onChange={(e)=>setEmail(e.target.value)}/>
                {/* <label for="floatingInput">Mobile/Email</label> */}
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control "
                  id="floatingInput"
                  onChange={(e)=>setPassword(e.target.value)}
                />
                {/* <label for="floatingInput">Password</label> */}
              </div>
              <div className="">
                <button className="btn btn-primary w-100 my-3" onClick={handleLogin}>Login</button>
              </div>
              <div
                className="my-3 d-flex justify-content-center text-primary cursor_pointer"
                onClick={handleForgetPassword}
              >
                Register
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
