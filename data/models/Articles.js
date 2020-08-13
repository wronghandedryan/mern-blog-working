const mongoose = require("mongoose");
const { Schema } = mongoose;
const articlesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
        title: { type: String,
        unique: true,
        required: true,
        },
        body: {
        type: String,
        required: true,
        wordCount: {
        minLength: Number,
        maxLength: Number,
          }},
      created: { 
        type: Date,
        default: Date.now
    }
    });
 
var Article = mongoose.model('Article', articleSchema);
 
module.exports = Article;