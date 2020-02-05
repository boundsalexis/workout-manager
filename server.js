// requiring our dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./models");

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
// app.use(require("./routes/api.js"));



app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname + "/public/index.html"));
})
app.get("/exercise", (req,res)=>{
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
})
app.get("/stats", (req,res)=>{
  res.sendFile(path.join(__dirname + "/public/stats.html"));
})

app.get("/api/workouts", (req, res)=>{
  db.Workout.find({}).then(dbWorkout => {
      console.log("dbWorkout", dbWorkout);
      res.json(dbWorkout);
  }).catch(err =>{
      console.log(err);
  })
});

app.put("/api/workouts/:id", (req,res)=>{
  console.log("workouts id",req.params.id);
  db.Exercise.create(req.body)
  .then(exercise => db.Workout.findOneAndUpdate({__id: req.params.id}, {$inc:{totalDuration: exercise.duration}, $push :{exercises: exercise._id}}, {new:true}))
  .then(dbWorkout => {
      res.json(dbWorkout);
  }).catch(err=>{
      console.log(err);
  })
});
app.post("/api/workouts", (req,res)=>{

  console.log("workouts general", req.body);
  db.Workout.create(req.body)
  .then(dbWorkout=>{
      res.json(dbWorkout);
  }).catch(err => {
      console.log(err);
  })
});
app.get("/api/workouts/range", (req,res)=>{
  db.Workout.find({}).then(response =>
    res.json(response)).catch(err => console.log(err))
})



// set server to be listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
