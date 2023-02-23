require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes')
const cors = require('cors')

const app = express()

app.get('/', (req, res) => {
  res.send('Backend is Working')
})

app.use(
  cors({
    origin: '*',
  }),
)
app.use(express.json())
app.use('/', router)

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGOURI, () => {
  console.log('DB conneted')
})

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`server started at port ${port}`)
})
