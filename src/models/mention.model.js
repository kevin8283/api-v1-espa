const mongoose = require("mongoose")

const mentionSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    sigle: {
        type: String,
        required: true
    },
    objectifs: [{
        type: String
    }],
    domaines: [{
        type: String
    }],
    parcours: {
        licence: [{
            type: String
        }],
        master: [{
            type: String
        }]
    }
})

const mentionModel = mongoose.model("Mention", mentionSchema)

module.exports = mentionModel