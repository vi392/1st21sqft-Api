// create a server.
// const express = require("express");
import express from 'express';
// const colors = require('colors');
import colors from 'colors';
// const cors = require('cors');
import cors from 'cors';
// const morgan = require('morgan');
import morgan from 'morgan';
const app=express();

// load config from dotenv.
 //require("dotenv").config;
// const dotenv = require("dotenv");
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());
app.use(cors());
// app.use(morgan('dev'));

// import routes for TODO API
// const projRoutes = require("./routes/signs");
import projRoutes from "./routes/signs.js";
import projRoutes1 from "./routes/contacts.js";
import projRoutes2 from "./routes/subscribes.js";
//mount the todo AsPi routes
app.use("/api/v1",projRoutes);
app.use("/api/v1",projRoutes1);
app.use("/api/v1",projRoutes2);

// start server
app.listen(PORT, () =>{
    console.log(`Server started successfully at ${PORT}`);
});

// CONNECT DB
// const dbconnect = require("./config/db");
import dbconnect from "./config/db.js";

dbconnect();

// default Router
app.get("/",(req,res) =>{
    res.send('<h1>this is home page</h1>');
})




