const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('addpost', {
    title: 'Разместить объявление',
    isHome: true,
  });
});

module.exports = router;
