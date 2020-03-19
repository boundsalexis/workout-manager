# Workout Manager

Allows you to keep track of different types of excersises and add them to different workouts. Uses Charts.js to display the statistics to the stats page. 

## Images


## Deployment
* [Live Site](https://yourworkouttracker.herokuapp.com/)
* [Repository](https://github.com/boundsalexis/workout-manager)

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)
* [MongoDB](https://www.mongodb.com/)



## Code Excerpt
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


## Authors

* **Alexis Bounds** 
* [Portfolio](https://alexisboundsportfolio.herokuapp.com/)
* [Github Repository](https://github.com/boundsalexis)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details