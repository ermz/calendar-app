const express = require('express')
const router = new express.Router()

router.get("/", (req, res) => {
  res.render('index.ejs')
})

router.get("/calendar", (req, res) => {
  res.render('calendar.ejs')
})

router.get("/confirm", (req, res) => {
  res.render('confirm.ejs')
})

router.get("/scheduled", (req, res) => {
  res.render('scheduled.ejs')
})




module.exports = router
