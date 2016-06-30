var fs = require("fs");
function mergeValue(values, content){
    for(var key in values){
        content = content.replace("{{"+key+"}}", values[key]);
    }
    return content;
}
function view(templateName, values, response){
    //read from the template files

    var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding:"utf8"});
    fileContents = mergeValue( values, fileContents);

    //insert in to the content

    //write out to the response
    response.write(fileContents);

}
module.exports.view = view;