const router = require('express').Router();
const Adv = require('../models/adv');
const Bid = require('../models/bid');


router.get('/', async (req, res) => {
  const data = await Adv.find();
  res.render('posts', {
    title: 'Аренда квартир',
    isAll: true,
    house: data,
  });
});

router.post('/bid', async (req, res) => {
  await Bid.create({
    meetengDate: req.body.dateName,
    number: req.body.numberName,
    comment: req.body.commentName,
    date: new Date()
  });
  res.redirect('/profile');
});

router.get('/edit/:id', async (req, res) => {
  const id = req.params.id;
  const adv = await Adv.findOne({
    _id: id
  });
  res.render('edit', {
    adv
  });
});

router.post('/edit/go/:id', async (req, res) => {
  const {
    title,
    content,
    number,
    price,
    photo
  } = req.body;
  await Adv.findByIdAndUpdate({
    _id: req.params.id
  }, {
    title,
    content,
    number,
    price,
    photo
  });
  res.redirect('/adv');
});

router.get('/delete/:id', async (req, res) => {
  await Adv.findByIdAndRemove({
    _id: req.params.id
  });
  res.redirect('/adv');
})

module.exports = router;
