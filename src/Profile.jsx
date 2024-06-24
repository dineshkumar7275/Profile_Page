import React, { useRef } from "react";
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userimage from "./avatar3.png";

export default function Profile() {
  const navigate = useNavigate();
  const [value, setvalue] = useState("Edit");
  const [isDisabled, setIsDisabled] = useState(true);

  const [name, setname] = useState("");
  const [last, setlast] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [Gender, setgender] = useState("");
  const [password, setpassword] = useState("");
  const [state, setstate] = useState("");
  const [country, setcountry] = useState("");
  const [add, setadd] = useState("");

  let inputref = useRef(null);
  let inputemail = useRef(null);
  let inputgender = useRef(null);
  let inputlast = useRef(null);
  let inputphone = useRef(null);
  let inputpassword = useRef(null);
  let inputstate = useRef(null);
  let inputcountry = useRef(null);
  let inputadd = useRef(null);

  useEffect(() => {
    inputref.current.value = localStorage.getItem("name");
    inputemail.current.value = localStorage.getItem("email");
    inputgender.current.value = localStorage.getItem("gender");
    inputlast.current.value = localStorage.getItem("last");
    inputphone.current.value = localStorage.getItem("phone");
    inputpassword.current.value = localStorage.getItem("password");
    inputstate.current.value = localStorage.getItem("state");
    inputcountry.current.value = localStorage.getItem("country");
    inputadd.current.value = localStorage.getItem("add");
  }, [isDisabled, !isDisabled]);
  
  function setdata(e) {
    if (name != "") {
      localStorage.setItem("name", name);
    }
    if (email != "") {
      localStorage.setItem("email", email);
    }
    if (Gender != "") {
      localStorage.setItem("gender", Gender);
    }
    if (last != "") {
      localStorage.setItem("last", last);
    }
    if (phone != "") {
      localStorage.setItem("phone", phone);
    }
    if (password != "") {
      localStorage.setItem("password", password);
    }
    if (state != "") {
      localStorage.setItem("state", state);
    }
    if (country != "") {
      localStorage.setItem("country", country);
    }
    if (add != "") {
      localStorage.setItem("add", add);
    }
  }
  
  useEffect(() => {

    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const remover = () => {
    localStorage.removeItem("token");
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      logedout();
    }
  };
  const logedout = () => {
    toast.dismiss();
    toast.success(
      "Log Out Successful",
      {
        style: {
          backgroundColor: "red",
          color: "black",
          borderRadius: "10px",
        },
      },
      { closeButton: { innerHeight: "100px" } }
    );
  };
  const tovalue = () => {
    if (value == "Edit") {
      setvalue("Save");
      setIsDisabled(!isDisabled);
    } else {
      setvalue("Edit");
      setIsDisabled(!isDisabled);
      toast.dismiss();
      toast.success(
        "Detail Changed Successful",
        {
          style: {
            backgroundColor: "lightgreen",
            color: "green",
            borderRadius: "10px",
          },
        },
        { closeButton: { innerHeight: "100px" } }
      );
    }
  };

  const toedit = () => {
    setIsDisabled(false);
  };
  const toSave = () => {
    setIsDisabled(true);
    toast.dismiss();
    toast.success("Detail Updated");
    setdata();
  };

  return (
    <div>
      <div className=" flex flex-row items-center w-[100%] h-[100vh] bg-[#cbd5e1] fixed ">
        <div className=" flex flex-col items-center bg-[#0063B2FF] w-[300px] h-[100vh] max-[612px]:w-[200px]">
          <img
            src={userimage}
            className="w-3/4 border-0 rounded-full mt-1"
          ></img>
          <h2 className="text-4xl">Dinesh Kumar</h2>
          <h3 className="text-2xl w-[70%] mt-[20px] font-semibold">
            My name is dinesh. I am full stack web Developer.
          </h3>
          <button
            className="bg-[red] w-2/3 min-h-9 border-0 rounded-md text-xl mt-[170px]  max-[1002px]:mt-[130px] max-[497px]:mt-[80px] active:bg-[#f87171] focus:outline-none "
            onClick={() => {
              remover();
            }}
          >
            Log Out
          </button>
        </div>

        <div className=" items-center h-[100vh] w-[80%]">
          <div className=" flex flex-col items-center w-[98%] h-[100%] bg-[#f8fafc] mx-2.5 my-2.5 ">
            <h1 className="items-center text-[50px] font-normal font-bold mt-[-10px]">
              Personal Detail
            </h1>
            <div className="grid grid-rows-5 grid-flow-col gap-[10px]  w-[90%] h-[100%] bg-[white] shadow-gray-50 max-lg:grid-row-8 max-[921px]:grid-col-1 mb-[80px]">
              <div className="flex flex-col mt-[15px] ml-[25px] max-[770px]:ml-[15px]">
                <h1 className="text-[20px] font-bold">First Name</h1>
                <input
                  className={`border-[1px] w-[300px] text-[19px] h-[40px] text-[grey] border-[grey] rounded mt-[10px] pl-[10px]  max-[1034px]:w-[200px] max-[735px]:w-[150px] ${
                    isDisabled ? "pointer-events-none" : "pointer-events-auto"
                  }`}
                  placeholder="enter name.."
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  ref={inputref}
                ></input>
              </div>
              <div className="flex flex-col mt-[-10px] ml-[25px] max-[770px]:ml-[15px]">
                <h1 className="text-[20px] font-bold">Email Address</h1>
                <input
                  className={`border-[1px] w-[300px] h-[40px] text-[19px] text-[grey] border-[grey] rounded mt-[10px] pl-[10px]  max-[1034px]:w-[200px] max-[735px]:w-[150px] ${
                    isDisabled ? "pointer-events-none" : "pointer-events-auto"
                  }`}
                  placeholder="enter email.."
                  onChange={(e) => setemail(e.target.value)}
                  ref={inputemail}
                ></input>
              </div>
              <div className="flex flex-col ml-[25px] mt-[-30px]  max-[770px]:ml-[15px]">
                <h1 className="text-[20px] font-bold">Gender</h1>
                <select
                  className={`border-[1px] w-[300px] h-[40px] text-[19px] text-[grey] border-[grey] rounded mt-[10px] pl-[10px]  max-[1034px]:w-[200px] max-[735px]:w-[150px] ${
                    isDisabled ? "pointer-events-none" : "pointer-events-auto"
                  }`}
                  onChange={(e) => setgender(e.target.value)}
                  ref={inputgender}
                >
                  <option value="">--choose Gender--</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col  ml-[25px] mt-[-50px] max-[770px]:ml-[15px]">
                <h1 className="text-[20px] font-bold">State</h1>
                <select
                  className={`border-[1px] w-[300px] h-[40px] text-[19px] text-[grey] border-[grey] rounded mt-[10px] pl-[10px]  max-[1034px]:w-[200px] max-[735px]:w-[150px] ${
                    isDisabled ? "pointer-events-none" : "pointer-events-auto"
                  }`}
                  onChange={(e) => setstate(e.target.value)}
                  ref={inputstate}
                >
                  <option value="">--Choose State--</option>
                  <option>Haryana</option>
                  <option>Gujrat</option>
                  <option>Uttar Pardesh</option>
                  <option>Uttrakhand</option>
                  <option>Bihar</option>
                  <option>Andher Pardesh</option>
                </select>
              </div>
              <div className="flex flex-col  ml-[25px] mt-[-70px] max-[770px]:ml-[15px]">
                <h1 className="text-[20px] font-bold">Address</h1>
                <input
                  className={`border-[1px] w-[300px] text-[19px] h-[40px] text-[grey] border-[grey] rounded mt-[10px] pl-[10px] max-[1034px]:w-[200px] max-[735px]:w-[150px] ${
                    isDisabled ? "pointer-events-none" : "pointer-events-auto"
                  }`}
                  placeholder="enter address.."
                  onChange={(e) => setadd(e.target.value)}
                  ref={inputadd}
                ></input>
              </div>
              <div className="flex flex-col  mt-[15px] ml-[25px] max-[770px]:ml-[15px]">
                <h1 className="text-[20px] font-bold max-">Last Name</h1>
                <input
                  className={`border-[1px] w-[300px] h-[40px] text-[19px] text-[grey] border-[grey] rounded mt-[10px]  pl-[10px]  max-[1034px]:w-[200px] max-[735px]:w-[150px] ${
                    isDisabled ? "pointer-events-none" : "pointer-events-auto"
                  }`}
                  placeholder="enter last name..."
                  onChange={(e) => setlast(e.target.value)}
                  ref={inputlast}
                ></input>
              </div>
              <div className="flex flex-col ml-[25px] mt-[-10px] max-[770px]:ml-[15px]">
                <h1 className="text-[20px] font-bold">Phone number</h1>
                <input
                  className={`border-[1px] w-[300px] h-[40px] text-[19px] text-[grey] border-[grey] rounded mt-[10px] pl-[10px]  max-[1034px]:w-[200px] max-[735px]:w-[150px] ${
                    isDisabled ? "pointer-events-none" : "pointer-events-auto"
                  }`}
                  placeholder="enter Phone no."
                  onChange={(e) => setphone(e.target.value)}
                  ref={inputphone}
                ></input>
              </div>
              <div className="flex flex-col mt-[-30px] ml-[25px] max-[770px]:ml-[15px]">
                <h1 className="text-[20px] font-bold">Password</h1>
                <input
                  className={`border-[1px] w-[300px] h-[40px] text-[19px] text-[grey] border-[grey] rounded mt-[10px]  pl-[10px] max-[1034px]:w-[200px] max-[735px]:w-[150px] ${
                    isDisabled ? "pointer-events-none" : "pointer-events-auto"
                  }`}
                  type="password"
                  placeholder="enter password.."
                  onChange={(e) => setpassword(e.target.value)}
                  ref={inputpassword}
                ></input>
              </div>
              <div className="flex flex-col mt-[-50px] ml-[25px] max-[770px]:ml-[15px]">
                <h1 className="text-[20px] font-bold">Country</h1>
                <select
                  className={`border-[1px] w-[300px] h-[40px] text-[19px] text-[grey] border-[grey] rounded mt-[10px]  pl-[10px]  max-[1034px]:w-[200px] max-[735px]:w-[150px] ${
                    isDisabled ? "pointer-events-none" : "pointer-events-auto"
                  }`}
                  onChange={(e) => setcountry(e.target.value)}
                  ref={inputcountry}
                >
                  <option value="">--Chosse Country--</option>
                  <option>India</option>
                  <option>China</option>
                  <option>Bangladesh</option>
                  <option>England</option>
                </select>
              </div>
              <div>
                <button
                  className=" w-[100px] h-[30px] mt-[70px] ml-[-10px] bg-[red]  text-xl rounded  hover:border-[1px] hover:border-[black]   active:bg-[#f87171] focus:outline-none  "
                  onClick={() => toedit()}
                >
                  Edit
                </button>
                <button
                  className=" w-[100px] h-[30px] mt-[70px] ml-[-10px] bg-[green]  text-xl rounded  hover:border-[1px] hover:border-[black] ml-[10px] active:bg-[#4ade80] focus:outline-none"
                  onClick={() => toSave()}
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
