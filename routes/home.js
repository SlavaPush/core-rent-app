const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('addpost', {
    title: 'Главная страница',
    isHome: true,
  });
});

module.exports = router;
