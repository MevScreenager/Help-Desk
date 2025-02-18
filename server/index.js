const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routers")
const taskRouter = require("./routes/task.routers")

const app = express()
const PORT = config.get('serverPort')

app.use(cors())
app.use(express.json())
app.use('/api', authRouter, taskRouter)

const start = async () => {
      try {
            await mongoose.connect(config.get("dbURL"))
            app.listen(PORT, () => {
                  console.log('server port: ', PORT)
            })
      } catch (e) {

      }
}


start()
