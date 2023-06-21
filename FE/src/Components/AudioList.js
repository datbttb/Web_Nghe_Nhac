import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import "../styles/LeftMenu.css";
import MusicPlayer from "./MusicPlayer";
import { Songs } from "./Songs";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

function AudioList() {
  // Lấy dữ liệu bài hát
  // const [data1,setdata1]= useState(() => {
  //   let data='';
  //   let ok=[];
  //   var config = {
  //       method: 'get',
  //       url: 'http://localhost:8080/songs/all',
  //       headers: { },
  //       data : data
  //   };
  //   axios(config)
  //   .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //       // setSongs(response.data);
  //       ok=response.data
  //       return ok;
  //   })
  //   .catch(function (error) {
  //       console.log(error);
  //       return "Ok trả về đây";
  //   });
  // });
  // console.log(data1);
  // const [dsnhac,setdsnhac] = useState([]);
  // console.log(dsnhac);
  // if(data1!=null){
  //   console.log(data1.length);
  // }
  const accessToken = localStorage.getItem("accessToken");
  const [isLoading, setisLoading] = useState(true);
  console.log(isLoading);
  const [songs, setSongs] = useState(Songs);
  console.log(songs);
  const location = useLocation();
  const path = location.pathname; // "/home/dsd"
  const arg1 = useState(path.split("/")[1]);
  console.log(arg1[0]);
  const arg3 = useState(path.split("/")[3]);
  console.log(arg3[0]);
  const [param, setParam] = useState(path.split("/")[2]); // "dsd"
  console.log(param);
  const navigate = useNavigate();
  // const linksong = "https://drive.google.com/uc?id="+songs[0].song+"&export-download"
  const linksong =
    "https://drive.google.com/uc?id=" + param + "&export-download";

  const [song, setSong] = useState(linksong);
  const [img, setImage] = useState("OK");
  const [auto, setAuto] = useState(false);
  const [name, setName] = useState("Ok");

  const themBh = (idbaih) => {
    if(arg1[0]=="playlist" && arg3[0]!=undefined && accessToken!=null){
      console.log("ok");
      var config = {
        method: 'post',
        url: 'http://localhost:8080/playlists/'+arg3[0]+'/song/'+idbaih,
        headers: { 
          'Authorization': 'Bearer '+accessToken
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    window.location.reload();
  };

  useEffect(() => {
    //lấy dữ liệu nhạc
    let data = "";
    var config = {
      method: "get",
      url: "http://localhost:8080/songs/all",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setSongs(response.data);
        setisLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    // end;

    // const allSongs = document.querySelectorAll(".songs");
    // allSongs.forEach((n, index) => {
    //   n.classList.remove("avtive");
    //   // console.log(index);
    //   if (songs[index].id == param) {
    //     n.classList.add("active");
    //   }
    // });
    // function changeActive() {
    //   allSongs.forEach((n, index) => {
    //     n.classList.remove("active");
    //   });
    //   this.classList.add("active");
    // }

    // allSongs.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  const setMainSong = (songSrc, imgSrc, songName) => {
    // const linksong1 = "https://drive.google.com/uc?id="+songSrc+"&export-download"
    // setSong(linksong1);
    // setImage(imgSrc);
    // setAuto(true);
    // setName(songName)
    if (arg3[0] != undefined) {
      navigate("/" + arg1[0] + "/" + songSrc + "/" + arg3[0]);
    } else {
      navigate("/home" + songSrc);
    }
    window.location.reload();
  };

  return (
    <div>
      {isLoading ? (
        <p>Đang loading ....</p>
      ) : (
        <div className="AudioList">
          <h2 className="title">
            The list <span>12 songs</span>
          </h2>

          <div className="songsContainer">
            {songs &&
              songs.map((song, index) => (
                <div className="songs">
                  <div
                    className={param == song.id ? "songs active" : "songs"}
                    key={song.id}
                    onClick={() => setMainSong(song.id, song.imgSrc, song.name)}
                  >
                    <div className="count">
                      <p>{`#${index + 1}`}</p>
                    </div>
                    <div className="song">
                      {/* <div className="imgBox">
                    <img src={song?.imgSrc} alt="" />
                  </div> */}
                      <div className="section">
                        <p className="songName">
                          {song.name}{" "}
                          {/* <span className="songSpan">{song.artist}</span> */}
                        </p>

                        <div className="hits">
                          <p className="hit">
                            <i>
                              <FaHeadphones />
                            </i>
                            95,490,102
                          </p>

                          <p className="duration">
                            <i>
                              <FaRegClock />
                            </i>
                            03:04
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="favourite" onClick={() => themBh(song.id)}>
                    <p>Thêm</p>
                  </div>
                </div>
              ))}
          </div>
          {/* <MusicPlayer song={song} imgSrc={name} autoplay={auto} songs={songs} /> */}
          {param == null || param == "all" ? (
            <div></div>
          ) : (
            <MusicPlayer
              song={song}
              imgSrc={name}
              autoplay={auto}
              songs={songs}
            />
          )}
        </div>
      )}
    </div>
  );
}

export { AudioList };
