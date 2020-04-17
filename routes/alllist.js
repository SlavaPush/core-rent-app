const router = require('express').Router();

const flat = [{
    id: 1,
    name: 'Сдаю 2-х комнатную квартиру в Москве',
    comment: '1 комната 10 кв.м., 2 комната 15 кв.м. ',
    number: '8(915)555-55-55',
    price: "15 000 руб."
  },
  {
    id: 2,
    name: 'Сдаю 1 комнатную квартиру в МО',
    comment: 'Комната 30 кв.м.',
    number: '8(915)555-55-55',
    price: "20 000 руб."
  },
  {
    id: 3,
    name: 'Сдаю 4-х комнатную квартиру в Засранске =)',
    comment: 'Комнаты по 15 кв.м.',
    number: '8(915)555-55-55',
    price: "50 000 руб."
  }
]

router.get('/', (req, res) => {
  res.render('posts', {
    title: 'Аренда квартир',
    isHome: true,
    flat
  });
});

module.exports = router;
