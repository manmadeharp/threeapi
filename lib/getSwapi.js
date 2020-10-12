const fetch = require('node-fetch');

const getSwapi = async() => {
    let url = `https://swapi.dev/api/`
    let data = await fetch(url);
    console.log(data)
    return data.json();
}

module.exports = getSwapi;