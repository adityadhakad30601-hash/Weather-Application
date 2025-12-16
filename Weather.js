let searchBtn = document.querySelector("#Search-btn");
let result = document.querySelector("#result");
let API_Key = "1661555dfd6fe83411b455d5607b8c20";

const getWeatherData = async()=>{
   try {
      let cityName = document.querySelector("#city-name").value.trim();

      if(!cityName){
        result.innerHTML = `<p class="text-red-600 text-center mt-4 font-semibold">Please Enter a City Name...</p>`
        return;
      } 

      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}&units=metric`);
      console.log(response);
      
      if(!response.ok){
         result.innerHTML = `<p class="text-red-600 text-center mt-4 font-semibold">City Not Found </p>`;
         return ;
      } 

      let data = await response.json();
      console.log(data);
      
      result.innerHTML= `<h1 class="text-xl font-bold mt-3 text-green-600"> ${data.name}, ${data.sys.country}</h1>
      <p class="text-green-600 font-semibold"> Tempreature:${data.main.temp}°C</p>
      <p class="text-green-600 font-semibold">Wind Speed:${data.wind.speed} </p>
      `;

   } catch (error) {
    console.log(error,"Error in Fetching Weather Deatils");
   }
}

searchBtn.addEventListener("click",getWeatherData)