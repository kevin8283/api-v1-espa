const { authController } = require("../controllers/authentication.controller")
const router = require("express").Router()

router.get("/", authController.logout)

module.exports = router