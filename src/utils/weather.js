const request = require('request')

const weatherFunc = (lat,long,location,callback)=>{
const url = 'https://api.darksky.net/forecast/c91acf5d43272001916e562b38c0484f/'+lat+','+long+'?units=si'
    request({url, json:true},(err,{body})=>{
        if(err)
        {
            callback('Connection Error', undefined)
        }
        else if(!body.currently.summary)
        {
            callback('No Data Found, Try Another search',undefined)
        }
        else
        {
        callback(undefined,{
            location: location,
            summary: body.currently.summary,
            temperature: body.currently.temperature,
            rainPercep: body.currently.precipProbability,
            windSpeed: body.currently.windSpeed,
            humidity: body.currently.humidity,
            currentHour: body.hourly.data[0].time,
            
            firstHour: body.hourly.data[1].time,
            firstHourTemp: body.hourly.data[1].temperature,
            secondHour: body.hourly.data[2].time,
            secondHourTemp: body.hourly.data[2].temperature,
            thirdHour: body.hourly.data[3].time,
            thirdHourTemp: body.hourly.data[3].temperature,
            fourthHour: body.hourly.data[4].time,
            fourthHourTemp: body.hourly.data[4].temperature,
            fifthHour: body.hourly.data[5].time,
            fifthHourTemp: body.hourly.data[5].temperature,
            sixthHour: body.hourly.data[6].time,
            sixthHourTemp: body.hourly.data[6].temperature
        })
        }
    })
}

module.exports={weatherFunc}