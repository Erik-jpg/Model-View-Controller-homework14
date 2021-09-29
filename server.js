const express = require('express');
const session = require('express-session');
const router = require('./routs');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { strict } = require('assert');
const path = require('path');
const PORT = 5000;
const {urlencoded} = require('body-parser');

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 3600,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};


const app = express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(router);
app.use(express.static(path.join(__dirname, '/public')));
app.use(urlencoded({extended:true}));



sequelize.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  });