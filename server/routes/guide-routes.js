const express = require('express')
const mongoose = require('mongoose')
const Guide = require('../models/guide-model')

const router = express.Router()

//get all guides
router.get('/guides', (req, res) => {
     Guide.find()
          .populate('steps')
          .then(allGuides => {
               res.json(allGuides)
          })
          .catch(err => {
               res.json(err)
          })
})

//get specific guide
router.get('/guides/:id', (req, res) => {
     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
          res.status(400).json({ message: 'Specified id is not valid' })
          return
     }
     //get steps of specific guide
     Guide.findById(req.params.id)
          .populate('steps')
          .then(response => { res.status(200).json(response) })
          .catch(err => { res.json(err) })
})

//update guide
router.put('/guides/:id', (req, res) => {
     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
          res.status(400).json({ message: 'Specified id is not valid' });
          return;
     }
     Guide.findByIdAndUpdate(req.params.id, req.body, { new: true })
          .then((updatedGuide) => {
               res.json({
                    guide: updatedGuide
               })
          })
          .catch(err => {
               res.json(err);
          })
})

//create new guide
router.post('/guides', (req, res) => {
     Guide.create({
          title: req.body.title,
          image: req.body.image,
          description: req.body.description,
          material: req.body.material,
          time: req.body.time,
          tags: req.body.tags
          // steps: []
     })
          .then(response => {
               console.log(response)
               res.json(response)
          })
          .catch(err => {
               res.json(err)
          })
})

//delete guide
router.delete('/guides/:id', (req, res) => {
     // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
     //      res.status(400).json({ message: 'No guide by this iD..' })
     //      return
     // }
     Guide.findByIdAndRemove(req.params.id)
          .then((response) => {
               res.json({
                    response,
                    message: `Guide ${req.params.id} deleted!`
               })
          })
})

module.exports = router