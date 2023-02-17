const User = require("../models/user.model")
const bcrypt = require("bcryptjs")

const loginService = {
    login: async (username, password) => {
        try {
            const user = await User.findOne({username: username})
            const result = await bcrypt.compare(password, user.password)

            return result
            
        } 
        catch (error) {
            return error
        }
    }
}

module.exports = { loginService }