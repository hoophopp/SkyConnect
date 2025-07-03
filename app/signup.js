const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const signup = require('../router/signup');
const app = express();
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded( {extended: true}));
app.use(express.static(path.resolve(__dirname, '../htmlfile')));

app.get('/signup',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/signup.html'));
})
app.use('/api/signup', signup);

app.get('/moremoreinfo', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../htmlfile/moreinfo.html'));
});


app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/login.html'))
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/signup`);
});
