const express = require('express');
const hbs = require('hbs');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');

const profileRoutes = require('./routes/profile');
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const reqRoutes = require('./routes/req');

const MONGODB_URI = 'mongodb+srv://slava:9W3f7yGwNWj1TmPN@cluster0-qtwws.mongodb.net/test?retryWrites=true&w=majority';


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
app.use(morgan('dev'));


app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/requests', reqRoutes);
app.use('/profile', profileRoutes);


const PORT = process.env.PORT || 3000;


async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
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
