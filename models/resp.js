const {
  Schema,
  model
} = require('mongoose');


const respSchema = new Schema({
  number: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  meetengDate: {
    type: String,
    required: true
  },
  person: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  ads: {
    type: Schema.Types.ObjectId,
    ref: 'Ads'
  },
  status: {
    type: String,
    default: 'wait'
  }
})

module.exports = model('Resp', respSchema);
