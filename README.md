# Workout Manager

Allows you to keep track of different types of excersises and add them to different workouts. Uses Charts.js to display the statistics to the stats page. 

## Images of Gameplay
![Gif of game play](/functionality.gif)

## Deployment

Deployed on heroku
* [Deploy react app to Github pages](https://github.com/gitname/react-gh-pages)
* [Live Site](https://boundsalexis.github.io/clicky-game/)
* [Repository](https://github.com/boundsalexis/workout-manager)

## Built With

* [Node Js](https://nodejs.org/en/)
* [Bootstrap](https://getbootstrap.com/) - Styling

## Code Except
```Javascript
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
```
This is the model for the workout database. A workout can hold many exercises.


## Authors

* **Alexis Bounds** 
* [Portfolio](https://alexisboundsportfolio.herokuapp.com/)
* [Github Repository](https://github.com/boundsalexis)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details