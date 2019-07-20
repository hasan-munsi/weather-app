const request = require('request')

const geocodeFunc = (place,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+place+'.json?access_token=pk.eyJ1IjoiZGFyay1wYWNpZmljIiwiYSI6ImNqdjR3dm50cjB4czY0NG41ZG45Ym5iN3oifQ.IneVdbYeRu3w_O16X2wtzg&limit=1'
    request({url,json:true},(err,{body})=>{
        if(err)
        {
            callback('Connection Error', undefined)
        }
        else if(body.features.length===0)
        {
            callback('No Data Found, Try another search', undefined)
        }
        else
        {
            callback(undefined,{
                lat: body.features[0].geometry.coordinates[1],
                long: body.features[0].geometry.coordinates[0],
                location: place
            })
        }
    })
}

module.exports = {geocodeFunc}