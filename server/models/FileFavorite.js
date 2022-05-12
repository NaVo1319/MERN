const {Schema, model, ObjectId} = require("mongoose")
const FileFavorite = new Schema({
    user: {type: ObjectId, ref: "User"},
    file: {type: ObjectId, ref: "File"},
})
module.exports = model('FileFavorite', FileFavorite)