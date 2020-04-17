const router = require('express').Router();
const auth = require('../middleware/auth');
const Adv = require('../models/adv');


router.get('/', auth, (req, res) => {
  res.render('addpost', {
    title: 'Разместить объявление',
    isAdd: true,
  });
});


router.post('/new', async (req, res) => {
  await Adv.create({
    title: req.body.titleName,
    content: req.body.contentName,
    number: req.body.numberName,
    price: req.body.priceNumber,
    photo: req.body.addPhotolist,
  });
  res.redirect('/all_adds');
})


module.exports = router;
