import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Profile from './Profile';
import Login from './Login'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <ToastContainer  position="top-center" theme="colored" newestOnTop={true} autoClose={3000}/>
  <Routes>
  <Route path='/login' element={<Login />}/>
  <Route path='/' element={<Profile />}/>
  
  </Routes>
  </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
