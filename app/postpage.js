const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const path = require('path');
const routermoreinfo = require('../router/post');

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../htmlfile')));

// Serve HTML pages
app.get('/post', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../htmlfile/postpage.html'));
});

app.get('/postpage', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../htmlfile/postpage.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../htmlfile/login.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../htmlfile/home.html'));
});

app.get('/settings', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../htmlfile/setting.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../htmlfile/profile.html'));
});

// ✅ API route for posting
app.use('/api/newpost', routermoreinfo);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}/post`);
});
