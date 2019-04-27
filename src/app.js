const express = require('express')
const viewsRouter = require('./routers/views')


const app = express()

app.use(viewsRouter)




app.listen(3000)
