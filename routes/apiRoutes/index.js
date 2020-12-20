const router = require('express').Router();
const workoutController = require('./../../controllers/workoutController')

router.route('/workouts')
.get(workoutController.get)

router.route('/exercise')
.post(workoutController.create)

router.get('/workouts/range', workoutController.getRange)

// router.put('/exercise/:id', workoutController.update)

module.exports = router