const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const refreshrouter = require('../router/login');
const app = express();
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const { register } = require('module');
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded( {extended: true}));
app.use(express.static(path.resolve(__dirname, '../htmlfile')));

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/login.html'))
})

app.get('/signup',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/signup.html'))
})

app.use('/api/login', refreshrouter);
app.listen(()=>{
    console.log("the server iss running on https://localhost:3000/login")
})
