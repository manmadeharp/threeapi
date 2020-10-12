const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const getHarry = require('./lib/getHarry');
const getPokemon = require('./lib/getPokemon');
const getSwapi = require('./lib/getSwapi');
const app = express();

app.engine('.hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'layout'
}));

app.listen(3000, () =>  {

})