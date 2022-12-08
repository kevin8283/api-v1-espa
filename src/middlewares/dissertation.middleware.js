const { dissertationValidation } = require("../validation/dissertation.validation")

const dissertationMiddleware = {
    validateKeywords: (req, res, next) => {
        const result = dissertationValidation.validateKeywords(req.body)

        if (result.error) {
            return res.json(result.error.details[0].message)
        }

        return next()
    },

    validateDomains: (req, res, next) => {
        const result = dissertationValidation.validateDomains(req.body)

        if (result.error) {
            return res.json(result.error.details[0].message)
        }

        return next()
    }
}

module.exports = { dissertationMiddleware }