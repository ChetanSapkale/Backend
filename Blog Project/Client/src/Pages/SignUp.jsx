import React, { useState } from "react";
import axios from "axios";
import "../Styles/SignUp.css";

const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = { name, email, password };

    try {
      const res = await axios.post(
        "http://localhost:7070/user/register",
        userInfo,
        { withCredentials: true }
      );
      alert("User Registered Successfully");
    } catch (error) {
      console.log(error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />
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
        <button type="submit">Sign Up</button>
        <span>
          Already have an account? <a href="/login">Login</a>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
