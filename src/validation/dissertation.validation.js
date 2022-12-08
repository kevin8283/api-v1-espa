const joi = require("joi")

const dissertationValidation = {
    validateKeywords: (body) => {
        const keywordsSchema = joi.object({
            keywords: joi.array().items(joi.string().min(2)).min(1).required(),
            title: joi.string().min(1)
        })

        return keywordsSchema.validate(body)
    },

    validateDomains: (body) => {
        const domainssSchema = joi.object({
            domains: joi.array().items(joi.string().min(2)).min(1).required(),
            title: joi.string().min(1)
        })

        return domainssSchema.validate(body)
    }
}

module.exports = { dissertationValidation }