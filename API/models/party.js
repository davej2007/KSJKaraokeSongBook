const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const partySchema = new Schema({
    surname : String,
    date : String,
    title : String,
    type : String,
    christmas : Boolean
});

module.exports = mongoose.model('party',partySchema);