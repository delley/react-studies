const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
  description: { type: string, required: true },
  done: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, dafault: Date.now }
})

module.exports = restful.model('Todo', todoSchema)
