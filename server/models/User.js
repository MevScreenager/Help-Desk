const {Schema, model} = require("mongoose")

const User = new Schema({
      userName: {type: String, required: true, unique: true},
      
      firstName: {type: String, required: true},
      secondName: {type: String, required: true},
      patronymic: {type: String, default: null},
      dataOfBirth: {type: Date, required: true},
      gender: {type: String, required: true},
      status: {type: String, default: null},

      company: {type: String, default: null},
      post: {type: String, default: null},

      city: {type: String, required: true},
      email: {type: String, required: true, unique: true},
      phone: {type: String, required: true, unique: true},

      password: {type: String, required: true},
      avatar: {type: String, default: null}
})

module.exports = model('User', User)