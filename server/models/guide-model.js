const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Step = require('./step-model')

const guideSchema = new Schema({
     title: String,
     image: String,
     description: String,
     steps: [{ type: Schema.Types.ObjectId, ref: 'Step' }],
     likes: Number,
     material: String,
     time: Number,
     tags: String
},
     {
          timestamps: true
     });

const Guide = mongoose.model('Guide', guideSchema);
module.exports = Guide;