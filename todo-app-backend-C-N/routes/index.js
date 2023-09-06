const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);

//Calling for add task req
router.use("/addTask", require("./addTask"));
//calling for delete rask req
router.use("/deleteTask", require("./deleteTask"));
//calling for checkTask list
router.use("/checkTask", require("./checkTask"));

module.exports = router;
