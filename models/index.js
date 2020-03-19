//depencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//creating workout schema
// grabs hold of all relevant data from excersise js
const WorkoutSchema = new Schema({
    //use exercise.js to figure out which variables we need and what type they are
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: Number,
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }

});
// sets schema ready to be exported
const Workout = mongoose.model("Workout", WorkoutSchema);
//exports it
module.exports = Workout;