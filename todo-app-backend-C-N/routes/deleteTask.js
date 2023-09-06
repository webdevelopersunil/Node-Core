const express = require("express");

const router = express.Router();

const deleteTaskController = require("../controllers/deleteTask");

router.get("/", deleteTaskController.delete);

module.exports = router;
