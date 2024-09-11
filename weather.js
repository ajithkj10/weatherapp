// const apiKey="f87bb2dba09f4bd3838121847240809"
// const apiUrl="http://api.weatherapi.com/v1/current.json?key=f87bb2dba09f4bd3838121847240809&q="

async function checkWeather(city){
   
    const response=await fetch("http://api.weatherapi.com/v1/current.json?key=f87bb2dba09f4bd3838121847240809&q="+city)
    const data= await response.json()
    document.getElementById('city').innerHTML=data.location.name
    document.getElementById('temperature').innerHTML=Math.round(data.current.temp_c)+"°C"
    document.getElementById('humidity').innerHTML=data.current.humidity+"%"
    document.getElementById('windspeed').innerHTML=data.current.wind_kph+"km/h"
    const image=document.getElementById('weather-icon')
    image.src=`https:${icon}`
    // document.getElementById('weatherDetail').style.display="block"
    // document.getElementById('error').style.display="none"
    
}
const searchBtn=document.getElementById('searchBtn')
const searchValue=document.getElementById('searchValue')
searchBtn.addEventListener("click",()=>{
    const city=searchValue.value.toLowerCase()
    checkWeather(city)
})
