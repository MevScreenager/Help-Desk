const {Schema, model} = require("mongoose")

const Tasks = new Schema({
      name: {type: String, required: true},
      comment: {type: String, default: null},
      performer: {type: String, default: null},
      status: {type: String, required: true},
      dataFrom: {type: Data, required: true},
      dataTo: {type: Data, default: null},
      dataStart: {type: Data, default: null},
      timeFrom: {type: Data, required: true},
      timeTo: {type: String, default: null},
      timeStart: {type: Data, default: null},
      author: {type: String, required: true}
})

module.exports = model('Tasks', Tasks)