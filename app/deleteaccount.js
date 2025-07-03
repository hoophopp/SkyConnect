const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('../router/deleteaccount');
const app = express();
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const { register } = require('module');
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded( {extended: true}));
app.use(express.static(path.resolve(__dirname, '../htmlfile')));

app.get('/deleteaccount',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/deleteaccount.html'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/login.html'))
})

app.use('/api/delete',router);

const port = 3000;
app.listen(port, ()=>{
    console.log('the server is running inn https://localhost:3000/deleteaccount')
})