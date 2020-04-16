const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('addpost', {
    title: 'Аренда квартир',
    isHome: true,
  });
});
 
module.exports = router;
