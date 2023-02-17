const User = require("../models/user.model")

const loginMiddleware = {
    checkIfUserExists: async (req, res, next) => {
        const user = await User.findOne({username: req.body.username})

        if (!user) {
            return res.status(404).send("Aucun compte ne correspond à ce nom d'utilisateur")
        }

        return next()
    }
}

module.exports = { loginMiddleware }