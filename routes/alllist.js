const router = require('express').Router();
const Adv = require('../models/adv');

router.get('/', async (req, res) => {
  const data = await Adv.find();
  res.render('posts', {
    title: 'Аренда квартир',
    isAll: true,
    house: data,
  });
});
