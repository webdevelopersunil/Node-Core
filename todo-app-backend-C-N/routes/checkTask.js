const express = require("express");

const router = express.Router();

const checkTaskController = require("../controllers/checkTask_controller");

router.post("/:id", checkTaskController.checkPost);

module.exports = router;
