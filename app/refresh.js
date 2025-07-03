const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const refreshrouter = require('../router/refreshRouter');
const app = express();
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded( {extended: true}));
app.use(express.static(path.resolve(__dirname, '../htmlfile')));

app.get('/refresh',(res,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/refresh.html'))
})
app.use('/api/refresh', refreshRouter);

app.listen(3000,()=>{
    console.log('server is running on https://localhost:3000/refresh')
})