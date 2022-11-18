const { orientationValidation } = require("../validation/orientation.validation")

const orientationMiddleware = {
    validateOrientation: (req, res, next) => {
        const result = orientationValidation.validateOrientation(req.body)

        if (result.error) {
            return res.json(result.error.details[0].message)
        }
        return next()
    }
}

module.exports = { orientationMiddleware }