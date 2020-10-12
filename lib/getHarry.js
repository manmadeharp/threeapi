const fetch = require('node-fetch');

const getHarry = async() => {
    let url = `https://www.potterapi.com/v1/$2a$10$QhhgxEJ1GBW5Cyfk6SmKhOYBRMY/nHuZlNCbROqsnb8taneDKPZYu`
    let data = await fetch(url);
    console.log(data)
    return data.json();
}

module.exports = getHarry;