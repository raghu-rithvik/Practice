const apikey = "";
const apiUrl= "http://api.weatherapi.com/v1/current.json?aqi=no"
const SearchText=document.querySelector(".search input");
const SearchBtn=document.querySelector(".search button");

SearchBtn.addEventListener("click", ()=>{
    checkWeather(SearchText.value);
})

async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}`+ `&key=${apikey}`);
    var data= await response.json();
    document.querySelector(".city").innerHTML=data.location.name;
    document.querySelector(".temp").innerHTML=data.current.temp_c + "°C";
    document.querySelector(".wind").innerHTML=data.current.wind_kph +" kmph";
    document.querySelector(".humidity").innerHTML=data.current.humidity +"%";
    document.querySelector(".weather-icon").src=data.current.condition.icon;
    if(data.current.is_day==0){
        document.getElementById("card").classList.replace("card", "card_night");
    }
    // console.log(data);
}
window.onload=checkWeather("Jadcherla");
