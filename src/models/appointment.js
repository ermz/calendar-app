const mongoose = require('mongoose')
const validator = require('validator')

const Appointment = mongoose.model("Appointment", {
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    info: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      required: true
    },
    date: {
      type: Number,
      required: true
    }
})

module.exports = Appointment
