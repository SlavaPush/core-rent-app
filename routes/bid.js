const express = require('express');
const router = express.Router();
const Bid = require('../models/bid');

// const bids = [{
//   id: 1
// }, {
//   id: 2
// }, {
//   id: 3
// }, {}, {}, {}]

router.get('/', async (req, res) => {
  const bids = await Bid.mostRecent();
  res.render('moderate/bid', {
    title: 'Заявки',
    isBid: true,
    bids
  });
});

router.get('/:id/:status', async (req, res) => {
  if (!['accept', 'decline'].includes(req.params.status)) {
    res.end('Invalid');
    return;
  }
  let bid = await Bid.findById({ id: req.params.id } )
  bid.status = req.params.status;
  // bids[0].status = req.params.status;
  bid.save();
  res.redirect('moderate/bid')
});


module.exports = router;
