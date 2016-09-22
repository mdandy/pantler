var path = require("path");
var express = require("express");

var app = express();

app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"), function() {
  console.log("Pantler app is running on port", app.get("port"));
});

app.use('/', express.static(path.join(__dirname, 'public')));
