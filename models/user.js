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
  ads: [{
    type: Schema.Types.ObjectId,
    ref: 'Ads'
  }],
  moderator: {
    type: Boolean,
    default: false
  },
});


module.exports = model('User', userSchema);
