const FoodItem = require("./../modals/foodItemsModal");
exports.createFoodItem = async (req, res) => {
  try {
    // const newFoodItem = new FoodItem({})
    // newFoodItem.save();
    const newFoodItem = await FoodItem.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        foodItem: newFoodItem,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};
exports.getAllFoodItems = async (req, res) => {
  try {
    const allFoodItems = await FoodItem.find();
    // console.log(allFoodItems);
    res.status(200).json(allFoodItems);
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err,
    });
  }
};
exports.deleteFoodItem = async (req, res) => {
  try {
    await FoodItem.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        message: "Food Item Deleted successfully",
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};
