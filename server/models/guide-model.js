const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Step = require('./step-model')

const guideSchema = new Schema({
     title: String,
     description: String,
     //steps: [{ type: Schema.Types.ObjectId, ref: 'Step' }],
     material: Array,
     time: Number,
     tags: Array
},
     {
          timestamps: true
     });

const Guide = mongoose.model('Guide', guideSchema);
module.exports = Guide;