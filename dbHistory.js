const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
    action: {type: String, required: true},
    time: {type: String, required: true},
});

module.exports = mongoose.model('historycontants', historySchema);