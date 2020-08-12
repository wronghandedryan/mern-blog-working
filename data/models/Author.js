const mongoose = require('mongoose');
const authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: { 
          type:String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
    }
}});


module.exports = authorSchema;