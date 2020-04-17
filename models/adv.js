const mongoose = require('mongoose');

const advSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,

  price: {
    type: Number,
    required: true,
  },
  // photo: {
  //   type: String,
  //   required: true,
  // },
  // date: {
  //   type: Date,
  //   required: true,
  // },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  bid: [{
    type: Schema.Types.ObjectId,
    ref: 'Bid',
  }],

});

const advModel = mongoose.model('adv', advSchema);


module.exports = model('Adv', advSchema);

