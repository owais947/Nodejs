const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=59558376682fb95b4ecbb363a9239eeb&query=' + latitude + ',' + longitude

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to reach forecast!', undefined)
        }
        else if (body.error) {
            callback('Forecast does not exist for the given address', undefined)
        }
        else {
            callback(undefined, 'It is ' + body.current.temperature + ' degrees out and it feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast