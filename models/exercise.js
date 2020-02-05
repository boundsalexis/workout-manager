//Dependencies
const mongoose = require("mongoose");


//Many ways to get the export constructed
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    repetitions: Number,
    sets: Number
});

// can do it all in one step but its uglier
// this is the meat and potatoes
const Exercise = mongoose.model("Exercise", ExerciseSchema);


//export it to 
module.exports = Exercise;