var request = require("request");
var fs = require("fs");

request
  .get("https://sytantris.github.io/http-examples/future.jpg")
  .on("error", function(err) {
    console.log("get wrecked:", err);
  })
  .on("response", function(response) {
    console.log("ResponseStatusCode:", response.statusCode);
    console.log("ResponseStatusMessage:", response.statusMessage);
    console.log("ResponseContentType:", response.headers);
  })
  .pipe(fs.createWriteStream("./future.jpg"));
