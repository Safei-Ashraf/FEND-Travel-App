

//Object that would hold all trip's info.
export const trips_data = {};

//1-GeoNames API info and Call:

export const get_GeoNamesInfo = async (cityName = `London`)=>{
console.log('hello from get_GeoNames API Call Start!');

const geoNames_baseUrl = `http://api.geonames.org/postalCodeSearchJSON?placename=${cityName}`;
const goeNames_userName = `&username=safei&maxRows=5`; //to retrive only 5 pieces of info, faster laod.
const geoNames_Response =  await fetch(`${geoNames_baseUrl}`+`${goeNames_userName }`)
.then(resp=> resp.json())
.then((data) => 
    {
        //Check if response returned as expected:
        if(data.postalCodes.length)
        {
            console.log(data, 'creating location obj')
            const city_lat = data.postalCodes[0].lat;
            const city_lng = data.postalCodes[0].lng;
            const city_countryCode = data.postalCodes[0].countryCode;
            const city_name = data.postalCodes[0].placeName;
    
            const coords = {
                city_countryCode, city_lat, city_name, city_lng
            }
            //Adding info we got from the GeoNames API to the trips obj so we can use it elsewhere:
            trips_data.coords = coords;
            console.log(coords, `full info`);
            console.log(trips_data, `full trip info`);
        }
        else{
            alert('Enter Valid City Name')
        }

        }).catch(err=>console.log('Error', err));
}



export const get_WeatherInfo = async (countdown)=>{
    console.log('hello from Weather API Call Start!');
 //Weatherbit API Info:
const weather_apiKey = `&key=f29ef27d6fa14145b0bf0822b3a11d20`;
const weather_apiBaseUrl = 'https://api.weatherbit.io/v2.0/current?';
const weather_forecastBaseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const lat = trips_data.coords.city_lat;
const lng = trips_data.coords.city_lng;
//If the trip is within a week = today weather
if(countdown <= 7)
    {
    //const weatherBit_Response = await fetch()
    console.log(`trip is less than a week  ${countdown}`)
    const today_forecast = await fetch(`${weather_apiBaseUrl}lat=${lat}&lon=${lng}${weather_apiKey}`)
    .then(resp=> resp.json())
    .then(res => {
        if(!res.error){
            trips_data.temp = res.data[0].temp;
            trips_data.weatherDescription = res.data[0].weather.description;
            //DOM LOGIC TO DRAW INFO TO USER;
            const domTest = document.querySelector('.weather-temp');
            domTest.textContent = `the weather description currently is${trips_data.weatherDescription} and the temp would be ${trips_data.temp} °C`;
        }})
        .catch(err => console.log(err, 'Error'));

    //weather-temp
    }
//If the trip is going to start more than a week later, get predicted forecast
    else
    {
        console.log(`trip is more than a week ${countdown} days`)
        const future_forecast = await fetch(`${weather_forecastBaseUrl}lat=${lat}&lon=${lng}${weather_apiKey}`)
        .then(resp => resp.json())
        .then(res =>{
            if(!res.error)
            {
                trips_data.temp = res.data[0].temp;
                trips_data.weatherDescription = res.data[0].weather.description;
                //DOM LOGIC TO DRAW INFO TO USER;
                const domTest = document.querySelector('.weather-temp');
                domTest.textContent = `the weather is forecasted forecasted description is ${trips_data.weatherDescription} and the temp would be ${trips_data.temp} °C`;
            }
        })
        .catch(err => console.log(err, 'Error'));
    }
}

export const get_PixPic = async(city_name)=>{
//Pix API:
const pix_baseUrl = 'https://pixabay.com/api/?key=';
const pix_apiKey = `19411258-c004517904d8f634f69615628`;
const pix_UrlInfo = `&image_type=photo&category=places&safesearch=true&per_page=5`;

const pix_response = await fetch(`${pix_baseUrl}${pix_apiKey}&q=${city_name}${pix_UrlInfo}`)
.then(response => response.json())
.then(resp => {
    if(!resp.error)
    {
        trips_data.imgUrl = resp.hits[0].webformatURL;
        const img_container = document.querySelector('.img-display');
        img_container.innerHTML = `<img src=${trips_data.imgUrl} class='city-img' alt='destination city image'>`
        
    }
})
.catch(err => console.log('Error', err));
}






//Helper Methods:
//to fill html elem:
export const fillValue = (elem, value_toBe) =>{
    elem.innerText = value_toBe;
}

export const showElem = (elem)=>{
    console.log(elem);
    elem.style.display = 'block';
    return;
}