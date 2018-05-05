// Written by John R. Thurlby May 2018

// Dependencies
// =============================================================
const express = require("express"),
      bodyParser = require("body-parser"), 
      path = require("path")

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTER
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});