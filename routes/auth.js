const express = require('express');
const router = express.Router();
const User = require('../models/user')



router.get('/login', async (req, res) => {
  res.render('auth/login', {
    title: 'Авторизация',
    isLogin: true
  })
});

router.post('/register', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone
    } = req.body;

    const candidate = await User.findOne({
      email
    });

    if (candidate) {
      res.redirect('/auth/login#register');
    } else {
      const user = new User({
        name,
        email,
        phone,
        password,
      });
      await user.save()
      res.redirect('/auth/login#login');
    }
  } catch (e) {
    console.log(e);
  }
});


module.exports = router
