const router = require('express').Router();
const mongoose = require('mongoose');
const advModel = require('../models/adv');

router.get('/', async (req, res) => {
  const data = await advModel.find();
  res.render('posts', {
    title: 'Аренда квартир',
    isHome: true,
    house: data,
  });
});


router.post('/', async (req, res) => {
  await advModel.create({
    title: req.body.titleName,
    content: req.body.contentName,
    number: req.body.numberName,
    price: req.body.priceNumber,
  });
  const data = await advModel.find();
  res.render('posts', { house: data });
});


module.exports = router;
