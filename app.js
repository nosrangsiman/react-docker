const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('/names', (req,res)=>{
    res.send("Nos Rangsiman");
})

app.get('/home', (req,res)=>{
    res.send("This is working!");
})

app.get('/', (req,res)=>{
    res.send("this Api path directory is /home and /names");
})

app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})