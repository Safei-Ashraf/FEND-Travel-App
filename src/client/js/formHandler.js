//const apiKey = 'b4a8479340811ab1df60bf24f9729c91';

import { text } from "body-parser";
const application_key =  process.env.API_KEY;



function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    const textCheck =validateUrl(formText);
     const fullUrl = `http://api.meaningcloud.com/sentiment-2.1?key=${application_key}&lang=auto&url=${formText}&model=general`
    console.log(textCheck);
    if(textCheck === false){
        alert('Please Add a Valid URL')
    }
    else{

    console.log("::: Form Submitted :::")
    fetch('/sentiment',{
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text:formText})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.status.msg
    })
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}
}
//Check if input is a valid URL or not /*https://stackoverflow.com/questions/8667070/javascript-regular-expression-to-validate-url*/ 
function validateUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }

export { handleSubmit,validateUrl }
