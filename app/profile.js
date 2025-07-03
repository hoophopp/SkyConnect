const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');
const cookieparser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router = require('../router/profile');


dotenv.config();
app.use(cookieparser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../htmlfile')));

app.get('/profile',()=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/profile.html'))
})

app.use('/profile', router);

app.get('/login',(req, res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/login.html'));
})

app.get('home',(req, res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/home.html'))
})

app.get('/settings',(req, res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/setting.html'))
})

app.get('/profile',(req, res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/profile.html'))
})

app.listen(()=>{
    console.log("the server is running in https//:localhost:3000/profile")
})