const {Schema, model} = require("mongoose")

const TasksMarker = new Schema({
      save: {type: Boolean, default: false},
      fire: {type: Boolean, default: false},
      performer: {type: String, required: true}
})

module.exports = model('TasksMarker', TasksMarker)