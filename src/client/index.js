import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { get_GeoNamesInfo, trips_data, fillValue } from './js/app';
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

//Getting info from main form:
const main_form = document.querySelector('form');
const input_city= document.getElementById('dest');
const input_depDate= document.getElementById('departure-date');
const input_leavingDate= document.getElementById('leaving-date');
const today_dateField = document.getElementById('today-date');
const today_date = new Date();
today_dateField.value = today_date.getFullYear().toString() + '-' + (today_date.getMonth() + 1).toString().padStart(2, 0) +
    '-' + today_date.getDate().toString().padStart(2, 0);
//DOM Elemnts:
//info display:
const city_nameDisplay = document.querySelector('.country');
const trip_countDownDisplay = document.querySelector('.days');
const trip_lengthDisplay = document.querySelector('.length');
//Print box:
const city_namePrint = document.querySelector('#print-country');
const trip_lengthPrint = document.querySelector('#print-length');
const trip_weatherPrint = document.querySelector('#print-weather'); //pending weather api
const trip_imgPrint = document.querySelector('#print-photo'); //pending pix api



//to calculate the countdown of days:
//Converting date format ref: https://stackoverflow.com/questions/22110369/convert-input-type-text-into-date-format.
//https://www.w3resource.com/javascript-exercises/javascript-date-exercise-8.php

const calculateDate = (date1, date2)=>{
    const first_date = new Date(date1);
    console.log(`first date is ${first_date}`);
    const second_date = new Date(date2);
    return Math.floor((Date.UTC(second_date.getFullYear(), second_date.getMonth(), second_date.getDate()) - Date.UTC(first_date.getFullYear(), first_date.getMonth(), first_date.getDate()) ) /(1000 * 60 * 60 * 24));
    }


const handleFormSubmit = (e)=>{
    e.preventDefault();
    //calculate trip countdown:
    const countdown = (Date.parse(input_depDate.value)-Date.parse(today_dateField.value)) / (60*60*24*1000);

    console.log(`this the value of city input ${input_city.value}`);
    console.log(`this the value of dep  input ${input_depDate.value}`);
    console.log(`this the value of leave input ${input_leavingDate.value}`);

    const trip_length = calculateDate(input_depDate.value, input_leavingDate.value);
    trips_data.length = trip_length;
    trips_data.countdown = countdown;
    console.log(`your trip will be ${trips_data.length} day(s) long`);
    fillValue(city_nameDisplay,input_city.value);
    fillValue(city_namePrint,input_city.value);
    fillValue(trip_countDownDisplay,trips_data.countdown);
    fillValue(trip_lengthDisplay,trips_data.length);
    fillValue(trip_lengthPrint,trips_data.length);
    console.log(`& it is ${trips_data.countdown} day(s) Away!`);
    get_GeoNamesInfo(input_city.value);
    resetFormFields();
    console.log(trips_data)
}


main_form.addEventListener('submit',handleFormSubmit);

const resetFormFields = ()=>{
    input_city.value = '';
    input_depDate.value = '';
    input_leavingDate.value = '';
}

export{
    checkForName,
    handleSubmit
}
