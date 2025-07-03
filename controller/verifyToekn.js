const jwt = require('jsonwebtoken');

const verifytoken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Authorization failed: token not found" });
    }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.id = verified; 
        next();
    
};

module.exports = verifytoken;
