const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Adv = require('../models/adv');
const auth = require('../middleware/auth');
const User = require('../models/user');


router.get('/', async (req, res) => {
  console.log(req.session.user);
  const data = await Adv.find({
    author: req.session.user._id
  });
  console.log()
  res.render('./profile/profilePage', {
    title: 'Профиль',
    isProfile: true,
    user: req.session.user,
    adv: data
  });
});

// router.get('/', async (req, res) => {
//   res.render('posts', {
//     adv: data
//   });
// });

module.exports = router;
