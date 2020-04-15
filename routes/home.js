const router = require('express').Router(); //Покдлючаем express



router.get('/', (req, res) => {
  res.render('home', {
    title: 'Главная страница',
    isHome: true,
  });
});







module.exports = router;
