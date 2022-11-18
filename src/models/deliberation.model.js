const mongoose = require("mongoose")

const deliberationSchema = mongoose.Schema({
    annee: String,
    gr_etu: Number,
    gr_ens: Number,
    gr_pat: Number,
    cr_pol: Number,
    cr_san: Number,
    cr_mto: Number,
    heure_etude_hebd: Number,
    moyenne: Number
})

const deliberationModel = mongoose.model("Deliberation", deliberationSchema)

module.exports = deliberationModel