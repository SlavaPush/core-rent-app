const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const advModel = require('../models/adv');


router.get('/', (req, res) => {
  res.render('./profile/profilePage', { title: 'Профиль' });
});

router.get('/', async (req, res) => {
  const data = await advModel.find();
  res.render('posts', { adv: data });
});

module.exports = router;
