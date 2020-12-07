#   Capstone Travel-App - FEND Project 5/5

##  Table of Contents


- Project Summary
- API's Used
- Demo and Installation
- Offline Functionality
- Testing
- Starter Code


## Project Summary:


This Project provides a form for the user to add the name of a city he would like to visit and dates of his planned journey, and it would return the forecasted weather cased on input and an image of the city.

## API's used:

### Meaning Cloud API


>   GeoNames API  - for city name and info.


>  WeatherBit API  - for weather forecast.


> Pixabay API - for photos.



In order to use the API yourself, Please refer back to the docs.

##  How To Run This Project:

  1. Clone Project or Download Files
  2. Cd into project file, use "npm install" to get all packages, then "npm audit fix" for potential errors.
  3. Run Command "npm run build-prod" to generate production files for you
  4. To run the backend server use Git bash on Server file then command 'npm run start'
  5. To View in Dev Server use the command 'npm run build-dev', It will keep watching the files and compile any changes you make.
  6. Backend Server runs on port 8080 in local, and dev server on 8081.

##  Offline Functionality
Service workers set up in webpack to support offline functionality.

##  Testing
The project has Jest installed, test cases attached for each component.

To run tests using Jest, use the command "npm run test"


### Results:

 PASS  __test__/handleSubmit.test.js (11.598 s)
 PASS  __test__/validateUrl.test.js (11.618 s)

Test Suites: 2 passed, 2 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        23.158 s
Ran all test suites.

## Starter Code:

Basic code and file structure are provided by Udacity, as layout for requirements in project "NLP Evaluation"




