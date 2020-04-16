const express = require('express');
const hbs = require('hbs');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');

const profileRoutes = require('./routes/profile');
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const bidRoutes = require('./routes/bid');
const varMiddleware = require('./middleware/variables');
const allListRoutes = require('./routes/alllist');
const addListRoutes = require('./routes/addlist');



const app = express();

app.set('view engine', 'hbs');
app.set('view options', {
  layout: 'layouts/main'
});

hbs.registerPartials(`${__dirname}/views/partials`);

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use(session({
  secret: 'secret secret',
  resave: false,
  saveUninitialized: false
}));
app.use(varMiddleware);
app.use(morgan('dev'));


app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/requests', bidRoutes);
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
