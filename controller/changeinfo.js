const bcrypt = require("bcrypt");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const changeInfo = async (req, res) => {
    const { password, username, email } = req.body;
    if (!password) {
        return res.json({ message: 'Enter your password before changing' });
    }

    if (!username && !email) {
        return res.json({ message: "Provide at least one field to update" });
    }

    try {
        const userId = req.id;
        if (!userId) {
            return res.redirect('/login');
        }

        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                username: username || user.username,
                email: email || user.email
            }
        });

        return res.redirect('/setting');

    } catch (err) {
        console.log('Error while updating info:', err.message);
        return res.status(500).json({ Error: err.message });
    }
};

module.exports = changeInfo;
