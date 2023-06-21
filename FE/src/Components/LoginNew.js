import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import "../styles/LoginNew.css";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL } from "../constants";

function LoginNew() {
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
    if (localStorage.getItem("accessToken") != null) {
      navigate("/");
    }
  }, []);

  return (
    <div className="login-new">
      <div class="auth-page-wrapper pt-5">
        <div class="auth-page-content">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-6 col-xl-5">
                <div class="card mt-4">
                  <div class="card-body p-4">
                    <div class="text-center mt-2">
                      <h5 class="text-primary">Welcome !</h5>
                      <h6 class="text-muted">Đăng nhập</h6>
                    </div>
                    <div class="p-2 mt-4">
                      <form action="index.html">
                        <div class="mb-3">
                          <label for="username" class="form-label">
                            Username
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="username"
                            placeholder="Nhập tên tài khoản"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>

                        <div class="mb-3">
                          <div class="float-end">
                            <a href="reset-password.html" class="text-muted">
                              Quên mật khẩu?
                            </a>
                          </div>
                          <label class="form-label" for="password-input">
                            Mật khẩu
                          </label>
                          <div class="position-relative auth-pass-inputgroup mb-3">
                            <input
                              type="password"
                              class="form-control pe-5 password-input"
                              placeholder="Nhập mật khẩu"
                              id="password-input"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                              class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                              type="button"
                              id="password-addon"
                            >
                              <i class="ri-eye-fill align-middle"></i>
                            </button>
                          </div>
                        </div>

                        <div class="mt-4">
                          <button class="btn btn-success w-100" type="submit" onClick={dangnhap}>
                            Đăng nhập
                          </button>
                        </div>

                        <div class="mt-4 text-center">
                          <div class="signin-other-title">
                            <h5 class="fs-13 mb-4 title">Đăng nhập với</h5>
                          </div>
                          <div>
                            <a href={FACEBOOK_AUTH_URL} id="facebookIcon">
                              <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png"></img>
                            </a>
                            <a href={GOOGLE_AUTH_URL} id="googleIcon">
                              <img src="https://img.icons8.com/ios/512/google-logo--v1.png"></img>
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="mt-4 text-center">
                  <p class="mb-0">
                    Bạn không có tài khoản ?{" "}
                    <a
                      href="#"
                      class="fw-semibold text-primary text-decoration-underline"
                      onClick={dangKy}
                    >
                      {" "}
                      Đăng ký{" "}
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="text-center">
                  <p class="mb-0 text-muted">
                    &copy;
                    <script>
                      document.write(new Date().getFullYear())
                    </script>{" "}
                    Velzon. Crafted with{" "}
                    <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LoginNew;
