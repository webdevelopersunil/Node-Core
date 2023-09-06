const TodoList = require("../models/task_list");

module.exports.home = function (req, res) {
  TodoList.find({}, (err, tasks) => {
    if (err) {
      console.log("Error in finding tasks");
      return;
    }

    return res.render("home", { title: "Todo App", task_list: tasks });
  });
};
