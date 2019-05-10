const express = require('express');
const mongoose = require('mongoose');
const Step = require('../models/step-model');
const Guide = require('../models/guide-model');

const router = express.Router();

//create next Step
router.post('/steps', (req, res) => {

     Step.create({
          title: req.body.title,
          description: req.body.description,
          guide: req.body.guideID
     })
          .then(response => {
               Guide.findByIdAndUpdate(req.body.guideID, { $push: { steps: response._id } })
                    .then(theResponse => {
                         res.json(theResponse)
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