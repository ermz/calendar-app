const express = require('express')
const router = new express.Router()

router.get("/", (req, res) => {
  res.render('index.ejs')
})

router.get("/calendar", (req, res) => {
  res.render('calendar.ejs')
})




module.exports = router
