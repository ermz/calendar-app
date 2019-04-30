const path = require('path')
const express = require('express')
const viewsRouter = require('./routers/views')



const app = express()
const port = process.env.PORT || 3000

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Parses json to an object. To make use of information being sent
app.use(express.json())

app.use(viewsRouter)




app.listen(port, () => {
  console.log("Project is up and running on port " + port)
})
