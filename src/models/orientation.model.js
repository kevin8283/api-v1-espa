const mongoose = require("mongoose")

const orientationSchema = mongoose.Schema({
    mech: Number,
    chem: Number,
    math: Number,
    elec: Number,
    sc_terre: Number,
    trigo: Number,
    alg_bool: Number,
    opt: Number,
    dess_tech: Number,
    env: Number,
    parcours: String,
    score: Number
})

const orientationModel = mongoose.model("Orientation", orientationSchema)

module.exports = orientationModel