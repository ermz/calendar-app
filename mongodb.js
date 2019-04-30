// Need to perform CRUD operations

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbName = 'calendar-app'


MongoClient.connect(connectionUrl, { useNewUrlParser: true}, (error, client) => {
    if (error) {
      return console.log('unable to connect to database')
    }

    const db = client.db(dbName)

    // db.collection('appointments').findOne({ name: "12pm"}, (error, appointment) => {
    //     if (error) {
    //       return console.log("Couldn't find the appointment by name")
    //     }
    //
    //     console.log(appointment)
    // })

    // db.collection("appointments").find({ weekDay: "tuesday" }).toArray((error, results) => {
    //   console.log(results)
    // })
    //
    // db.collection("appointments").find({ weekDay: "tuesday" }).count((error, count) => {
    //   console.log(count)
    // })

    // db.collection("appointments").findOne({ _id: new ObjectID("5cc65074ea3b4d0c1eb03381")}, (error, appointment) => {
    //   if (error) {
    //     return console.log("Couldn't find appointment")
    //   }
    //
    //   console.log(appointment)
    // })
    //
    // db.collection("appointments").find({ weekDay: "tuesday" }).toArray((error, result) => {
    //   if (error) {
    //     return console.log("Couldn't find any data")
    //   }
    //
    //   console.log(result)
    // })

    // const fridayAppointment = db.collection("appointments").updateMany({
    //   weekDay: "tuesday"
    // }, {
    //   $set: {
    //     weekDay: "friday"
    //   }
    // }).then((result) => {
    //   console.log(result)
    // }).catch((error) => {
    //   console.log(error)
    // })

    db.collection("appointments").deleteMany({
      weekDay: "friday"
    }).then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })



})
