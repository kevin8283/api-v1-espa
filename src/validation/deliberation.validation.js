const joi = require("joi")

const deliberationValidation = {
    validateDeliberation: (body) => {
        const deliberationSchema = joi.object({
            data: joi.object({
                gr_etu: joi.number().min(0).required(),
                gr_ens: joi.number().min(0).required(),
                gr_pat: joi.number().min(0).required(),
                cr_pol: joi.number().min(0).max(1).required(),
                cr_san: joi.number().min(0).max(1).required(),
                cr_mto: joi.number().min(0).max(1).required(),
                heure_etude_hebd: joi.number().min(10).max(40).required()
            }).required()
        })

        return deliberationSchema.validate(body)
    }
}

module.exports = { deliberationValidation }