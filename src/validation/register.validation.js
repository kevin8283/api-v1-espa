const joi = require("joi")

const registerValidation = {
    validateUser: (username, email, password, authCode) => {
        const userSchema = joi.object({
            username: joi.string().min(4).max(10).required().messages({
                "string.pattern.base": "Le nom d'utilisateur doit contenir 4 à 10 caractères",
                "string.min": "Le nom d'utilisateur doit contenir au moins 4 caraactères",
                "string.max": "Le nom d'utilisateur ne doit pas dépasser les 10 caractères"
            }),
            email: joi.string().email().required().messages({
                "string.email": "L'email doit être un email valide"
            }),
            password: joi.string().min(8).max(20).required().messages({
                "string.min": "Le mot de passe doit contenir au moins 8 caraactères",
                "string.max": "Le mot de passe ne doit pas dépasser les 20 caractères"
            }),
            authCode: joi.string().required().messages({
                "any.empty": "Le code d'authentification est requis"
            })
        })

        const result = userSchema.validate({ username, email, password, authCode })
        return result
    }
}

module.exports = { registerValidation }