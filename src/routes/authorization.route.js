const router = require("express").Router()
const { authController } = require("../controllers/authentication.controller")

router.get("/", authController.verifyToken)

module.exports = router