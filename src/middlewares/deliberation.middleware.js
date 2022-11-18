const { deliberationValidation } = require("../validation/deliberation.validation")

const deliberationMiddleware = {
    validateDeliberation: (req, res, next) => {
        const result = deliberationValidation.validateDeliberation(req.body)

        if (result.error) {
            return res.json(result.error.details[0].message)
        }
        return next()
    }
}

module.exports = { deliberationMiddleware }