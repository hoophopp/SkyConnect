const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const login = async(req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.json({message: "make sure to enter password and email"});
    }

    try{
        const user = await prisma.user.findUnique({
            where: {email}
        })
        if(!user){
            return res.json({message:'login failed'})
        }

        const math = await bcrypt.compare(password, user.password);
        if(!math){
            return res.json({Error: 'the password is inncorrect'});
        }

        const accestoken = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: "1h"});
        const refreshtoken = jwt.sign({id: user.id}, process.env.REFRESH_ACCES, {expiresIn: "7d"});

        res.cookie('refreshAcces', refreshtoken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict', 
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        res.json({token: accestoken});

    }catch(err){
        console.log('Error: ',err.message);
        return res.status(500).json({Error: err.message})
    }
}

const signup = async(req,res)=>{
    const {email, username, password} = req.body;
    if(!email ||!username || !password){
        return res.json({message:"please make sure to entyer all the data"});
    }

    const hashpassword = await bcrypt.hash(password, 10);
    if(!hashpassword){
        return res.status(404).json({message: "Error happend Failed"});
    }

    try{
        const newuser = await prisma.user.create({
            data:{
                email,
                password,
                username
            }
        })
        res.redirect('/moremoreinfo')
        return res.json(newuser);

    }catch(err){
        console.log('Error: ',err.message);
        return res.status(500).json({Error: err.message})
    }
}

module.exports = {
    login,
    signup
}