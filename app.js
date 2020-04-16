const express = require('express');
const hbs = require('hbs');
const path = require('path');
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const reqRoutes = require('./routes/req');

const app = express();

app.set('view engine', 'hbs');
app.set('view options', {
  layout: 'layouts/main'
});

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', homeRoutes);
app.use('/auth', authRoutes)
app.use('/requests', reqRoutes)

app.listen(3000);
module.exports = app;
