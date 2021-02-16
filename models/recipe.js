const { Schema, model } = require('mongoose');

const recipeSchema = new Schema ({
    name: String,
})

module.exports = model('RecipeName', recipeSchema);