const path = require('path')
const express = require('express')
// const hbs = require('hbs')
require('./db/mongoose.js')
const Appointment = require('./models/appointment')
const User = require('./models/user')
const viewsRouter = require('./routers/views')
const appointmentRouter = require('./routers/appointment')
const userRouter = require('./routers/user')



const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'ejs')
app.set('views', [viewsPath, partialsPath])
app.use(express.static(publicDirectoryPath))

// Parses json to an object. To make use of information being sent
app.use(express.json())

app.use(viewsRouter)
app.use(appointmentRouter)
app.use(userRouter)

//
// app.post("/appointment", (req, res) => {
//     const appointment = new Appointment(req.body)
//     appointment.save().then((result) => {
//       res.send(result)
//     }).catch((error) => {
//
//       res.status(400).send(error)
//     })
// })


app.listen(port, () => {
  console.log("Project is up and running on port " + port)
})
