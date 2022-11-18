const router = require("express").Router()
const { deliberationController } = require("../controllers/deliberation.controller")
const { deliberationMiddleware } = require("../middlewares/deliberation.middleware")

router.get("/", deliberationController.getDeliberations)

router.post("/predict", deliberationMiddleware.validateDeliberation, deliberationController.predictDeliberation)


module.exports = router