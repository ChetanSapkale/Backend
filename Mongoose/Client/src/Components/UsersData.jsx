import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersData = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/getUser");
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/addUser", {name, email, age, password});
      setUsers([...users, res.data]);
      setName("");
      setAge("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Users Data</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form action="" onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            style={{ margin: "10px", padding: "10px", borderRadius: "5px" }}
          />
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="Age"
            style={{ margin: "10px", padding: "10px", borderRadius: "5px" }}
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            style={{ margin: "10px", padding: "10px", borderRadius: "5px" }}
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            style={{ margin: "10px", padding: "10px", borderRadius: "5px" }}
          />
          <button
            type="submit"
            style={{ margin: "10px", padding: "10px", borderRadius: "5px" }}
          >
            Add User
          </button>
        </form>
      </div>
      {users.map((el, i) => {
        return (
          <div
            key={i}
            style={{
              border: "1px solid black",
              padding: "10px",
              textAlign: "center",
              margin: "10px",
            }}
          >
            <h3>Name : {el.name}</h3>
            <p>Email : {el.email}</p>
            <p>Age : {el.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersData;
