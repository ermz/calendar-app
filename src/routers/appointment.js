const express = require('express')
const Appointment = require("../models/appointment")
const router = new express.Router()

// create a single appointment
router.post("/appointment", (req, res) => {
    const appointment = new Appointment(req.body)
    appointment.save().then((result) => {
      res.status(201).send(result)
    }).catch((error) => {
      res.status(400).send(error)
    })
})

// get all appointments
router.get("/appointments", (req, res) => {
  Appointment.find({}).then((appointments) => {
    if (!appointments) {
      return res.status(404).send(appointments)
    }

    res.status(200).send(appointments)
  }).catch((error) => {
    res.status(500).send()
  })
})

// get all appointment in a specific month
router.get("/appointments/:month", (req, res) => {
  const month = req.params.month
  Appointment.find({ month }).then((appointments) => {
    if (appointments.length === 0) {
      return res.status(404).send()
    }

    res.status(200).send(appointments)
  }).catch((error) => {
    res.status(500).send()
  })
})

// get one specific appointment by month, date and time
router.get("/appointment/:month&:date&:time", (req, res) => {
  const month = req.params.month
  const date = req.params.date
  const time = req.params.time
  Appointment.findOne({ month, date, time }).then((appointment) => {
    if (!appointment) {
      return res.status(404).send()
    }

    res.status(200).send(appointment)
  }).catch((error) => {
    res.status(500).send()
  })
})

// Update a single user
// look at udemy 97 and 98

// router.patch("appointment/:month&:date&:time&:newTime", (req, res) => {
//   const month = req.params.month
//   const date = req.params.date
//   const time = req.params.time
//   const newTime = req.params.newTime
//
//   Appointment.findOneAndUpdate({ month, date, time}, { $set: { time: newTime }}).then((appointment) => {
//     if (!appointment) {
//       return res.status(404).send()
//     }
//
//     res.status(201).send(appointment)
//   }).catch((error) => {
//     res.status(500).send()
//   })
// })

module.exports = router
