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

app.get('/', (req, res) => { //location on server
    res.render('index'); // actual page to send to client
});

app.get('/news', (req, res) => {
    res.render('index', {newsstuff});
})

app.post('/harry', async (req, res) =>{
    let harrydata = await getHarry(req.body.harry);
    if (harrydata.cod == 404) {
        res.render('index', {err: 'location wasn\'t found'});
    } 
    else {
        let harrytest = harrydata.url[0];
        console.log(Harrytest)
        res.render('index', {
            harrytest
        })}
    
})
app.post('/pokemon', async (req, res) => {
    let pokemondata = await getPokemon(req.body.pokemon);
    if (pokemondata.cod == 404) {
        res.render('index', {err: 'location wasn\'t found'});
    } 
    else {
        let pokemontest = pokemondata.ability[0]
        console.log(pokemontest)
        res.render('index', {
            pokemontest
        })}
})
app.post('/starwars', async (req, res) => {
    let swapidata = await getSwapi(req.body.swapi);
    if (swapidata.cod == 404) {
        res.render('index', {err: 'location wasn\'t found'});
    } else {
        let swapitest = swapidata.people[0]
        console.log(swapitest)
        res.render('index', {
            swapitest
    })}
})
app.listen(3000, () =>  {
    console.log("listening on port 3000")
})