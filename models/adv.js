const {
  Schema,
  model,
} = require('mongoose');


const advSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  bid: [{
    type: Schema.Types.ObjectId,
    ref: 'Bid',
  }],
});


module.exports = model('Adv', advSchema);
