import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import axios from "axios";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import {FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL} from "../constants";


// function Login(){
//     return(<div class="login">
//       <form>
//         {/* <!-- Email input --> */}
//         <div class="form-outline mb-4">
//           <input type="email" id="form2Example1" class="form-control" />
//           <label class="form-label" for="form2Example1">Email address</label>
//         </div>

//         {/* <!-- Password input --> */}
//         <div class="form-outline mb-4">
//           <input type="password" id="form2Example2" class="form-control" />
//           <label class="form-label" for="form2Example2">Password</label>
//         </div>

//         {/* <!-- 2 column grid layout for inline styling --> */}
//         <div class="row mb-4">
//           <div class="col d-flex justify-content-center">
//             {/* <!-- Checkbox --> */}
//             <div class="form-check">
//               <input class="form-check-input" type="checkbox" id="form2Example31" />
//               <label class="form-check-label" for="form2Example31"> Remember me </label>
//             </div>
//           </div>

//           <div class="col">
//             {/* <!-- Simple link --> */}
//             <a href="#!">Forgot password?</a>
//           </div>
//         </div>

//         {/* <!-- Submit button --> */}
//         <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

//         {/* <!-- Register buttons --> */}
//         <div class="text-center">
//           <p>Not a member? <a href="#!">Register</a></p>
//           <p>or sign up with:</p>
//           <button type="button" class="btn btn-link btn-floating mx-1">
//             <i class="fab fa-facebook-f"></i>
//           </button>

//           <button type="button" class="btn btn-link btn-floating mx-1">
//             <i class="fab fa-google"></i>
//           </button>

//           <button type="button" class="btn btn-link btn-floating mx-1">
//             <i class="fab fa-twitter"></i>
//           </button>

//           <button type="button" class="btn btn-link btn-floating mx-1">
//             <i class="fab fa-github"></i>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// const App = props => (
//   <LoginForm />
// );

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dangnhap = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      username: username,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://localhost:8080/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("username", username);
        navigate("/");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        alert("Sai tài khoản hoặc mật khẩu");
      });
  };

  const dangKy = () => {
    navigate("/register");
    window.location.reload();
  };

  useEffect(() => {
    if(localStorage.getItem("accessToken")!=null){
      navigate("/");
    }
  },[])

  return (
    <div class="content-login">
      <div id="root">
        <div id="loginform">
          <h2 id="headerTitle">Đăng nhập</h2>
          <div>
            <div class="row">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div class="row">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div id="button" class="row">
              <button type="submit" onClick={dangnhap}>
                Đăng nhập
              </button>
              <button id="dang-ky" onClick={dangKy}>
                Đăng ký
              </button>
            </div>
          </div>
          <div className="quen-mat-khau">
            <a href="#">Quên mật khẩu?</a>
          </div>
          <div id="alternativeLogin">
            <label>Or sign in with:</label>
            <div id="iconGroup">
              <a href={FACEBOOK_AUTH_URL} id="facebookIcon">
                <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png"></img>
              </a>
              <a href={GOOGLE_AUTH_URL} id="googleIcon">
                <img src="https://img.icons8.com/ios/512/google-logo--v1.png"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
