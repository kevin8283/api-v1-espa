const router = require("express").Router()
const { thesisMiddleware } = require("../middlewares/thesis.middleware")
const { thesisController } = require("../controllers/thesis.controller")

//GET routes
router.get("/", thesisController.getAllThesis)
router.get("/:id", thesisMiddleware.validateId, thesisController.getThesisById)
router.get("/job/samples", thesisController.getSamplesPerJobDomains)
router.get("/theses/samples", thesisController.getSamplesPerThesisDomains)

//POST routes
router.post("/new", thesisMiddleware.validateBody, thesisController.addThesis)

module.exports = router