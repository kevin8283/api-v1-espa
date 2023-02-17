const jwt = require("jsonwebtoken")
const secret = process.env.TOKEN_SECRET

const authMiddleware = {
    verifyToken: (req, res, next) => {
        const [, token] = req.headers.authorization.split(" ")
        const isTokenValid = jwt.verify(token, secret)

        if (!isTokenValid) {
            return res.status(401).send("You are not authorized to access this ressource")
        }

        return next()
    }
}

module.exports = { authMiddleware }