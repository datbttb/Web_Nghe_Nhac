import React from "react";
import "../styles/RightMenu.css";
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";
import Profile from "../img/profile.jpg";
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';

function RightMenu() {

  const username=localStorage.getItem("username");
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const dangXuat = () => {
    console.log("Ok");
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  const dangNhap = () =>{
    navigate("/login");
    window.location.reload();
  }

  const nangVip = () => {
    navigate("/payment");
    window.location.reload();
  }

  return (
    <div className="rightContainer">
      <div className="goPro">
        <i>
          <FaCrown />
          <p onClick={nangVip}>
            <span> Go</span>Pro
          </p>
        </i>

        <i>
          <FaBell />
        </i>

        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        {/* <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i> */}
        {accessToken!=null ? (<span onClick={dangXuat}>Đăng xuất</span>):(<div></div>)}

        <div className="profileImage">
          {/* <img src={Profile} alt="" /> */}
          {accessToken!=null ? (<span>{username}</span>):(<span onClick={dangNhap}>Đăng nhập</span>)}
        </div>
      </div>
    </div>
  );
}

export { RightMenu };
