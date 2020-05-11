var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var r = new XMLHttpRequest();
r.open("GET", "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72");
r.send();
var result = r.responseText;
var obj = JSON.parse(result);