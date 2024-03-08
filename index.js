// require('dotenv').config()
import 'dotenv/config'
// console.log(process.env.PORT)

// const express = require("express");
import express from "express";
const app = express();


app.get("/", (req, res) => {
    res.send("<h1>Hi Tushar </h1>")
})

app.get("/contact", (req, res) => {
    res.send("Contact Page");
})

app.get("/service",(req,res)=>{
res.send("<h2>This is the Service Page</h2>")
})


app.listen(process.env.PORT, () => {
    console.log("App server started at http://localhost:3000")
})
