const { now } = require("mongoose");
const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    // Extract title and description from body
    const {id} = req.params;
    const { title, description } = req.body;
    // Create a new todo and insert to DB
    const todo = await Todo.findByIdAndUpdate({ _id: id },{title,description,updatedAt: Date.now()});
    res.status(200).json({
      success: true,
      data: todo,
      message: "Updated successfully",
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