const bcrypt = require('bcrypt');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const deleteAccount = async(req,res)=>{
    const password = req.body;
    if(!password) res.status(501).json({message: "cannt delete account "})

    try{
        const userid= req.id;
        if(!userid){
            res.redirect('/login');
        }

        const user = await prisma.user.findUnique({
            where: {id: userid}
        })
        
        const valid =  await bcrypt(password, user.password);
        if(!valid){
            return res.status(401).json({message: "cannot delete (inncorect password"})
        }

        await prisma.user.delete({
            where: {
                id: userid
            }
        })
        res.json({message: "deleting succefully"});

    }catch(err){
        console.log('Error: ', err.message);
        return res.status(500).json({Error: err.message});
    }
}

module.exports = deleteAccount;