const {Schema, model} = require("mongoose")

const User = new Schema({
      firstName: {type: String, required: 'your name'},
      secondName: {type: String, required: 'true'},
      patronymic: {type: String, default: null},
      dataOfBirth: {type: Date, required: 'true'},
      gender: {type: String, required: 'true'},
      status: {type: String, default: null},

      company: {type: String, default: null},
      post: {type: String, default: null},

      city: {type: String, required: 'true'},
      email: {type: String, required: 'true'},
      phone: {type: String, required: 'true'},

      password: {type: String, required: 'true'},
      avatar: {type: String, default: null}
})

module.exports = model('User', User)