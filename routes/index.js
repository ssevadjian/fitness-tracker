const router = require('express').Router();
//require the apiRoutes index file:
const apiRoutes = require('./apiRoutes');

//append 'api' to '/workouts':
router.use('/api', apiRoutes)

module.exports = router