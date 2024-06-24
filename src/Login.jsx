import React from "react";
import "./Log.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
  Navigate,
  useNavigate,
} from "react-router-dom";
import passwordpng from "./password.png";
import personpng from "./person.png";
import user from "./user.svg.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loged, setloged] = useState(0);
  function getdata(e) {
    e.preventDefault();
    localStorage.setItem("username", "Admin");
    localStorage.setItem("password", "Admin@123");

    let ids = localStorage.getItem("username");
    let pass = localStorage.getItem("password");
    if (ids == username && pass == password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      notify();
      handleApi();
    } else if (username == "" || password == "") {
      blank();
    } else {
      wrong();
    }
  }

  const notify = () => {
    toast.dismiss();
    toast.success(
      "Log in Successful",
      {
        style: {
          backgroundColor: "lightgreen",
          color: "green",
          borderRadius: "10px",
        },
      },
      { closeButton: { innerHeight: "100px" } }
    );
  };
  const wrong = () => {
    toast.dismiss();
    toast.error("Wrong Username or Password", {
      style: { backgroundColor: "lightred" },
    });
  };
  const blank = () => {
    toast.dismiss();
    toast.warn("Please enter Username and Password");
  };
  const handleApi = () => {
    setloged(1);
    localStorage.setItem("token", loged);
    navigate("/");
  };

  return (
    <div className="Login full_body">
      <div className="container">
        <img src={user} className="profile-photo"></img>
        <h1 className="head log_h1">LOG IN</h1>
        <div className="data">
          <div className="log_profile">
            <img src={personpng} className="pro_img"></img>
            <input
              type="text"
              placeholder="Username"
              className="name"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div className="log_password">
            <img src={passwordpng} className="pass_img"></img>
            <input
              className="pass_input"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <p className="para">
            Lost Password ?{" "}
            <a href="#" className="are">
              Click here!
            </a>
          </p>
          <div>
            <button className="Log-in" type="submit" onClick={getdata}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

 
