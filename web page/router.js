var profile = require("./profile.js");
function user(request, response){

    var userName = request.url.replace("/", "");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    if(userName.length>0){
        //get data

        var studentProfile = new profile(userName);


        studentProfile.on("end", function(profileJSON){
            //show profile

            var value = {
                avatarUrl: profileJSON.gravatar_url,
                username:profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript

            }

            response.write(userName+" has "+value.badges+" badges");
            response.end("footer");
        });
        studentProfile.on("error", function(error){
            console.log(error);
        });
    }
}
function home(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    if(request.url==="/"){
        response.write("head");
        response.write("Search");
        response.end("Footer");
    }
}
module.exports.home = home;
module.exports.user = user;