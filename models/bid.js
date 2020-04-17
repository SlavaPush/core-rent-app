const {
  Schema,
  model
} = require('mongoose');


const bidSchema = new Schema({
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
    ref: 'Adv'
  },
  comment: {
    type: String
  },
  status: {
    type: String,
    default: 'waiting'
  }
})



module.exports = model('Bid', bidSchema);
