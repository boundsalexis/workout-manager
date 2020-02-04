//dependencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    //insert model properties
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports =  Workout;