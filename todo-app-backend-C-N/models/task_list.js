const mongoose = require("mongoose");

const taskListSchema = new mongoose.Schema({
  data: {
    type: "string",
    required: true,
  },
  category: {
    type: "string",
    required: true,
  },
  checked: {
    type: "boolean",
  },
  date: {
    type: "date",
    required: true,
  },
});

const TaskList = mongoose.model("taskList", taskListSchema);

module.exports = TaskList;