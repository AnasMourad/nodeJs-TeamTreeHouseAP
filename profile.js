var http = require("https");
function printMessage(userName, badgeCount, points){

    var message = userName+" has "+badgeCount+" total badge(s) and "+points+" points in JavaScript";
    console.log(message);

}

function printError(error){
    console.error(error.message);
}
function get(username) {
        var request = http.get("https://teamtreehouse.com/" + username + ".json", function (response) {
            //read data
            var body = "";
            response.on("data", function (chunk) {
                body += chunk;
            });
            response.on("end", function () {
                try {
                    var profile = JSON.parse(body);
                    printMessage(username, profile.badges.length, profile.points.JavaScript)
                } catch (error) {
                    printError(error);
                }
            });
            //parse data
            //print the data


        });
        request.on("error", printError);
    }

module.exports.get = get;