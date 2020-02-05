
const db = require("../models");
const express = require("express");
const path = require("path");
const app = express();


module.exports = function(app){
    app.get("/", (req,res)=>{
        res.sendFile(path.join(__dirname + "../public/index.html"));
    })
    app.get("/exercise", (req,res)=>{
        res.sendFile(path.join(__dirname + "../public/exercise.html"));
    })
    app.get("/stats", (req,res)=>{
        res.sendFile(path.join(__dirname + "../public/stats.html"));
    })

    app.get("/api/workouts", (req, res)=>{
        db.Workout.find({}).then(dbWorkout => {
            console.log(dbWorkout[0].exercise);
            res.json(dbWorkout);
        }).catch(err =>{
            console.log(err);
        })
    });

    app.put("/api/workouts/:id", (req,res)=>{
        console.log(req.params.id);
        db.Exercise.create(req.body)
        .then(exercise => db.Workout.findOneAndUpdate({__id: req.params.id}, {$inc:{totalDuration: exercise.duration}, $push :{exercises: exercise._id}}, {new:true}))
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err=>{
            console.log(err);
        })
    })
    app.post("/api/workouts", (req,res)=>{
        console.log(req.body);
        db.Workout.create(req.body)
        .then(dbWorkout=>{
            res.json(dbWorkout);
        }).catch(err => {
            console.log(err);
        })
    })
    app.get("/api/workouts/range", (req,res)=>{
        // db.find({})
    })
    // //other routes..
}