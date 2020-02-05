//dependencies
const mongoose = require("mongoose");
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
        {tpe: Schema.Types.ObjectId,
        ref: "Exercise"
    }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports =  Workout;