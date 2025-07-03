const e = require('express');
const app = e();
const bp = require('body-parser');
const cookie = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path')
dotenv.config();
const router = require('../router/changeinfo');

app.use(e.json());
app.use(cookie());

app.use(bp.urlencoded({extended:true}));
app.use(e.static(path.resolve(__dirname , '../htmlfile')));
app.get('/changeinfo', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/chnageinfo.html'))
})

app.use('/api/changeinfo', router);

app.get('/setting',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../htmlfile/setting.html'))
})

const port = 3000;
app.listen(port,()=>{
    console.log(`the server is running in https://localhost:3000/changeinfo`);
})