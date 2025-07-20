const express = require("express");
const cors = require("cors");
let cookieParser = require("cookie-parser");
const userRouter = require("./Controllers/User.controller");
const connection = require("./Database/Db");
const blogRouter = require("./Controllers/Blog.controller");
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/blog", blogRouter);

app.listen(7070, async () => {
  try {
    await connection;
    console.log("Connected to the database");
    console.log("Server is running on port 7070");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
});

// http://localhost:7070
