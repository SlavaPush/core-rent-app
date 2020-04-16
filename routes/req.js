const express = require('express');
const router = express.Router();
// coinst Resp = require('../models/resp')

const requests = [{id: 1}, {id: 2}, {id: 3}, {}, {}, {}]

router.get('/', (req, res) => {
  // requests = await Resp.mostRecent();
  res.render('moderate/requests', {
    title: 'Заявки',
    isReq: true,
    requests
  });
});

router.get('/:id/:status', async (req, res) => {
  if (!['accept', 'decline'].includes(req.params.status)) {
    res.end('Invalid');
    return;
  }
  // let doc = await Resp.findById({ id: req.params.id} )
  // doc.status = req.params.status;
  requests[0].status = req.params.status;
  doc.save();
  res.send('ok')
});


module.exports = router;
