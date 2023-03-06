const { authService } = require("../services/authentication.service")

const authController = {
    verifyToken: async (req, res) => {
        try {
            const token = req.cookies.authToken

            if (token) {

                const isTokenValid = authService.verifyToken(token)

                if (isTokenValid) {
                    return res.json("Token valide")
                }

                return res.status(401).send("Token invalide")
            }
            return res.status(401).send("You are not authorized to access this ressource")
        } 
        
        catch (error) {
            return res.json(error)    
        }
    },

    logout: async (req, res) => {
       res.clearCookie("authToken")

       return res.json("You are now logged out")
    }
}

module.exports = { authController }