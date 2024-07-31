const express = require("express");
const router = express.Router();


const {createTodo} = require("../controllers/CreateTodo");
const {getTodo , getTodoById} = require("../controllers/GetTodo");
const {updateTodo} = require("../controllers/UpdateTodo");
const {deleteTodo} = require("../controllers/DeleteTodo");
const dbConnect = require("../config/database");
// define api routes
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
module.exports = router;