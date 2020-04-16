const express = require('express');
const hbs = require('hbs');
const path = require('path');
const morgan = require('morgan');
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');


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
app.use('/profile', profileRoutes);


app.listen(3000, () => console.log('server has been started'));
module.exports = app;
