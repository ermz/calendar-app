const express = require('express')
const Appointment = require("../models/appointment")
const router = new express.Router()
const moment = require('moment')

// create a single appointment
router.post("/appointment", (req, res) => {
    console.log(req.body)
    const appointment = new Appointment(req.body)
    appointment.save().then((result) => {
      res.status(201).send(result)
    }).catch((error) => {
      res.status(400).send(error)
    })
})

// get all appointments
router.get("/appointments", (req, res) => {
  const dateNow = new Date()
  const tomorrow = new Date(dateNow.getTime() + (24 * 60 * 60 * 30000))
  console.log(dateNow.toString().slice(0,10))
  console.log(tomorrow.toString().slice(0, 10))

  Appointment.find({}).then((appointments) => {
    if (!appointments) {
      return res.status(404).send(appointments)
    }

    res.status(201).send(appointments)
  }).catch((error) => {
    res.status(500).send()
  })

})

// get all appointment in a date
router.get("/appointments/:month&:date", (req, res) => {
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
router.get("/appointment/:monthName&:date&:time", async (req, res) => {
  const monthName = req.params.monthName
  const date = req.params.date
  const time = req.params.time
  await Appointment.findOne({ monthName, date, time }).then((appointment) => {
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
// need to add try and if statements in case it fails
// works for now but need works to make it safer
//Minght be better to not use findOneAndUpdate
router.patch("/appointment/:month&:date&:time&:newTime", async (req, res) => {
  const keysObject = Object.keys(req.body)
  const month = req.params.month
  const date = req.params.date
  const time = req.params.time
  const newTime = req.params.newTime

  console.log(keysObject)

  try {
    const newAppointment = await Appointment.findOneAndUpdate({ month, date, time}, { time: newTime})
    if (!newAppointment) {
      return res.status(404).send()
    }

    res.status(201).send(newAppointment)

  } catch(error) {
    res.status(500).send()
  }


})

// Delete a single user based on month, date, time
// We need to use async and await in order for the deletion to be completed before res.send()
router.delete("/appointment/:monthName&:date&:time", async (req, res) => {
    const monthName = req.params.monthName
    const date = req.params.date
    const time = req.params.time

    try {
      const appointment = await Appointment.findOneAndDelete({ monthName, date, time})
      if (!appointment) {
        return res.status(404).send()
      }

      res.status(201).send(appointment)

    } catch(error) {
      res.status(500).send()
    }
})

module.exports = router
