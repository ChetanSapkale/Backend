import React, { useState } from "react";
import axios from "axios";
import "../Styles/Login.css";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = { email, password };

    try {
      const res = await axios.post(
        "http://localhost:7070/user/login",
        userInfo,
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));
      alert("User logged in successfully");
    } catch (error) {
      console.log(error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
