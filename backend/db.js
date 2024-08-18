
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://rehanmd0107:re03302005@cluster0.l7e4s.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}