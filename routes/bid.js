const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const requests = [{
  id: 1
}, {
  id: 2
}, {
  id: 3
}, {}, {}, {}]

router.get('/', auth, (req, res) => {
  // requests = await Resp.mostRecent();
  res.render('moderate/bid', {
    title: 'Заявки',
    isReq: true,
    requests
  });
});

router.get('/:id/:status', auth, async (req, res) => {
  if (!['accept', 'decline'].includes(req.params.status)) {
    res.end('Invalid');
    return;
  }
  // let doc = await Resp.findById({ id: req.params.id} )
  // doc..status = req.params.status;
  requests[0].status = req.params.status;
  doc.save();
  res.send('ok')
});

// router.get('/:id/decline', async (req, res) => {
//   // let entry = await Resp.findById({ id: req.params.id})
// });

module.exports = router;
