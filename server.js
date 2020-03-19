//Dependencies
//server
const express = require("express");
//mongoose
const mongoose = require("mongoose");
//for reading and sending files
const path = require("path");

//tells us what local host we are using
const PORT = process.env.PORT || 8080;

//instantiating express server
const app = express();


//allows us to work with JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// allows express to use everything in public directory to style html
app.use(express.static("public"));

//setting mongo to connect to local host and connect to Mlab when launched to Heroku
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

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
