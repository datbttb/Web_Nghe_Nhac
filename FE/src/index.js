import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from "./Components/Login"
import Register from "./Components/Register"
import Payment from './Components/Payment';
import ThanhToan from './Components/ThanhToan';
import OAuth2RedirectHandler from './OAuth2RedirectHandler';
import QuenMK from './Components/QuenMK';
import LoginNew from './Components/LoginNew';
import RegisterNew from './Components/RegisterNew';
import ThanhToanNew from './Components/ThanhToanNew';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home/:idnhac' element={<App/>} />
      <Route path='/playlist/:idnhac/:id' element={<App/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/payment/:idgoi'  element={<ThanhToan/>} />
      <Route path='/oauth2/redirect' element={<OAuth2RedirectHandler/>} />
      <Route path='/quenmk' element={<QuenMK/>} />
      <Route path='/loginnew' element={<LoginNew/>} />
      <Route path='/registernew' element={<RegisterNew/>} />
      <Route path='/paymentnew/:idgoi'  element={<ThanhToanNew/>} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
