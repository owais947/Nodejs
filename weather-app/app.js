 const request = require('request')
 const geocode = require('./utils/geocode.js')
 const forecast = require('./utils/forecast.js')

 const address = process.argv[2]

 if (!address) {
     return console.log('Please provide an address.')
 }

geocode(address, (error, { latitude, longitude } = {}) => {
    if (error) {
        return console.log(error)
    }

    forecast(latitude, longitude, (error, response) => {
        if (error) {
            return console.log(error)
        }
        return console.log(response)
    })
})