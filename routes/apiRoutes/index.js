const router = require('express').Router();
const workoutController = require('./../../controllers/workoutController')

router.route('/workouts')
.get(workoutController.get)
.post(workoutController.create)

router.put('/workouts/:id', workoutController.update)

module.exports = router