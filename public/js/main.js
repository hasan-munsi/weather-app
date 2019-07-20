const form = document.querySelector('#locationForm')
const input = document.querySelector('#locationInput')

const getMyHour = (unix)=>{
    var date = new Date(unix*1000);
            var hours = date.getHours();
            //var seconds = date.getSeconds();
            var nextHour = 0;
            var hourss = 0
            if(hours>11)
            {
                hourss = hours-12 + " p.m"
                nextHour = hours-11 + " p.m"
            }
            else
            {
                hourss = hours + " a.m"
                nextHour = hours+1 + " a.m"
            }
    return {hourss,nextHour}
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
        fetch('http://localhost:3000/weather?location='+input.value).then((res)=>{
        res.json().then((data)=>{
            if(data.summary===undefined)
            {
            document.querySelector('#loactionOut').innerHTML= data.error
            }
            else
            {
            document.querySelector('#current_hour').innerHTML= getMyHour(data.currentHour).hourss+' - '+getMyHour(data.currentHour).nextHour
            document.querySelector('#loactionOut').innerHTML= data.location
            document.querySelector('#summaryOut').innerHTML= '<small>'+data.summary+'</small>'
            document.querySelector('#rainPercep').innerHTML= '<img src="images/icon-umberella.png" alt="">'+data.rainPercep+"%"
            document.querySelector('#windPercep').innerHTML= '<img src="images/icon-wind.png" alt="">'+data.windSpeed+' km/h'
            document.querySelector('#humidityPercep').innerHTML= 'Humidity: '+data.humidity+' %'
            document.querySelector('#tempOut').innerHTML= data.temperature+"<sup>o</sup>C"

            document.querySelector('#firstHour').innerHTML= getMyHour(data.firstHour).hourss+' - '+getMyHour(data.firstHour).nextHour
            document.querySelector('#firstTemp').innerHTML= data.firstHourTemp+"<sup>o</sup>C"

            document.querySelector('#secondHour').innerHTML= getMyHour(data.secondHour).hourss+' - '+getMyHour(data.secondHour).nextHour
            document.querySelector('#secondTemp').innerHTML= data.secondHourTemp+"<sup>o</sup>C"

            document.querySelector('#thirdHour').innerHTML= getMyHour(data.thirdHour).hourss+' - '+getMyHour(data.thirdHour).nextHour
            document.querySelector('#thirdTemp').innerHTML= data.thirdHourTemp+"<sup>o</sup>C"

            document.querySelector('#fourthHour').innerHTML= getMyHour(data.fourthHour).hourss+' - '+getMyHour(data.fourthHour).nextHour
            document.querySelector('#fourthTemp').innerHTML= data.fourthHourTemp+"<sup>o</sup>C"

            document.querySelector('#fifthHour').innerHTML= getMyHour(data.fifthHour).hourss+' - '+getMyHour(data.fifthHour).nextHour
            document.querySelector('#fifthTemp').innerHTML= data.fifthHourTemp+"<sup>o</sup>C"

            document.querySelector('#sixthHour').innerHTML= getMyHour(data.sixthHour).hourss+' - '+getMyHour(data.sixthHour).nextHour
            document.querySelector('#sixthTemp').innerHTML= data.sixthHourTemp+"<sup>o</sup>C"
            }
        })
    })
})