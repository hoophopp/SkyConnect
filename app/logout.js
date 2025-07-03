const logoutrouter = require('../router/logout');
const express= require('express');
const app = express();
const bodyparser = require('body-parser');
const cookie = require('cookie-parser');
const path = require('path');

app.use(express.json());
app.use(bodyparser.urlencoded({extended : true}));
app.use(express.static(path.resolve(__dirname, '../htmlfile')));

app.get('/logout',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/logout'));
})

app.use()