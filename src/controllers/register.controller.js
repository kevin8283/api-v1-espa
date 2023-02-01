const { registerService } = require("../services/register.service")

const registerController = {
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body
            const user = await registerService.createAccount(username, email, password)

            return res.json(user)
        } 
        catch (error) {
            return res.json(error)    
        }
    }
}

module.exports = { registerController }