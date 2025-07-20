function checkIsAuth(req, res, next) {
  if (!req?.cookies?.currentUser) {
    return res.status(401).json({ message: "Unauthorized User" });
  }
  const user = JSON.parse(req.cookies?.currentUser);
  req.user = user;

  next();
}

module.exports = checkIsAuth;
