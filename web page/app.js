console.log("nodeJS project");
//Problem: we need simple way to look up students' profiles.
//solution: use node js to perform the profile lookup

//Create a web server
var router = require('./router.js')
var http = require('http');
const PORT=8080;



var server = http.createServer(function(request, response){

    router.home(request, response);
    router.user(request, response);


}).listen(PORT);


//Handle HTTP route GET / and POST
    //if url: /home
        //show home page
//Handle route GET /:username
    //get json
        //show profile
//Funciton handles the reading of files and merge values.

