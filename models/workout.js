//Dependencies
const mongoose = require("mongoose");

//Begins the construction of the mongoose model
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        default: 0
    },
    exercises: [
        {
        type: Schema.Types.ObjectId,
        ref: "Exercise"
    }
    ]
});
// completes construction of mongoose model
const Workout = mongoose.model("Workout", WorkoutSchema);
// exports that model
module.exports =  Workout;