const express = require('express');
const router = require('./routs');
const sequelize = require('./db/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(router);
app.use(express.static(path.join(__dirname, '/public')));

sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log('http://localhost:3000'));
  });