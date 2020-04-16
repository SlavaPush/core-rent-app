const router = require('express').Router();

const requests = [1, 2, 3]

router.get('/', (req, res) => {
  res.render('moderate/requests', {
    title: 'Заявки',
    isReq: true,
    requests
  });
});

module.exports = router;
