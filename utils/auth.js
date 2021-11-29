const withAuth = (req, res, next) => {
  req.session.logged_in = true; //REMOVE THIS LINE - FOR DEV ONLY
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};




module.exports = withAuth;
