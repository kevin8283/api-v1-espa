const User = require("../models/user.model")
const AuthCode = require("../models/authCode.model")
const bcrypt = require("bcryptjs")
const { registerValidation } = require("../validation/register.validation")

const registerMiddleware = {
    checkExistingUsername: async (req, res, next) => {
        try {
            const user = await User.findOne({username: req.body.username})
            
            if (user) {
                return res.status(400).send("Ce nom d'utilisateur existe déjà")
            }

            return next()
        } 
        
        catch (error) {
            return res.json(error)
        }
    },

    validateAuthCode: async (req, res, next) => {
        try {
            const authCode = await AuthCode.findOne({mention: "EN"})
            const code = authCode.code
            const result = await bcrypt.compare(req.body.authCode, code)
            
            if (result) {
                return next()
            }

            return res.status(401).send("Le code d'authentification est incorrect")
        } 

        catch (error) {
            return res.json(error)
        }
    },

    validateUser: async (req, res, next) => {
        const { username, email, password, authCode } = req.body
        const result = registerValidation.validateUser(username, email, password, authCode)

        if (result.error) {
            return res.status(400).send(result.error.details[0].message)
        }

        return next()
    }
}

module.exports = { registerMiddleware }

