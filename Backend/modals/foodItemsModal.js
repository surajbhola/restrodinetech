const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "A Food Item must have a category"],
  },
  itemname: {
    type: String,
    required: [true, "A Food Item must have a name"],
  },
  eta: {
    type: Number,
  },
});

const FoodItem = mongoose.model("FoodItem", foodItemSchema);

module.exports = FoodItem;