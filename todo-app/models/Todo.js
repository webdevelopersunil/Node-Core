const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type:String,
        required: true
    }
});

//  compiling our schema into a Model.
const Todo = mongoose.model('Todo',TodoSchema);

module.exports = Todo;