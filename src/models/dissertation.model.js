const mongoose = require("mongoose")

const dissertationSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    keywords: {
        type: Array,
        default: []
    },
    thesis_domains: {
        type: Array,
        default: []
    }
})

const dissertationModel = mongoose.model("Dissertation", dissertationSchema)

module.exports = dissertationModel