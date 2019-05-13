const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Guide = require('./guide-model')

const userSchema = new Schema({
     email: String,
     username: String,
     password: String,
     guides: [{ type: Schema.Types.ObjectId, ref: 'Guide' }],
     //likes -> saved guides
})

const User = mongoose.model('User', userSchema);
module.exports = User;