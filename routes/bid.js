const express = require('express');
const router = express.Router();
const Bid = require('../models/bid');
const auth = require('../middleware/auth');


router.get('/', auth, async (req, res) => {
  const bids = await Bid.mostRecent();
  res.render('moderate/bid', {
    title: 'Заявки',
    isBid: true,
    bids
  });
});

router.get('/:id/:status', auth, async (req, res) => {
  if (!['accept', 'decline', 'waiting'].includes(req.params.status)) {
    res.end('Invalid');
    return;
  }
  let bid = await Bid.findById({
    id: req.params.id
  })
  bid.status = req.params.status;
  if (req.params.status == 'decline') bid.show = false;
    // bids[0].status = req.params.status;
    bid.save();
  res.redirect('moderate/bid')
});


module.exports = router;
