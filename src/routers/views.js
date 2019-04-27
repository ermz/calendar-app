const express = require('express')
const router = new express.Router()

router.get("/", (req, res) => {
  console.log('hello terminal')
  res.render('hello')
})




module.exports = router
