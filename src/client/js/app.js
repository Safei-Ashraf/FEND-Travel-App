import  { handleSubmit,validateInput } from './formHandler';

//Object that would hold all trip's info.
export const trips_data = {};

//1-GeoNames API info and Call:

export const get_GeoNamesInfo = async (cityName = `London`)=>{
console.log('hello from get_GeoNames API Call Start!');

const geoNames_baseUrl = `http://api.geonames.org/postalCodeSearchJSON?placename=${cityName}`;
const goeNames_userName = `&username=safei&maxRows=5`; //to retrive only 5 pieces of info, faster laod.

//Weatherbit API Info:
const weather_apiKey = `f29ef27d6fa14145b0bf0822b3a11d20`;
const weather_apiBaseUrl = 'https://api.weatherbit.io/v2.0/current?lat=';
const weather_forecastBaseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';

//Pix API:
const pix_baseUrl = 'https://pixabay.com/api/?key=';
const pix_apiKey = `19411258-c004517904d8f634f69615628`;
const pix_UrlInfo = `&image_type=photo&category=places`;

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

//Helper Methods:
//to fill html elem:
export const fillValue = (elem, value_toBe) =>{
    elem.innerText = value_toBe;
}