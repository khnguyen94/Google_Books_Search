// Import dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Database configurations
// Save the URL of our database as well as the name of our collection
var databaseUrl = "googlebooks";
var collections = ["books"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// If mongodb runs into any errors, log them
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
