const express = require("express");

const router = express.Router();

//Getting the Add task controller
const addTaskController = require("../controllers/addTask_controller");

router.post("/", addTaskController.add);

module.exports = router;
