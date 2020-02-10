//Dependencies
//server
const express = require("express");
//mongoose
const mongoose = require("mongoose");
//for reading and sending files
const path = require("path");

//tells us what local host we ar using
const PORT = process.env.PORT || 8080;
//instantiating express server
const app = express();


//allo us to work with JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// allows express to use everything in public directory to style html
app.use(express.static("public"));

//setting mongo to connect to local host
mongoose.connect(process.env.MONGODB_URI || "mongodb://boundsalexis:Uclaab2020!@ds061681.mlab.com:61681/heroku_f9gf8bkf", { useNewUrlParser: true });

//connet to our api routes file
require("./routes/api.js")(app);


//include our html routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});


//set server to be listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
