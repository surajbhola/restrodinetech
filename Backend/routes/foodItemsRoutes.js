const express = require("express");
const router = express.Router();
const foodItemController = require("./../controller/foodItemsController");
router
  .route("/")
  .get(foodItemController.getAllFoodItems)
  .post(foodItemController.createFoodItem);

router.route("/:id").delete(foodItemController.deleteFoodItem);

module.exports = router;
