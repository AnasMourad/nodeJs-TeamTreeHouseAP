var profile = require("./profile.js");
var renderer = require("./renderer.js");
function user(request, response){

    var userName = request.url.replace("/", "");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    if(userName.length>0){
        //get data

        var studentProfile = new profile(userName);

        renderer.view("header", {}, response);
        studentProfile.on("end", function(profileJSON){
            //show profile

            var value = {
                avatarUrl: profileJSON.gravatar_url,
                username:profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript

            }

            renderer.view("profile", value, response);
            renderer.view("footer", {}, response);
            response.end();
        });
        studentProfile.on("error", function(error){
            response.write(error);
            renderer.view("error", {errorMessage: error.message}, response);
            renderer.view("Search",{}, response);
            renderer.view("Footer", {}, response);
            response.end("");
        });
    }
}
function home(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    if(request.url==="/"){
        renderer.view("header",{} ,response);
        renderer.view("Search",{}, response);
        renderer.view("Footer", {}, response);
        response.end();
    }
}
module.exports.home = home;
module.exports.user = user;