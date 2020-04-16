const router = require('express').Router(); //Покдлючаем express



router.get('/', (req, res) => {
  res.render('addpost', {
    title: 'Главная страница',
    isHome: true,
  });
});







module.exports = router;
