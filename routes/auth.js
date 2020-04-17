const express = require('express');
const router = express.Router();
const User = require('../models/user');
const {
  compare,
  hash
} = require('bcryptjs');


router.get('/login', async (req, res) => {
  res.render('auth/login', {
    title: 'Авторизация',
    isLogin: true
  })
});

router.post('/login', async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    const candidate = await User.findOne({
      email
    });
    if (candidate) {
      const areSame = await compare(password, candidate.password);
      if (areSame) {
        req.session.user = candidate;
        req.session.isAuthenticated = true;
        req.session.save(err => {
          if (err) {
            throw err;
          } else {
            return res.redirect('/')
          }
        })
      } else {
        return res.redirect('/auth/login#login')
      }
    } else {
      return res.redirect('/auth/login#login')
    }
  } catch (e) {
    console.log(e)
  }
})

router.post('/register', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone
    } = req.body;

    const candidate = await User.findOne({
      email,
    });

    if (candidate) {
      res.redirect('/auth/login#register');
    } else {
      const hashPassword = await hash(password, 10)
      const user = new User({
        name,
        email,
        phone,
        password: hashPassword,
      });
      await user.save();
      req.session.user = user;
      req.session.isAuthenticated = true;
      req.session.save(err => {
        if (err) {
          throw err;
        } else {
          return res.redirect('/')
        }
      })
    }
  } catch (e) {
    console.log(e);
  }
});

router.get('/logout', async (req, res) => {
  req.session.destroy(() => {
    res.redirect('/auth/login#login')
  })
});



module.exports = router
