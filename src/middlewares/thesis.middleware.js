const { thesisValidation } = require("../validation/thesis.validation")

const thesisMiddleware = {
    validateBody: (req, res, next) => {
        const result = thesisValidation.validateThesis(req.body)

        if (result.error) {
            return res.json(result.error.details[0].message)
        }

        return next()
    },

    validateId: (req, res, next) => {
        const result = thesisValidation.validateId(req.params.id)

        if (result.error) {
            return res.json(result.error.details[0].message)
        }
        return next()
    }
}

module.exports = { thesisMiddleware }