const {Schema, model, ObjectId} = require("mongoose")
const File = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    accessLink: {type:String},
    size: {type: Number, default: 0},
    user: {type: ObjectId, ref: "User"},
})
module.exports = model('File', File)