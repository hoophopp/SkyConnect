const jwt = require('jsonwebtoken');

const refresh = async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.sendStatus(401); 

  try {
    jwt.verify(token, process.env.REFRESH_SECRET, (err, user) => {
      if (err) return res.sendStatus(403); 
      
      const newAccessToken = jwt.sign(
        { id: user.id},
        process.env.ACCESS_SECRET,
        { expiresIn: '15m' }
      );

      res.json({ token: newAccessToken }); 
    });
  } catch (err) {
    console.log('Error: ', err.message);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = refresh;
