const mongoose = require('mongoose');
const {Schema} = mongoose;

const todoSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    due: {
        type: Boolean
    },
    dueDate: {
        type: Date
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo