const router = require('express').Router();

//TODO: add controller routes
router.get('/', (req, res) => {
    res.send('First action');
});

module.exports = router;