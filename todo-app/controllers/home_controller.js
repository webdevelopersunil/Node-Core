const express = require("express");
const Todo = require('../models/Todo');

module.exports.index = function(req, res){
    return res.render('frontend/home');
}

module.exports.saveToDo = function(req, res){

    console.log(req.body);

    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date:req.body.date
    })
    .then(newTodo => {
        console.log('@@@@@@@', newTodo);
        return res.redirect('back');
    })
    .catch(err => {
        console.log('error in creating a todo:', err);
        return res.status(500).send('Internal Server Error'); // Handle the error as needed
    });

    return res.redirect('back');
}