const mongoose = require("mongoose")

const thesisSchema = mongoose.Schema({
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
    },
    current_job: {
        type: String,
        required: true
    },
    job_domains: {
        type: Array,
        default: []
    }
})

const thesisModel = mongoose.model("Thesis", thesisSchema)

module.exports = thesisModel