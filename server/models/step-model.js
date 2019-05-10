const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Guide = require('./guide-model')

const stepSchema = new Schema({
     description: String,
     image: String,
     guide: { type: Schema.Types.ObjectId, ref: 'Guide' }
})

const Step = mongoose.model('Step', stepSchema);
module.exports = Step;