const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post("/user", (req, res) => {
    const user = new User(req.body)
    user.save().then((result) => {
      res.status(201).send(user)
    }).catch((error) => {
      res.status(400).send(error)
    })
})

//Get all users
router.get("/user", (req, res) => {
    User.find({}).then((users) => {
      if (!users) {
        return res.status(404).send()
      }

      res.status(201).send(users)
    }).catch((error) => {
      res.status(500).send()
    })
})

module.exports = router
