const joi = require("joi")

const thesisValidation = {
    validateThesis: (body) => {
        const thesisSchema = joi.object({
            title: joi.string().min(5).required(),
            keywords: joi.array().items(joi.string().min(2)).min(1).max(5).required(),
            thesis_domains: joi.array().items(joi.string().min(2)).min(1).max(5).required(),
            current_job: joi.string().min(5).required(),
            job_domains: joi.array().items(joi.string().min(2)).min(1).max(5).required()
        })
        
        return thesisSchema.validate(body)
    },

    validateId: (id) => {
        const idSchema = joi.string().length(24).hex().required()

        const result = idSchema.validate(id)
        return result
    }
}

module.exports = { thesisValidation }

