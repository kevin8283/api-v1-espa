const { loginService } = require("../services/login.service")
const jwt = require("jsonwebtoken")
const jwt_secret = process.env.JWT_SECRET

const loginController = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body
            const isPasswordCorrect = await loginService.login(username, password)

            if (isPasswordCorrect) {
                const token = jwt.sign({user: username}, jwt_secret, {expiresIn: 1000*60*60*24})

                res.cookie("authToken", token, {maxAge: 1000*60*60*24, httpOnly: true})
                return res.json(token)
            }

            return res.status(401).send("Le mot de passe entré est incorrect")
        } 
        catch (error) {
            return res.json(error)
        }
    }
}

module.exports = { loginController }