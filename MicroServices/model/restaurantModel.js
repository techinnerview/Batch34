var mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema([{
    name: String,
    description: String,
    address: String
}])

const restaurants = mongoose.model("restaurants", restaurantSchema);

module.exports = restaurants;