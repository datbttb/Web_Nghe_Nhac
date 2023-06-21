import React, { useEffect } from "react";
import "../styles/MainContainer.css";
import { FaUsers } from "react-icons/fa";
import { AudioList } from "./AudioList";
import { Banner } from "./Banner";

function MainContainer() {
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");

    function changePopularActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changePopularActive));
  }, []);

  return (
    <div className="mainContainer">
      <Banner />

      <div className="menuList">
        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>

      <AudioList />
    </div>
  );
}

export { MainContainer };
