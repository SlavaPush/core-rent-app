module.exports = function (req, res, next) {
  if (!req.session.user.moderator) {
    return res.redirect('/');
  }
  next()
}
