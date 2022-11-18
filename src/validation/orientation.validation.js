const joi = require("joi")

const orientationValidation = {
    validateOrientation: (body) => {
        const orientationSchema = joi.object({
            data: joi.object({
                mech: joi.number().min(9).max(20).required(),
                chem: joi.number().min(9).max(20).required(),
                math: joi.number().min(9).max(20).required(),
                sc_terre: joi.number().min(9).max(20).required(),
                alg_bool: joi.number().min(9).max(20).required(),
                dess_tech: joi.number().min(9).max(20).required(),
                elec: joi.number().min(9).max(20).required(),
                trigo: joi.number().min(9).max(20).required(),
                opt: joi.number().min(9).max(20).required(),
                env: joi.number().min(9).max(20).required(),
            }).required()
        })

        return orientationSchema.validate(body)
    }
}

module.exports = { orientationValidation }