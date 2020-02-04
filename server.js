// requiring our dependencies
const express = require("express");
const mongoose = require("mongoose");

// set up port
const PORT = process.env.PORT || 8080;

//set server to use express
const app = express();

// middleware to handle JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sets ups so our page can use everything in the public directory
app.use(express.static("public"));

//connnect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//routes 
app.use(require("./routes/api.js"));


// set server to be listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
