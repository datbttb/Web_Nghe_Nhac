import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/Register.css";
import axios from "axios";
import { useNavigate, Outlet } from "react-router-dom";

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

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      email: email,
      username: username,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://localhost:8080/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data == "User registered successfully") {
          navigate("/login");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken") != null) {
      navigate("/");
    }
  }, []);

  return (
    <div class="content-register">
      <div id="root">
        <form id="registerform" onSubmit={handleSubmit}>
          <h2 id="headerTitle">Đăng ký</h2>
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
            <div class="row">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div id="button" class="row">
              <button type="submit" id="dang-ky">
                Đăng ký
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
