const fetch = require('node-fetch');

const getPokemon = async(pokemon) => {
    let url = `https://pokeapi.co/api/v2/${pokemon}`
    let data = await fetch(url);
    console.log(data)
    return data.json();
}

module.exports = getPokemon;