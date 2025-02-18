const {Schema, model} = require("mongoose")

const Person = new Schema({
      email: {type: String, required: true, unique: true},
      role: {type: String, required: true}
})

module.exports = model('Person', Person)