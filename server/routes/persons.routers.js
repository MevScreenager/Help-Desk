const express = require("express")
const Person = require("../models/Person")

const router = express.Router()

router.get('/person', async (req, res) => {
      try {
            const {userName} = req.body
            const candidate = await Person.findOne({userName})
            if (candidate)
                  return res.status(400).json({message: `User ${userName} don't found` })
            return res.json(candidate)
      } catch (e) {
            console.log(e)
            res.json({message: `Server error, porson get: ${e}`})
      }
})

router.get('/persons', async (req, res) => {
      try {

      } catch (e) {
            console.log(e)
            res.json({message: `Server error, porsons get: ${e}`})
      }
})