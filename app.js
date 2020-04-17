const express = require('express');
const hbs = require('hbs');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');

const advModel = require('./models/adv');

const MongoStore = require('connect-mongodb-session')(session);
const cookieParser = require('cookie-parser');




const profileRoutes = require('./routes/profile');
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const bidRoutes = require('./routes/bid');
const allListRoutes = require('./routes/alllist');
const addListRoutes = require('./routes/addlist');

const varMiddleware = require('./middleware/variables');

const cookieCleaner = require('./middleware/clean')


const app = express();

app.use(morgan('dev'));

app.set('view engine', 'hbs');
app.set('view options', {
  layout: 'layouts/main'
});

const store = new MongoStore({
  collection: 'session',
  uri: process.env.MONGODB_URI
})

hbs.registerPartials(`${__dirname}/views/partials`);

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use(cookieParser());

app.use(session({
  secret: 'secret secret',
  resave: false,
  saveUninitialized: false,
  store,
  key: "user_sid",
  cookie: {
    expires: 5000
  },
}));
app.use(varMiddleware);
app.use(cookieCleaner);


app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/bid', bidRoutes);
app.use('/profile', profileRoutes);
app.use('/add', addListRoutes);
app.use('/all_adds', allListRoutes);


const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  } catch (e) {
    console.log(e);
  }
}
start()


module.exports = app;
