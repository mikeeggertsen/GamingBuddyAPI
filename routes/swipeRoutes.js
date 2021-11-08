const router = require('express').Router()
const swipeController = require('../controllers/controllerSelector').controller('swipe')
const auth = require('../middleware/auth')

router.get('/matches', auth.protected, swipeController.findMatches)

router.post('/swipe', auth.protected, swipeController.swipeOnUser)

module.exports = router