var express = require('express');
var router = express.Router();
var { getRestaurants, addRestaurant } = require('../controller/restaurantController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    getRestaurants(req, res, next);
});

router.get('/getRestaurants', function (req, res, next) {
    getRestaurants(req, res, next);
});

router.post('/addRestaurant', function (req, res, next) {
    addRestaurant(req, res, next);
});
module.exports = router;
