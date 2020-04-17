const router = require('express').Router();
const auth = require('../middleware/auth');


router.get('/', auth, (req, res) => {
  res.render('addpost', {
    title: 'Разместить объявление',
    isHome: true,
  });
});

module.exports = router;
