const express = require("express")
const Task = require("../models/Task")

const router = express.Router()

router.post('/tasks', async (req, res) => {
      try {
            const {
                  name,
                  comment,
                  performer,
                  status,
                  dateFrom,
                  dateTo,
                  dateStart,
                  author
            } = req.body

            const task = new Task({
                  name,
                  comment,
                  performer,
                  status,
                  dateFrom: new Date(dateFrom),
                  dateTo: dateTo ? new Date(dateTo) : null,
                  dateStart: dateStart ? new Date(dateStart) : null,
                  author
            })
            await task.save()
            return res.json({message: 'Task append'})
      } catch (e) {
            console.log(e)
            res.send({message: `Server error, tasks.router post: ${e}`})
      }
})

router.get('/tasks', async (req, res) => {
      try {
            const {performer} = req.body
            const tasks = await Task.find({performer})

            if (!tasks)
                  return res.json({message: null})

            
            return res.json(tasks)
      } catch (e) {
            console.log(e)
            res.send({message: `Server error, tasks.router get: ${e}`})
      }
})

module.exports = router