
function getWeather() {
    document.querySelector(".weather-info").style.display = "block";
    const cityName = document.querySelector("input").value;
    $.ajax({
       url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=47d6d6650842650300bf818abb27ce56&units=metric`,
     
       success: function (data) {
        console.log(data);

      
          
           //THis returns size of direct divs inside weeks div
           console.log(document.getElementById("weeks").childElementCount)
           var elemnt = document.getElementById("weeks")
           var daysDivs = elemnt.getElementsByClassName("days")
           
           //This sets background of 3rd day, wednesday
           //Change all backgrounds like this, according to your condition
           daysDivs[2].style.backgroundImage =  "url('images/rainy.png')";




           
           document.querySelector(".city-name").innerHTML = data.name;
           document.querySelector(".current-weather > span").innerHTML =data.main.temp;
        //    document.querySelector("#img").innerHTML = data.weather[i].images;
           document.querySelector(".description").innerHTML = data.weather[0].main;
        //    document.querySelector(".min > span").innerHTML = Math.round(data.main.temp_min);
        //    document.querySelector(".max > span").innerHTML = Math.round(data.main.temp_max);
        },
       error: function (err) {
           console.log(err);
       }
   });
} 