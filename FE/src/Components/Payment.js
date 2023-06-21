import React, { useEffect, useState } from "react";
import "../styles/Payment.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [isLoading, setisLoading] = useState(false);
  const [goi, setGoi] = useState();
  console.log(goi);

  const navigate = useNavigate();

  const sangThanhToan = (idPayment) => {
    navigate("/payment/" + idPayment);
    window.location.reload();
  };

  useEffect(() => {
    var data = "";

    var config = {
      method: "get",
      url: "http://localhost:8080/plan/all",
      headers: {},
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

  return (
    <div class="payment-pp">
      {isLoading ? (
        <div class="wrapper">
          <div class="table basic">
            <div class="package-name"></div>
            <ul class="features">
              <li>
                <span class="list-name">{goi[0].planName}</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">Giá: {goi[0].price} VND</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">{goi[0].desciption}</span>
                <span class="icon cross">
                  <i class="fas fa-times"></i>
                </span>
              </li>
            </ul>
            <div class="btn">
              <button onClick={() => sangThanhToan(1)}>Purchase</button>
            </div>
          </div>
          <div class="table premium">
            <div class="ribbon">
              <span>Recommend</span>
            </div>
            <div class="package-name"></div>
            <ul class="features">
              <li>
                <span class="list-name">{goi[1].planName}</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">Giá: {goi[1].price} VND</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">{goi[1].desciption}</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
            </ul>
            <div class="btn">
              <button onClick={() => sangThanhToan(2)}>Purchase</button>
            </div>
          </div>
          <div class="table ultimate">
            <div class="package-name"></div>
            <ul class="features">
              <li>
                <span class="list-name">{goi[2].planName}</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">Giá: {goi[2].price} VND</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">{goi[2].desciption}</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
            </ul>
            <div class="btn">
              <button onClick={() => sangThanhToan(3)}>Purchase</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Đang loading ...</p>
      )}
    </div>
  );
}

export default Payment;
