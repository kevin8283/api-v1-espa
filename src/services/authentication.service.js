const jwt = require("jsonwebtoken")
const secret = process.env.TOKEN_SECRET

const authService = {
    verifyToken: async (token) => {
        try {
            const result = jwt.verify(token, secret)
            
            return result
        } 
        
        catch (error) {
            return error
        }
    }
}

module.exports = { authService }