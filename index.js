const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const getHarry = require('./lib/getHarry');
const getPokemon = require('./lib/getPokemon');
const getSwapi = require('./lib/getSwapi');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index'); 
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.engine('.hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'layout'
}));

app.set('view engine', '.hbs');

app.post('/harry', async (req, res) =>{
    let harrydata = await getHarry();
    if (harrydata.cod == 404) {
        res.render('index', {err: 'location wasn\'t found'});
    } 
    else {
        let harrytest = harrydata.url;
        console.log(Harrytest)
        res.render('index', {
            harrytest
        })}
    
})
app.post('/pokemon', async (req, res) => {
    let pokemondata = await getPokemon();
    if (pokemondata.cod == 404) {
        res.render('index', {err: 'location wasn\'t found'});
    } 
    else {
        let pokemontest = pokemondata.ability
        console.log(pokemontest)
        res.render('index', {
            pokemontest
        })}

    if (swapidata.cod == 404) {
        res.render('index', {err: 'location wasn\'t found'});
    } 
    else {
        let swapitest = swapidata.people
        res.render('index', {
            swapitest
    })}

})
app.post('/starwars', async (req, res) => {
    let swapidata = await getSwapi();
    if (swapidata.cod == 404) {
        res.render('index', {err: 'location wasn\'t found'});
    } else {
        let swapitest = swapidata.people
        console.log(swapitest)
        res.render('index', {
            swapitest
    })}
})
app.listen(3000, () =>  {
    console.log("listening on port 3000")
})