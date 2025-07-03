const express = require('express')
const path = require('path');
const cookie = require('cookie');
const bodyparser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../htmlfile')));

app.get('/setting', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/setting.html'));
})

app.get('/changeinfo',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/chnageinfo.html'));
})

app.get('/changepass',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/changepass.html'));
})

app.get('/chnageProfile',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/chnageProfile.html'));
})

app.get('/deleteaccount',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/deleteaccount.html'));
})

app.get('/logout',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/logout.html'));
})

const port = 3000;
app.listen(port, ()=>{
    console.log('the server is running on https://localhost:3000/setting')
})