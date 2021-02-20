const { Schema, model } = require('mongoose');

const recipeSchema = new Schema ({
    name: String,
    instructions: String,
    image: String,
    notes: String
})

module.exports = model('RecipeName', recipeSchema);