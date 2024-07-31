const express = require("express");
const app=express();

// load env file to run on port
require("dotenv").config();
const PORT = process.env.PORT || 4000;
// middleware to parse json request body
app.use(express.json());


// iport routes for to do api
const todoRoutes = require("./routes/todo");
// mount the routes directory structure
app.use("/api/v1",todoRoutes);


//start server
app.listen(PORT,()=>{
    console.log(`Server Started Sucessfully at ${PORT}`);
})

// connection to the database
const dbConnect = require("./config/database");
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1> This Is Homepage </h1>`);
})