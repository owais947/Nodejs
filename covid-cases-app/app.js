const request = require('request')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the country for covid cases- ", function(country) {
    const url = 'https://corona.lmao.ninja/v2/countries/' + country + '?yesterday'
    request({url, json: true}, (error, { body }) => {
        console.log(body.cases)
        process.exit()
    })
})
