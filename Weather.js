let searchBtn = document.querySelector("#Search-btn");
let result = document.querySelector("#result");

const getWeatherData = async()=>{
   try {
      let cityName = document.querySelector("#city-name").value.trim();

      if(!cityName){
        result.innerHTML = `<p class="text-red-600 text-center mt-4 font-semibold">Please Enter a City Name...</p>`
      }
   } catch (error) {
    console.log(error,"Error in Fetching Weather Deatils");
   }
}

searchBtn.addEventListener("click",getWeatherData)