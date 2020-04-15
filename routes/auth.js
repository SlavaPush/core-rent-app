const express = require('express');
const router = express.Router();



router.get('/login', async (req, res) => {
  res.render('auth/login', {
    title: 'Авторизация',
    isLogin: true
  })
})


module.exports = router
