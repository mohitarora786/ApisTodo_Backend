const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    // Fetch all items from the datbase
    const todos = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire dtaa has been fetched sucessfully",
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

exports.getTodoById = async (req, res) => {
    try {
    const id = req.params.id;
    const todo = await Todo.findById({_id: id})

    if(!todo){
        return res.status(404).json({
            success:false,
            message:"No Data With This Id Found",
        })
    }
    res.status(200).json({
        success: true,
        data: todo,
        message: `Data With The ${id} Fetched Sucessfully`,
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
