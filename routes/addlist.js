const router = require('express').Router();
const auth = require('../middleware/auth');


router.get('/', auth, (req, res) => {
  res.render('addpost', {
    title: 'Аренда квартир',
    isHome: true,
  });
});

module.exports = router;
