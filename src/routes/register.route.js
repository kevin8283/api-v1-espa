const router = require("express").Router()
const { registerController } = require("../controllers/register.controller")
const { registerMiddleware } = require("../middlewares/register.middleware")

const { register } = registerController
const { validateUser, checkExistingUsername, validateAuthCode } = registerMiddleware

router.post("/", validateUser, checkExistingUsername, validateAuthCode, register)

module.exports = router