const { mentionValidation } = require("../validation/mention.validation")

const mentionMiddleware = {
    validateId: (req, res, next) => {
        const result = mentionValidation.validateId(req.params.id)

        if (result.error) {
            return res.json(result.error.details[0].message)
        }
        return next()
    },

    validateSigle: (req, res, next) => {
        const result = mentionValidation.validateSigle(req.params.sigle)

        if (result.error) {
            return res.json(result.error.details[0].message)
        }
        return next()
    }
}

module.exports = { mentionMiddleware }