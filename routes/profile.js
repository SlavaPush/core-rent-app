const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Adv = require('../models/adv');
const auth = require('../middleware/auth');
const user = require('../models/user');


router.get('/', (req, res) => {

  // const profileUser = await user.find;
  res.render('./profile/profilePage', {
    title: 'Профиль',
    isProfile: true,
    user: req.session.user
  });
});

router.get('/', async (req, res) => {
  const data = await Adv.find();
  res.render('posts', {
    adv: data
  });
});

module.exports = router;
