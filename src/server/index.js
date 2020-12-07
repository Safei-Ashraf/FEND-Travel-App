const dotenv = require('dotenv');
dotenv.config();
var fetch = require('node-fetch')


var path = require('path')
const express = require('express')
var cors = require('cors')
const app = express()
const bodyParser = require('body-parser');
const { trips_data } = require('../client/js/app.js');
const PORT = process.env.PORT || 8080;


//Express middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('dist'))

console.log(__dirname)


// //API Info: /// TO BE REMOVED
// const application_key =  process.env.API_KEY;

//request Example:
// const getSentiment = async(req,r)=>{

//     let formText = req.body.text;
//     const baseURL ="https://api.meaningcloud.com/sentiment-2.1?";
  
//     const res = await  fetch(`${baseURL}key=${application_key}&url=${formText}&lang=auto`);
//     try {
  
//       const data = await res.json();
//       console.log(data)
  
//       r.send(data);
//     }  catch(error) {
//       console.log("error", error);
//     }
//   }
  
  // app.post('/sentiment', function(req,res){
  //   getSentiment(req,res);
  // })


//request:
const getWeather = async (req,r)=>{

    const getApiResponse = await fetch(req.body.url)
    .then(resp => resp.json())
    .then( info =>{
      console.log(`here from inside the Server POST`);
      trips_data.temp = info.data[0].temp;
      trips_data.weatherDescription = info.data[0].weatherDescription;
      console.log(req.body);
      console.log(trips_data);
    })
}



app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
})


//GET Route Setup:
//Sends back the Project Data Object:
app.get('/add',((req,res)=>{
  console.log(`here from inside the Server GET`);
  res.send(trips_data);
  console.log(trips_data);
}))





//POST Route Setup:
app.post('/add', getWeather);

// function addWeather (req,res){


// };

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!!`)
})

