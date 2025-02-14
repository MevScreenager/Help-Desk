const {Schema, model} = require("mongoose")

const Persons = new Schema({
      userName: {type: String, required: true, unique: true},
      role: {type: String, required: true}
})

module.exports = model('Persons', Persons)