import React, { useState, useRef, useEffect } from "react";
import "../styles/MusicPlayer.css";
import { Songs } from "./Songs";
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import {
  FaRegHeart,
  FaHeart,
  FaForward,
  FaStepForward,
  FaStepBackward,
  FaBackward,
  FaPlay,
  FaPause,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";


function MusicPlayer({ song, imgSrc, auto, songs }) {
  // const [songs, setSongs] = useState(Songs);
  const [isLove, setLove] = useState(false);
  const [isPlaying, setPlay] = useState(false);
  //   duration state
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef(); //  reference to our animation

  // chuyen nhac;
  const location = useLocation();
  const path = location.pathname; // "/home/dsd"
  const param = path.split('/')[2]; // "dsd"
  // console.log(param);
  const navigate = useNavigate();



  let i;
  let tongsobai=0;
  songs.forEach((item,index) => {
    if(item.id==param){
      i=index;
    }
    tongsobai++;
  });

  const baitruoc = () => {
    console.log("Ok");
    if(i>0){
      navigate('/home/'+songs[i-1].id);
      window.location.reload();
    }
  };

  const baisau = () => {
    if(i<tongsobai-1){
      navigate('/home/'+songs[i+1].id);
      window.location.reload();
    }
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    // need to run more than once
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);

    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

  const changeSongLove = () => {
    setLove(!isLove);
  };

  return (
    <div className="musicPlayer">
      <p>{imgSrc}</p>
      <div className="songAttributes">
        <audio src={song} preload="metadata" ref={audioPlayer}/>

        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeSongLove}>
              {isLove ? (
                <i>
                  <FaRegHeart />
                </i>
              ) : (
                <i>
                  <FaHeart />
                </i>
              )}
            </div>
            <i className="download">
              <BsDownload />
            </i>
          </div>

          <div className="middle">
            <div className="back" onClick={baitruoc}>
              <i class="bai-truoc">
                <FaStepBackward />
              </i>
              {/* <i>
                <FaBackward />
              </i> */}
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward" onClick={baisau}>
              {/* <i>
                <FaForward />
              </i> */}
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>

          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>

        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            defaultValue="0"
            onChange={changeProgress}
            // autoPlay={auto}
          />
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
