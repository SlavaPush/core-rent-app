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
  },
  photo: String,
resp: [{
    type: ObjectID,
    ref: 'Resp'
  }],
  ads: [{
    type: ObjectID,
    ref: 'Ads'
  }],
  moderator: {
    type: Boolean,
    default: false
  },
