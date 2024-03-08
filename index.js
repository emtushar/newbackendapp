require('dotenv').config()
import 'dotenv/config'
// console.log(process.env.PORT)

// const express = require("express");
import express from "express";
const app = express();
app.get("/",(req,res)=>{
res.send("<h1>Hi Tushar </h1>")
})
app.listen(process.env.PORT,()=>{
    console.log("App server started at http://localhost:3000")
})
