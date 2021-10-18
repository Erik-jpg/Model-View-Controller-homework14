const withCookie = (req, res, next) => {
    if(!req.sessions.loggedIn) {
        res.redirect('/signin');
    }else {
        next();
    }
};

module.exports = withCookie;