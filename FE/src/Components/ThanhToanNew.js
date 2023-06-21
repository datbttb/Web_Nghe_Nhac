import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";

function ThanhToanNew() {
  const [bankCode, setBankCode] = useState("NCB");
  const [locate, setLocate] = useState("vn");
  const [noiDung, setNoiDung] = useState();
  const location = useLocation();
  const path = location.pathname; // "/home/dsd"
  const [plan1, setPlan] = useState(path.split("/")[2]); // "dsd"
  const [isLoading, setisLoading] = useState(false);
  const [goi, setGoi] = useState();
  const accessToken = localStorage.getItem("accessToken");

  console.log(goi);
  console.log(plan1);
  console.log(noiDung);
  const dieuHuongVNP = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      bankCode: bankCode,
      locate: locate,
      orderDesc: noiDung,
      plan: parseInt(plan1),
    });

    var config = {
      method: "post",
      url: "http://localhost:8080/payment",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.location.href = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    var data = JSON.stringify({
      id: 42343242,
      amount: 5560000,
      date: "2023-04-10T10:33:28.000+00:00",
      orderDesc: "Nap tien cho thue bao 0123456789",
    });

    var config = {
      method: "get",
      url: "http://localhost:8080/plan/" + plan1,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setGoi(response.data);
        setisLoading(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // "bankCode": "NCB","locate": "vn","orderDesc": "Thanh toan goi 6 thang","plan": 2

  return (
    <div class="content-thanhtoan">
      {isLoading ? (
        <div id="layout-wrapper">
          <div
            id="removeNotificationModal"
            class="modal fade zoomIn"
            tabindex="-1"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    id="NotificationModalbtn-close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="mt-2 text-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/gsqxdxog.json"
                      trigger="loop"
                      colors="primary:#f7b84b,secondary:#f06548"
                    ></lord-icon>
                    <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                      <h4>Are you sure ?</h4>
                      <p class="text-muted mx-4 mb-0">
                        Are you sure you want to remove this Notification ?
                      </p>
                    </div>
                  </div>
                  <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <button
                      type="button"
                      class="btn w-sm btn-light"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn w-sm btn-danger"
                      id="delete-notification"
                    >
                      Yes, Delete It!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page-content">
            <div class="container">
              <div class="row">
                <div class="card">
                  <div class="card-body checkout-tab">
                    <form action="#">
                      <div class="tab-content">
                        <div
                          class="tab-pane fade show active"
                          id="pills-bill-info"
                          role="tabpanel"
                          aria-labelledby="pills-bill-info-tab"
                        >
                          <div>
                            <h5 class="mb-1">Thông tin hóa đơn</h5>
                            <p class="text-muted mb-4">
                              Vui lòng điền đầy đủ thông tin
                            </p>
                          </div>

                          <div>
                            <div class="row">
                              <div class="mb-3">
                                <label
                                  for="billinginfo-firstName"
                                  class="form-label"
                                >
                                  Tên gói
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="billinginfo-firstName"
                                  readonly
                                  value={goi.planName}
                                />
                              </div>
                            </div>

                            <div class="row">
                              <div class="mb-3">
                                <label
                                  for="billinginfo-email"
                                  class="form-label"
                                >
                                  Giá
                                </label>
                                <input
                                  type="email"
                                  class="form-control"
                                  id="billinginfo-email"
                                  value={goi.price}
                                  readonly
                                />
                              </div>
                            </div>

                            <div class="mb-3">
                              <label
                                for="billinginfo-address"
                                class="form-label"
                              >
                                Nội dung thanh toán
                              </label>
                              <textarea
                                class="form-control"
                                id="billinginfo-address"
                                placeholder="Nội dung thanh toán"
                                rows="2"
                              ></textarea>
                            </div>

                            <div class="row">
                              <div class="col-md-6">
                                <div class="mb-6">
                                  <label for="country" class="form-label">
                                    Ngôn ngữ
                                  </label>
                                  <select
                                    class="form-select"
                                    id="country"
                                    data-plugin="choices"
                                  >
                                    <option value="vi">Việt Nam</option>
                                    <option value="en">English</option>
                                    <option selected>Chọn ngôn ngữ</option>
                                  </select>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="mb-6">
                                  <label for="country" class="form-label">
                                    Ngân hàng
                                  </label>
                                  <select
                                    class="form-select"
                                    id="country"
                                    data-plugin="choices"
                                  >
                                    <option value="ncb">NCB</option>
                                    <option value="vpb">VPB</option>
                                    <option value="vcb">VCB</option>
                                    <option selected>Mã ngân hàng</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div class="d-flex align-items-start gap-3 mt-3">
                              <button
                                type="button"
                                class="btn btn-success right ms-auto"
                              >
                                Thanh toán
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Đang load</p>
      )}
    </div>
  );
}

export default ThanhToanNew;
