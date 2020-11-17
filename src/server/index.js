const dotenv = require('dotenv');
dotenv.config();
var fetch = require('node-fetch')

console.log(`Your API key is ${process.env.API_KEY}`);


var path = require('path')
const express = require('express')
var cors = require('cors')
const app = express()
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js')
const PORT = process.env.PORT || 8080;


//Express middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('dist'))

console.log(__dirname)

// Setup empty JS object to act as endpoint for all routes
projectData = {};

//API Info:
const application_key =  process.env.API_KEY;

//request:
const getSentiment = async(req,r)=>{

    let formText = req.body.text;
    const baseURL ="https://api.meaningcloud.com/sentiment-2.1?";
  
    const res = await  fetch(`${baseURL}key=${application_key}&url=${formText}&lang=auto`);
    try {
  
      const data = await res.json();
      console.log(data)
  
      r.send(data);
    }  catch(error) {
      console.log("error", error);
    }
  }
  
  app.post('/sentiment', function(req,res){
    getSentiment(req,res);
  })
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// app.post('/', function(req,res){
//     let data = req.body;
//     console.log(`This is the new POST body SERVER SIDE: ${data}`);
//     projectData['confidence'] = data.confidence;
//     projectData['agreement'] = data.agreement;
//     projectData['score_tag'] = data.score_tag;
//     res.send(projectData)
//     console.log(`This is projectData result after post ${projectData}`);
// });
