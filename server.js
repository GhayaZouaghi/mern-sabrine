const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const postRoutes = require("./routes/post");
// 1- require express
const express = require("express");

// 2- instance of express

const app = express();

// 5- require dotenv and config

require("dotenv").config();

//  6- connect to database

const connectDB = require("./Config/connectDB");
connectDB();

// express.json (middleware)

app.use(express.json());
// 7- routes
app.use("/api/user", userRoutes);
// app.use("/api/profile", profileRoutes);
app.use("/api/post", postRoutes);

//3- port

const port = process.env.PORT;

// 4- create server

app.listen(port, (error) => {
  error
    ? console.log("can not run the server")
    : console.log(`Server is running on port ${port}...`);
});

console.clear();
