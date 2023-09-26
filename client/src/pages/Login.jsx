import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
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
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      const token = response.data.token;
      alert("Logged in Successfully!");
      setEmail("");
      setPassword("");
      fetchUsers();
      navigate("/account");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full h-screen flex">
        <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
          <form
            onSubmit={handleLogin}
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
            {/* <label htmlFor="">Username</label>
            <br />
            <input
              type="text"
              className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            />
            <br />
            <br /> */}
            {/* Password Input */}
            <label htmlFor="password">Password</label>
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
              className="w-[200px] h-[50px]  hover:bg-red-900 "
            >
              Login
            </button>
          </form>
        </div>
        <div className="w-[50%] h-[100%] flex justify-center items-center bg-red-900">
          <h2 className="text-3xl text-white ">Login</h2>
        </div>
      </div>
    </>
  );
};

export default Login;
