const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email!')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    required: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error("Can't have password in password!")
      }
    }
  }
})


module.exports = User
