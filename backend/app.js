const express = require('express')
const app = express()
const port = 3000
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose')
const userRoute = require('./Route/userRouter');
const mechanicRoute = require('./Route/mechanicRoute')
const complainRoute = require('./Route/complainRoute')
app.use(express.json());
app.use('/user',userRoute)
app.use('/mechanic',mechanicRoute)
app.use('/complain',complainRoute)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose
  .connect(
    "mongodb+srv://nitin:1234@cluster0.kjb67vf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log('Starting the application')
    app.listen(5000, () => {
      console.log('Started the application on port', 5000);
    })
  })
  .then(() =>
    console.log("Connected To Database and Listening To Localhost 5000")
  )
  .catch((err) => console.log(err));