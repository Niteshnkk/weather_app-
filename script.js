//     //  const user_input= document.querySelector(".search_bar");
//     //  const search= document.querySelector(".serachtool");
//      const temp= document.querySelector(".temp");
//      const curr_date= document.querySelector(".date_time");
//      const ucity_name= document.querySelector(".city_name");
//      const clear_data= document.querySelector(".clear");
//      const real_temp= document.querySelector(".real_temp");


//     // 2fa73590fd8b5a4c6e68098ad5625395 api

//     const API_KEY = "2fa73590fd8b5a4c6e68098ad5625395";
    
//     // const API_KEY = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key

// const getWeatherData = async (city) => {
//   try {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//     if (!response.ok) {
//       throw new Error('City not found');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// const updateWeatherUI = (data) => {
//   if (!data) {
//     // Display error message or handle error
//     return;
//   }
//   // Update UI with weather data
//   const cityName = data.name;
//   const temperature = data.main.temp;
//   const weatherDescription = data.weather[0].description;
//   const dateTime = new Date(data.dt * 1000).toLocaleString();
  
//   ucity_name.textContent = cityName;
//   real_temp.textContent = `${temperature} °C`;
//   clear_data.textContent = weatherDescription;
//   curr_date.textContent = dateTime;
// };

// const user_input = document.querySelector(".search_bar");
// const search = document.querySelector(".serachtool");

// const get_temp = () => {
//   const value = user_input.value.trim();
//   if (value !== "") {
//     getWeatherData(value)
//       .then(updateWeatherUI)
//       .catch(error => console.error(error));
//   }
// };

// search.addEventListener("click", get_temp);


//START FROM BEGINNING 

     const user_input= document.querySelector(".search_bar");
     const search= document.querySelector(".serachtool");
     const temp= document.querySelector(".temp");
     const curr_date= document.querySelector(".date_time");
     const ucity_name= document.querySelector(".city_name");
     const clear_data= document.querySelector(".clear");
     const real_temp= document.querySelector(".real_temp");

     const API_KEY ="2fa73590fd8b5a4c6e68098ad5625395";
      


 



     //function fetch weather data for the provide city using the openWeathermap api 
     const getWeatherData = async(city)=>{
          try{
            // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);



           if(!response.ok){
            throw new Error("city not found");
           }
           const data= await response.json();
           return data;

          }
          catch(error){
            console.error(error);
            return null;
          }
     };
//The updateWeatherUI() function updates the UI with the fetched weather data.
     const updateWeatherUI = (data) =>{
         if(!data){
          //  alert("enter a corrct city name ");
           return ;

         }
         const cityName= data.name;
         const temperature =data.main.temp;
         const weatherDescription = data.weather[0].description;

         const dateTime = new Date(data.dt * 1000).toLocaleString();
         ucity_name.textContent =cityName;
         real_temp.textContent= ` ${temperature} °C `;
         clear_data.textContent =weatherDescription;
         curr_date  .textContent=dateTime;

     };
         //function to handle user input 
         const handleInput =( ) =>{
         
          const value = user_input.value.trim();
    
          if(value !==""){

            getWeatherData(value)
            .then(updateWeatherUI)
            .catch(error => console.error(error));
          }
         }
    
         //function to handle serach tool icon click 
         const handleSearchClick =()=>{
          get_temp();
         }

         //function to handle click on famous city names  
         const handleCityClick =(cityName)=>{
          getWeatherData(cityName)
          .then(updateWeatherUI)
          .catch(error => console.error(error));
         }

         //selecting all city element in the famous_city section 
         const famousCities = document.querySelectorAll(".famous_city span ");

         //adding event listener to each city element 

         famousCities.forEach( city   =>{
          city.addEventListener('click',() =>{
            const cityName =city.textContent;

            handleCityClick(cityName);
          })
         })
    

     //An event listener is added to the search icon to trigger the get_temp() function when clicked.

     const get_temp = () =>{
        const value =user_input.value.trim();
        if(value !==""){
            getWeatherData(value)
            .then(updateWeatherUI)
            .catch(error =>console.error(error));

        }
     };
     user_input.addEventListener("input",handleInput);
     search.addEventListener("click",get_temp);












