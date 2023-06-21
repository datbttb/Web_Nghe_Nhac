import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../styles/Register.css";
import axios from "axios";
import { useNavigate, Outlet } from "react-router-dom";

function RegisterNew() {
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
    <div>
      <div class="auth-page-wrapper pt-5">
        <div class="auth-page-content">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-6 col-xl-5">
                <div class="card mt-4">
                  <div class="card-body p-4">
                    <div class="text-center mt-2">
                      <h5 class="text-primary">Tạo tài khoản</h5>
                    </div>
                    <div class="p-2 mt-4">
                      <form
                        class="needs-validation"
                        novalidate
                        action="index.html"
                      >
                        <div class="mb-3">
                          <label for="useremail" class="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="useremail"
                            placeholder="Nhập email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <div class="invalid-feedback">Please enter email</div>
                        </div>
                        <div class="mb-3">
                          <label for="username" class="form-label">
                            Username
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="username"
                            placeholder="Nhập tên tài khoản"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <div class="invalid-feedback">
                            Please enter username
                          </div>
                        </div>

                        <div class="mb-3">
                          <label class="form-label" for="password-input">
                            Mật khẩu
                          </label>
                          <div class="position-relative auth-pass-inputgroup">
                            <input
                              type="password"
                              class="form-control pe-5 password-input"
                              onpaste="return false"
                              placeholder="Nhập mật khẩu"
                              id="password-input"
                              aria-describedby="passwordInput"
                              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                              required
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                              class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                              type="button"
                              id="password-addon"
                            >
                              <i class="ri-eye-fill align-middle"></i>
                            </button>
                            <div class="invalid-feedback">
                              Please enter password
                            </div>
                          </div>
                        </div>

                        <div class="mt-4">
                          <button class="btn btn-success w-100" type="submit" onClick={handleSubmit}>
                            Đăng ký
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="mt-4 text-center">
                  <p class="mb-0">
                    Bạn đã có tài khoản ?{" "}
                    <a
                      href="login.html"
                      class="fw-semibold text-primary text-decoration-underline"
                    >
                      {" "}
                      Đăng nhập{" "}
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterNew;
