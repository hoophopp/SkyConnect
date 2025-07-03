const { PrismaClient } = require('@prisma/client');
const multer = require('multer');
require('dotenv').config();
const path = require('path');
const prisma = new PrismaClient();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

const upload = multer({ storage });
const uploadMiddleware = upload.single('image');

const addmoreinfo = async (req, res) => {
    const { bio, age } = req.body;

    if (!age) {
        return res.status(400).json({ message: "Enter the age" });
    }

    try {
        const userid = req.id;

        if (!userid) {
            return res.redirect('/login');
        }

        const fileUrl = req.file ? req.file.filename : null;

        const createmoreinfo = await prisma.moreinfo.create({
            data: {
                userId: userid,
                bio,
                age: parseInt(age),
                imagurl: fileUrl
            }
        });

        return res.redirect('/home');

    } catch (err) {
        console.log('Error:', err.message);
        return res.status(500).json({ error: err.message });
    }
};

module.exports = {
    addmoreinfo,
    uploadMiddleware
};
