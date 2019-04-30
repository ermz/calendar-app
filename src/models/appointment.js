const mongoose = require('mongoose')
const validator = require('validator')

const Appointment = mongoose.model("Appointment", {
    Message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    Info: {
      type: String,
      required: true
    },
    Time: {
      type: Number,
      required: true
    },
    Month: {
      type: Number,
      required: true
    },
    Date: {
      type: Number,
      required: true
    }
})

module.exports = Appointment
