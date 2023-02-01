const mongoose = require("mongoose")

const authCodeSchema = mongoose.Schema({
    mention: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("AuthCode", authCodeSchema)