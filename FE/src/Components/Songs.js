import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import axios from "axios";

const Songs =[
  {
      "id": "1WEBO-qgq9bM3vMAhr4HewryNYCmlkzlV",
      "name": "Anh nhớ ra - Vũ.mp3",
      "lyrics": null,
      "thumbnail": null,
      "audio": "https://drive.google.com/file/d/1WEBO-qgq9bM3vMAhr4HewryNYCmlkzlV/view?usp=sharing",
      "size": "4.2 MB",
      "genre": "1",
      "artist": null,
      "vip": true
  },
  {
      "id": "18r7aPYU1jxOjT63MrUJqIE2sxG7OSLap",
      "name": "Âm Thầm Bên Em.mp3",
      "lyrics": null,
      "thumbnail": null,
      "audio": "https://drive.google.com/file/d/18r7aPYU1jxOjT63MrUJqIE2sxG7OSLap/view?usp=sharing",
      "size": "32.6 MB",
      "genre": null,
      "artist": null,
      "vip": true
  },
  {
      "id": "1H4AwboBxRuq980_Gy3NqN9WRIKPHyVms",
      "name": "Ai Đưa Em Về.mp3",
      "lyrics": null,
      "thumbnail": null,
      "audio": "https://drive.google.com/file/d/1H4AwboBxRuq980_Gy3NqN9WRIKPHyVms/view?usp=sharing",
      "size": "4.1 MB",
      "genre": null,
      "artist": null,
      "vip": true
  }
];
export { Songs };
