const express = require('express')
const weather = require('./utils/weather.js')
const geocode = require('./utils/geocode.js')
const hbs = require('hbs')
const path = require('path')
const app = express()

const publicDirpath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../pages/views')
const partialsPath = path.join(__dirname,'../pages/partials')

app.use(express.static(publicDirpath))

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Home',
        company: 'Dark Weather',
        sub_title: 'Weather and Forecast'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.location)
    {
        return res.send('Location Required')
    }
    geocode.geocodeFunc(req.query.location,(err,{lat,long,location}={})=>{
        if(err)
        {
            return res.send({error: err})
        }
        else
        {        
            weather.weatherFunc(lat,long,location,(err,result)=>{
                if(err)
                {
                    return res.send({error: err})
                }
                else
                {
                    res.send(result)
                }
            })
        }
    })
})

app.get('/news',(req,res)=>{
    res.render('news',{
        title: 'Home',
        company: 'Dark Weather',
        sub_title: 'Weather and Forecast'
    })
})

app.get('/photos',(req,res)=>{
    res.render('photos',{
        title: 'Home',
        company: 'Dark Weather',
        sub_title: 'Weather and Forecast'
    })
})

app.get('/contact',(req,res)=>{
    res.render('contact',{
        title: 'Home',
        company: 'Dark Weather',
        sub_title: 'Weather and Forecast'
    })
})

app.get('*',(req,res)=>{
    res.render('single',{
        title: '404',
        company: 'Dark Weather',
        sub_title: 'Weather and Forecast'
    })
})


app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})