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
const Excersise = mongooe.model("Exersise", ExersiseSchema);

module.exports = Exercise;