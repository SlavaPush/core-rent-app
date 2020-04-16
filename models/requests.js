const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  phone: Number,
  date: Date,
  comment: String,
  userName: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  ОбъявлениеId: [{ type: Schema.Types.ObjectId, ref: 'users' }]

});

module.exports = mongoose.model('requests', requestSchema);
