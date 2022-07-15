getRestaurants = (req, res, next) => {
    res.send('This is a list of Restaurants');
}

addRestaurant = (req, res, next) => {
    res.send('Adding a new Restaurant');
}

updateRestaurant = (req, res, next) => {
    res.send('This is a list of Restaurants');
}

deleteRestaurant = (req, res, next) => {
    res.send('This is a list of Restaurants');
}

module.exports = { getRestaurants, addRestaurant }