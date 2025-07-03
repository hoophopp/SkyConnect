const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const homeRouter = require('../router/home');

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../htmlfile')));

app.get('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../htmlfile/home.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../htmlfile/login.html'));
});

app.get("/postpage", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/postpage.html'))
})

app.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/home.html'));
})

app.get('/settings',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/setting.html'))
})

app.get('/profile',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/profile.html'))
})

app.use('/home', homeRouter); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/home`);
});
