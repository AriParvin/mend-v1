const express = require('express');
const mongoose = require('mongoose');
const Step = require('../models/step-model');
const Guide = require('../models/guide-model');

const router = express.Router();

//create next Step
router.post('/guides/:id/steps', (req, res) => {
     console.log(req.params.id)
     Step.create({
          title: req.body.title,
          description: req.body.description,
          guide: req.params.id
     })
          .then(response => {
               let step = response
               Guide.findByIdAndUpdate(req.params.id, { $push: { steps: response._id } })
                    .then(theResponse => {
                         res.json(step)

                    })
                    .catch(err => {
                         res.json(err)
                    })


          })
          .catch(err => {
               res.json(err)
          })
})

//update step
router.put('/steps/:id', (req, res) => {
     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
          res.status(400).json({ message: "step iD not valid" })
          return
     }
     Step.findByIdAndUpdate(req.params.id, req.body)
          .then(() => {
               res.json({ message: `Step ${req.params.id} updated!` })
          })
          .catch(err => {
               res.json(err)
          })
})
//delete step
router.delete('/step/:id', (req, res) => {
     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
          res.status(400).json({ message: 'Specified id is not valid' });
          return;
     }
     Step.findByIdAndRemove(req.params.id)
          .then(() => {
               res.json({ message: `Step ${req.params.id} removed successfully!` })
          })
          .catch(err => {
               res.json(err);
          })
})

module.exports = router