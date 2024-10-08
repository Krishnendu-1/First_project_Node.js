// console.log("hello world node.js");
require('dotenv').config()//syntax to import .env and configure it
const express=require('express')//---->common javascript way to import "express"(synchronous javascript)
// import express from 'express'//-->module javascript way to import "express" (asynchronous js)

const app=express();
const port=process.env.PORT || 3000;
//there only two process to access the express.
//1.we initialized by "get/post/put/delete" methods
app.get('/',(req,res)=>{
    res.send("hello world node.js");
})

app.get('/page',(req,res)=>{
    res.send("hello this is another page");
})

//2.the methods will then "listen" by the "Express(server)"
//3.import PORT from .env file to make it production ready
app.listen(process.env.PORT,()=>{
     console.log(`this server that I built is working fine!!PORT: http://localhost:${port}`)
})