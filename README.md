#   Evaluate News with NLP - FEND Project 4/5

  # Carry ON with Weatherpit API then PIXshit then Printing and we are DONE!

##  Table of Contents


- Project Summary
- About NLP
- API Used
- Demo and Installation
- Offline Functionality
- Testing
- Starter Code

## Project Summary:

This Project provides a tool for the user to analyze text content in an article added using URL, and based on the "Meaning Cloud API", it would analyze the text and return the response back on page to be displayed using the criteria provided back from the API.

##  About NLP:

 >     Natural language processing (NLP) is a subfield of computer science, information engineering, and      artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.


## API used:

### Meaning Cloud API
You could visit it by [clicking the link] (https://www.meaningcloud.com/developer/sentiment-analysis/console/2.1)


In order to use the API yourself, you would need to sign up and obtain a KEY.

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




