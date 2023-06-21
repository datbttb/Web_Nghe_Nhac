import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ThanhToan.css";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";

function ThanhToan() {
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
      method: 'post',
      url: 'http://localhost:8080/payment',
      headers: { 
        'Authorization': 'Bearer '+accessToken, 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.location.href =response.data;
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
        <form>
          <div class="form-group">
            <label>Tên Gói</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              value={goi.planName}
              readOnly
            />
          </div>
          <div class="form-group">
            <label>Bank CODE</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              value="NCB"
              readOnly
            />
          </div>
          <div class="form-group">
            <label>Locate</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value="vn"
              readOnly
            />
          </div>
          <div class="form-group">
            <label>Nội dung thanh toán</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Nhập nội dung vào đây"
              onChange={(e) => setNoiDung(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={dieuHuongVNP}>
            Submit
          </button>
        </form>
      ) : (
        <p>Đang load</p>
      )}
    </div>
  );
}

export default ThanhToan;
