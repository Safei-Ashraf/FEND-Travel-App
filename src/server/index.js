const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);


var path = require('path')
const express = require('express')
var cors = require('cors')
const app = express()
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js')


//Express middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('dist'))

console.log(__dirname)

//API Info:
const application_key =  process.env.API_KEY;

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
