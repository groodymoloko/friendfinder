# friendfinder
Basic dating compatibility app

A simple Node Express application that does the following:
* Users can fill out a survey and find the most compatible friend.
* The website will return a modal with the name and picture of the suggested friend.

## NPM Modules
The following NPM modules are required by the application:
* Express
* Path

The files are structured as follows:
* server.js - call this file from Node to start the server.  This file requires Express and Path.
* htmlRoutes.js - GET route to display survey page and default route for all other paths.
* apiRoutes.js - GET route to display all friends in JSON format and POST route to handle survey results.
* friends.js - holds array of friend objects.

## Code
Taking in the survey results, the app will:
1) Compare user scores with each possible friend in the array.
2) Calculate the total difference between each possible friend.
3) Return the name and picture of the friend with the least differnce in scores in a modal window.

## Example to start the server app (run from Git Bash or other command line utility)
* $ npm install express --save
* $ npm install path
* $ node server.js
* Open http://localhost:8081 or wherever you are hosting the server in any web browser to view the website
