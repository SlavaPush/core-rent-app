const express = require('express');
const router = express.Router();

const user = {
  userId: 1234,
  name: 'Matthew',
  email: 'matthew_mcconaughey@yandex.ru',
  password: 'hungryLion',
  photo: '',
  response: {
    respId: 1,
    advId: {
      // type: mongoose.Schema.Types.ObjectId,
      ref: 'adv'
    },// связанный id объявления, на которое откликнулся юзер
    tel: 81112223344,// требования для воода телефона?
    date: 01052020,// требования для воода даты?
    time: 1730,// требования для воода времени?
    comment: 'Nice place',
  }
};

const adv = [{
  title: 'Сдаю квартиру студию',
  content: ' 10 кв.м. туалет на улице',
  photo: 'https://avatars.mds.yandex.net/get-zen_doc/225409/pub_5dcc5bbf760122197c9aef7f_5dcd605d723e5e0ec67acb8c/scale_1200',
}, {
  title: 'Сдаю дом на колесах',
  content: 'дорого',
  photo: 'https://avatars.mds.yandex.net/get-pdb/879561/2e7f418a-d222-4e37-ae55-169eb338ba1b/s1200',
}];

const bid = [{
  tel: 81112223344,
  date: 01052020,
  time: 1730,
  comment: 'Кайф',
  status: 'на рассмотрении'
},{
  tel: 81112223344,
  date: 01052020,
  time: 1730,
  comment: ' не Кайф',
  status: 'отклонено'
}
]
router.get('/', (req, res) => {
  res.render('./profile/profilePage', { adv, user, bid });
});


module.exports = router;
