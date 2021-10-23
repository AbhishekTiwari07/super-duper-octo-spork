const {Schema} = require('mongoose');

const todoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    due: {
        type: Date
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo