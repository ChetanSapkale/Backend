const express = require("express");
const { connection, UserModel } = require("./db");
let cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/getUser", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});

app.post("/addUser", async (req, res) => {
    try {
        await UserModel.create(req.body);
        res.send("User added successfully");
    } catch (error) {
        console.error("Error adding user:", error);
    } 
});

app.listen(3000, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB");
    console.log("Server is running on PORT: 3000");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
});

// http://localhost:3000
