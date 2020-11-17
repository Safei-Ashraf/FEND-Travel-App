#   Evaluate News with NLP - FEND Project 4/5


##  Table of Contents


- Project Summary
- API used
- File Structure
- How TO Run This Project
- Offline Functionality
- Testing

## Project Summary:

This Project provides a tool for the user to analyze text content in an article added using URL, and based on the "Meaning Cloud API", it would analyze the text and return the response back on page to be displayed using the criteria provided back from the API.

##  About NLP:

 >     Natural language processing (NLP) is a subfield of computer science, information engineering, and      artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.


## API used:

### Meaning Cloud API
You could visit it by [clicking the link] (https://www.meaningcloud.com/developer/sentiment-analysis/console/2.1)

##  How To Run This Project:

  1. Clone Project or Download Files
  2. Cd into project file, use "npm install" to get all packages, then "npm audit fix" for potential errors.
  3. Run Command "npm run build-prod" to generate production files for you
  4. To run the backend server use Git bash on Server file then command 'npm run start'
  5. To View in Dev Server use the command 'npm run build-dev', It will keep watching the files and compile any changes you make.
  6. Backend Server runs on port 8080 in local, and dev server on 8081.

##  Offline Functionality
The project have service workers set up in webpack.

##  Testing
The project has Jest installed





