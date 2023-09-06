const TodoList = require("../models/task_list");

module.exports.checkPost = function (req, res) {
  let id = req.params.id;

  TodoList.findById(id, (err, task) => {
    TodoList.findByIdAndUpdate(
      id,
      { checked: !task.checked },
      (err2, task2) => {
        return res.redirect("back");
      }
    );
  });
};