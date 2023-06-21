import React, { useEffect, useState } from "react";
import "../styles/LeftMenu.css";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { PlayList } from "./PlayList";
import axios from "axios";
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';

function MenuPlayList() {
  const location = useLocation();
  const path = location.pathname; // "/home/dsd"
  const [param, setParam] = useState(path.split("/")[3]); // "dsd"
  const navigate = useNavigate();
  const [dsphatnhac, setdsphatnhac] = useState();
  const [isLoading, setisLoading] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const [tenplaylist, settenplaylist] = useState();
  const [dsnhac, setdsnhac] = useState();
  const [isLoading1, setisLoading1] = useState(false);

  const themPlayList = () => {
    if (accessToken != null) {
      var data = JSON.stringify({
        name: tenplaylist,
      });

      var config = {
        method: "post",
        url: "http://localhost:8080/playlists",
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

      window.location.reload();
    }
  };

  const chuyenHuongPlayList = (idpll) =>{
    navigate("/playlist/all/"+idpll);
    window.location.reload();
  }

  const chuyenHuongBH = (idbaih) => {
    navigate("/playlist/"+idbaih+"/"+param);
    window.location.reload();
  }

  useEffect(() => {
    //ds play list
    if (accessToken != null) {
      var data = "";

      var config = {
        method: "get",
        url: "http://localhost:8080/playlists",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setdsphatnhac(response.data);
          setisLoading(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (param != null && accessToken!=null) {
    //ds nhac trong play list
    var data = "";

    var config = {
      method: "get",
      url: "http://localhost:8080/playlists/"+param,
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setdsnhac(response.data);
        setisLoading1(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    //
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="playListContainer">
          <div className="nameContainer">
            <p>Playlists</p>
            <i onClick={() => themPlayList()}>
              <FaPlus />
            </i>
          </div>

          <div className="searchBox">
            <input
              type="text"
              placeholder="Tên PlayList"
              onChange={(e) => settenplaylist(e.target.value)}
            />
          </div>

          <div className="playListScroll">
            {dsphatnhac &&
              dsphatnhac.map((list) => (
                <div className="playLists" key={list.id} onClick={() => chuyenHuongPlayList(list.id)}>
                  <i className="list">
                    <BsMusicNoteList />
                  </i>
                  <p>{list.name}</p>
                  <i className="trash">
                    <BsTrash />
                  </i>
                </div>
              ))}
          </div>
          {isLoading1 ? (
            <div className="ds-nhac-pl">
              <p class="nameContainer">Danh sách nhạc</p>
              <div className="playListScroll">
                {dsnhac &&
                  dsnhac.map((list) => (
                    <div className="playLists" key={list.id} onClick={() => chuyenHuongBH(list.id)}>
                      <i className="list">
                        <BsMusicNoteList />
                      </i>
                      <p>{list.name}</p>
                      <i className="trash">
                        <BsTrash />
                      </i>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <p>Đang loading ...</p>
          )}
        </div>
      ) : (
        <p>Đang loading .....</p>
      )}
    </div>
  );
}

export { MenuPlayList };
