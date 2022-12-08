const router = require("express").Router()
const { dissertationController } = require("../controllers/dissertation.controller")
const { dissertationMiddleware } = require("../middlewares/dissertation.middleware")

router.get("/", dissertationController.getDissertations)

router.get("/keywords", dissertationMiddleware.validateKeywords, dissertationController.getDissertationsByKeywords)
router.get("/domains", dissertationMiddleware.validateDomains, dissertationController.getDissertationsByDomains)

module.exports = router