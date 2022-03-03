// var isC = true;
// var cTemp = document.querySelectorAll(".max-temp,.min-temp");
// function setCclass(){
//     for (var i = 0; i < cTemp.length;i++){
//         cTemp[i].classList.add("celsius")
//     }
// }
// setCclass()
// function celciusToF(){
//     if (!isC){
//         for (var i = 0; i < cTemp.length;i++){
//             cTemp[i].innerText = Math.round(((cTemp[i].innerText - 32)*5/9))
//             isC = true
//             cTemp[i].classList.add("celsius")
//             cTemp[i].classList.remove("farh")
//         }
//     }
//     else{
//         for (var i = 0; i < cTemp.length;i++){
//             cTemp[i].innerText = Math.round(((cTemp[i].innerText * 9/5)+32))
//             isC = false
//             cTemp[i].classList.add("farh")
//             cTemp[i].classList.remove("celcius")
//         }   
//     }
// }
// function displayAlert(){
//     alert('Loading weather report...')
// }
// function hiddenCookies(){
//     document.getElementById("cookies-pop").style.display = "none";
// }
/////////////////////////////
var todayCurr = document.querySelector(".today-curr")
var todayMax = document.querySelector(".today-max")
var todayMin = document.querySelector(".today-min")
var day1Max = document.querySelector(".day1-max")
var day1Min = document.querySelector(".day1-min")
var day2Max = document.querySelector(".day2-max")
var day2Min = document.querySelector(".day2-min")
var tempSelector = document.querySelector("#CorF")

async function getWeatherData() {
    var response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=c3cdc3aeab8142bb9b9142323222102&q=parkland,florida&days=3&aqi=no&alerts=no")
    var weatherData = await response.json();
    console.log(weatherData);
    if (tempSelector.value == "C"){
        todayCurr.innerHTML = weatherData.current.temp_c+"°";
        todayMax.innerHTML = weatherData.forecast.forecastday[0].day.maxtemp_c+"°";
        todayMin.innerHTML = weatherData.forecast.forecastday[0].day.mintemp_c+"°";
        day1Max.innerHTML = weatherData.forecast.forecastday[1].day.maxtemp_c+"°";
        day1Min.innerHTML = weatherData.forecast.forecastday[1].day.mintemp_c+"°";
        day2Max.innerHTML = weatherData.forecast.forecastday[2].day.maxtemp_c+"°";
        day2Min.innerHTML = weatherData.forecast.forecastday[2].day.mintemp_c+"°";
    }
    else{
        todayCurr.innerHTML = weatherData.current.temp_f+"°";
        todayMax.innerHTML = weatherData.forecast.forecastday[0].day.maxtemp_f+"°";
        todayMin.innerHTML = weatherData.forecast.forecastday[0].day.mintemp_f+"°";
        day1Max.innerHTML = weatherData.forecast.forecastday[1].day.maxtemp_f+"°";
        day1Min.innerHTML = weatherData.forecast.forecastday[1].day.mintemp_f+"°";
        day2Max.innerHTML = weatherData.forecast.forecastday[2].day.maxtemp_f+"°";
        day2Min.innerHTML = weatherData.forecast.forecastday[2].day.mintemp_f+"°";
    }
}
    
getWeatherData();
