import logo from "./logo.svg";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import {useLocation} from "react-router-dom";

function App() {
  // const location= useLocation();
  // console.log("app",location)
  // const userProfile = location.state?.userProfile;

  // const location= useLocation();
  // const accessToken = localStorage.getItem("accessToken");
  // console.log("app",location)
  // const userProfile = location.state?.userProfile;
  // if(accessToken != null){
  //   localStorage.setItem("username",userProfile.username);
  // }
  try {
    const location= useLocation();
    const accessToken = localStorage.getItem("accessToken");
    console.log("app",location)
    const userProfile = location.state?.userProfile;
    if(accessToken != null){
      localStorage.setItem("username",userProfile.username);
    }
  } catch (error) {
    console.log('Không phai dn bang gmail');
  }

  return (
    <div className="App">
      <div className=""></div>
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className="background"></div>
    </div>
  );
}

export default App;
