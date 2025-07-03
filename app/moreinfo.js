const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
const path = require('path');
const routermoreinfo = require('../router/moreinfo');


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../htmlfile')));
app.use('/uploads', express.static('uploads')); 


app.get('/moreinfo', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../htmlfile/moreinfo.html'));
});

app.use('/api/moreinfo', routermoreinfo);

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../htmlfile/home.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/moreinfo`);
});
