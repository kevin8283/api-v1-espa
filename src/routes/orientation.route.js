const router = require("express").Router()
const { orientationMiddleware } = require("../middlewares/orientation.middleware")
const { orientationController } = require("../controllers/orientation.controller")

router.post("/recommend", orientationMiddleware.validateOrientation, orientationController.recommendOrientation)

module.exports = router