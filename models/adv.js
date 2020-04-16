const {
  Schema,
  model,
} = require('mongoose');


const advSchema = new Schema({
  title: {
    type: String,
<<<<<<< HEAD
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
  person: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  bid: {
    type: Schema.Types.ObjectId,
    ref: 'Bid',
=======
    required: true
  },
  content: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  person: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  bid: {
    type: Schema.Types.ObjectId,
    ref: 'Adv'
>>>>>>> master
  },
});


<<<<<<< HEAD
=======

>>>>>>> master
module.exports = model('Adv', advSchema);
