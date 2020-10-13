const fetch = require('node-fetch');

const getSwapi = async(swapi) => {
    let url = `https://swapi.dev/api/${swapi}`
    let data = await fetch(url);
    console.log(data)
    return data.json();
}

module.exports = getSwapi;