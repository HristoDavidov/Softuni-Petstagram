const router = require('express').Router();

//TODO: add controller routes
const homeController = require('./controllers/homeController');


router.use(homeController);

module.exports = router;