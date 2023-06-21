import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/Login.css";
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

function QuenMK() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();



  const  dangnhap = () => {
    navigate("/login");
    window.location.reload();
  }

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
          <h2 id="headerTitle">Quên Mật Khẩu</h2>
          <div>
            <div class="row">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div id="button" class="row">
              <button type="submit" onClick={dangnhap}>
                Đăng nhập
              </button>
              <button id="dang-ky" onClick={dangKy}>
                Đăng ký
              </button>
              <button class="gui-mail">
                Gửi Mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuenMK;
