const User = require("../models/user.model")
const bcrypt = require("bcryptjs")

const registerService = {
    createAccount: async (username, email, password) => {
        try {
            const salt = await bcrypt.genSalt(12)
            const hashedPassword = await bcrypt.hash(password, salt)

            const user = new User({username, email, password: hashedPassword})
            const result = await user.save()

            return result
        } 

        catch (error) {
            return error
        }
    }
}

module.exports = { registerService }