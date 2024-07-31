const { now } = require("mongoose");
const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    // Extract title and description from body
    const {id} = req.params;

    const todo = await Todo.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      data: todo,
      message: `Deleted ${id} successfully`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};