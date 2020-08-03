const mongoose = require('mongoose');

let BBSchema = new mongoose.Schema({
    name: String, 
    nickname: String,
    img: String
})

let BBModel = mongoose.model('bb-character', BBSchema);

module.exports =  BBModel;