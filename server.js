const express = require('express');
const session = require('express-session');
const router = require('./routes');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
// 
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const { strict } = require('assert');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();
// const {urlencoded} = require('body-parser');

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 3600,
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
const hbs = exphbs.create({});

app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.urlencoded({extended:true}));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(router);




sequelize.sync({ force: false })
  .then(app.listen(PORT, () => console.log(`Listening on ${PORT}`)));

  