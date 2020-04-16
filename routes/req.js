const express = require('express');
const router = express.Router();
// coinst Resp = require('../models/resp')

const requests = [{}, {}, {}, {}, {}, {}]

router.get('/', (req, res) => {
  // requests = await Resp.mostRecent();
  res.render('moderate/requests', {
    title: 'Заявки',
    isReq: true,
    requests
  });
});

router.delete('/:id', async (req, res) => {
  // await Resp.deleteOne({ id: req.params.id})
});

router.get('/:id/edit', async (req, res) => {
  // let entry = await Resp.findById({ id: req.params.id})
});

module.exports = router;
