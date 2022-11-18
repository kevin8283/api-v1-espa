const joi = require("joi")

const mentionValidation = {
    validateId: (id) => {
        const idSchema = joi.string().length(24).hex().required()

        const result = idSchema.validate(id)
        return result
    },

    validateSigle: (sigle) => {
        const sigleSchema = joi.string().min(2).required()

        const result = sigleSchema.validate(sigle)
        return result
    }
}

module.exports = { mentionValidation }