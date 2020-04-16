const {
  Schema,
  model
} = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  photo: String,
  resp: [{
    type: Schema.Types.ObjectId,
    ref: 'Resp'
  }],
  adv: [{
    type: Schema.Types.ObjectId,
    ref: 'Adv'
  }],
  bids: [{
    type: Schema.Types.ObjectId,
    ref: 'Bid'
  }],
  moderator: {
    type: Boolean,
    default: false
  },
});


module.exports = model('User', userSchema);
