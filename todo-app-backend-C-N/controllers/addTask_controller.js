const express = require("express");
const TodoList = require("../models/task_list");

module.exports.add = (req, res) => {
  //Creating an Task
  TodoList.create(
    {
      data: req.body.data,
      category: req.body.category,
      date: req.body.date,
      checked: false,
    },
    (err, newTask) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
  return res.redirect("back");
};