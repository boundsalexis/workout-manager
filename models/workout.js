//Dependencies
const mongoose = require("mongoose");

//Begins the construction of the mongoose model
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
        type: {
            type:String,
        trim:true},
        name: {
            type:String,
            trim:true
        },
        duratioon: Number,
        weight: {
            type:Number,
            default:0
        },
        reps: {
            type:Number,
            default:0
        },
        sets:{
            type:Number,
            default:0
        }

      
    }
    ],
    totalDuration: {
        type: Number,
        default: 0
    },
});
// completes construction of mongoose model
const Workout = mongoose.model("Workout", WorkoutSchema);
// exports that model
module.exports =  Workout;