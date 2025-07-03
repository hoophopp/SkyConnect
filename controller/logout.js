const logout = (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');   
};

module.exports = logout;
