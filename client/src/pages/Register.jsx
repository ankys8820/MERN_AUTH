import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Register = () => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    axios.get("http://localhost:5000/api/register").then((res) => {
      console.log(res.data);
    });
  };
  //   handle Submit
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/register", {
        email,
        username,
        password,
      })
      .then(() => {
        alert("Registration Successfully!");
        setEmail("");
        setUsername("");
        setPassword("");
        fetchUsers();
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full h-screen flex">
        <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
          <form
            onSubmit={handleRegister}
            className="text-center border rounded-lg w-[600px] h-[400px] p-9"
          >
            {/* Email Input */}
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            {/* Username Input */}
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <br />
            <br />
            {/* Password Input */}
            <label htmlFor="">Password</label>
            <br />
            <input
              type="password"
              className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button
              type="submit"
              className="w-[200px] h-[50px]  hover:bg-teal-900"
            >
              Register
            </button>
          </form>
        </div>
        <div className="w-[50%] h-[100%] flex justify-center items-center bg-teal-800">
          <h2 className="text-3xl text-white ">Register</h2>
        </div>
      </div>
    </>
  );
};

export default Register;
