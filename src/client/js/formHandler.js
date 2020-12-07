//const apiKey = 'b4a8479340811ab1df60bf24f9729c91';

import { text } from "body-parser";
const application_key =  process.env.API_KEY;



// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
//     Client.checkForName(formText)
//     const textCheck =validateInput(formText);
//      const fullUrl = `http://api.meaningcloud.com/sentiment-2.1?key=${application_key}&lang=auto&url=${formText}&model=general`;
//     console.log(textCheck);
//     if(textCheck === false){
//         alert('Please Add a Valid URL')
//     }
//     else{

//     console.log("::: Form Submitted :::")
//     fetch(`http://localhost:8080/sentiment`,{
//         method: 'POST', 
//         credentials: 'same-origin', 
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({text:formText})
//     })
//     .then(res => res.json())
//     .then(function(res) {
//         if(res.status.msg == 'OK'){
//         document.getElementById('results').innerHTML = 
//         `<section class='response'>
//         <p><strong>Status</strong>: ${res.status.msg}. </p>
//         <p><strong>Agreement :</strong> ${res.agreement}.</p>
//         <p><strong>Subjectivity:</strong>  ${res.subjectivity}.</p>
//         <p><strong>Confidence Score:</strong>  ${res.confidence}.</p>
//         </section>`;}
//         else{
//             document.getElementById('results').innerHTML = 
//             `<section class='response'> Unable to analyze content
//            <p>NLP API returned error <em>"${res.status.msg}"</em> </p>Please try a valid source
//             </section>`
//         }
//     })
//     // fetch('http://localhost:8081/test')
//     // .then(res => res.json())
//     // .then(function(res) {
//     //     document.getElementById('results').innerHTML = res.message
//     // })
// }
//}

//Check if input is valid letters ref: https://stackoverflow.com/questions/49633558/javascript-form-validation-letters-only
export function validateInput(inputtxt) {
    var letters = /^[a-z]*$/i;
    if (!inputtxt.value.match(letters)) {
        alert('Please input letters only in City Name!');
        return false;
    }else{
        return true;
    }
}
//test