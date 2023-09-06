const TaskList = require("../models/task_list");

module.exports.delete = function (req, res) {
  TaskList.deleteMany({ checked: true }, (err) => {
    if (err) {
      console.error("Error deleting task list");
    }

    return res.redirect("back");
  });
};
