const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    // Extract title and description from body
    const { title, description } = req.body;
    // Create a new todo and insert to DB
    const response = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
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

