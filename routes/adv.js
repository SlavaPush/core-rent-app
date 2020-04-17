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
})

module.exports = router;
