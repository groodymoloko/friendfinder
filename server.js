//npm module dependencies
const express = require("express");
const path = require("path");

//set up express server
const app = express();
const PORT = process.env.PORT || 8081;

//set up express server to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));

//specify route files telling express server where to send data requests
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//start express server listening on specific PORT
app.listen(PORT, function() {
  console.log("FriendFinder is listening on PORT: " + PORT);
});