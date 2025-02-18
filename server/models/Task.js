const {Schema, model} = require("mongoose")

const Task = new Schema({
      name: {type: String, required: true},
      comment: {type: String, default: null},
      performerEmail: {type: String, default: null},
      status: {type: String, default: 'не назначен'},
      dateFrom: {type: Date, required: true},
      dateTo: {type: Date, default: null},
      dateStart: {type: Date, default: null},
      authorEmail: {type: String, required: true}
})

module.exports = model('Task', Task)