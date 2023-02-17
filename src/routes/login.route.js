const router = require("express").Router()
const { loginController } = require("../controllers/login.controller")
const { loginMiddleware } = require("../middlewares/login.middleware")

router.post("/", loginMiddleware.checkIfUserExists, loginController.login)

module.exports = router