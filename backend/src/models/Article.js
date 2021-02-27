
const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
    title: String,
    description: String,
    imageURL: String,
})

module.exports = model('Article', articleSchema);
