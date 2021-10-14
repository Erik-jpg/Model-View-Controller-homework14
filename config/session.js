const withCookie = (req, res, next) => {
    if(!req.sessions.loggedIn) {
        res.redirect('/login');
    }else {
        next();
    }
};

module.exports = withCookie;