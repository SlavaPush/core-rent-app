const express = require('express');
const router = express.Router();
const Bid = require('../models/bid');
const moder = require('../middleware/moder');


router.get('/:id/:status', moder, async (req, res) => {
  if (!['accept', 'decline', 'waiting'].includes(req.params.status)) {
    res.end('Invalid');
    return;
  }
  let bid = await Bid.findById({
    _id: req.params.id
  })
  bid.status = req.params.status;
  if (req.params.status == 'decline') {bid.show = false, bid.status = 'decline'};
  if (req.params.status == 'accept') {bid.show = false, bid.status = 'accept'};
  // bids[0].status = req.params.status;
  await bid.save();
  res.redirect('moderate/bid')
});

router.get('/', moder, async (req, res) => {
  const bids = await Bid.find();
  res.render('moderate/bid', {
    title: 'Заявки',
    isBid: true,
    bids
  });
});


module.exports = router;
