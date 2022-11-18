const router = require("express").Router()
const { mentionController } = require("../controllers/mention.controller")
const { mentionMiddleware } = require("../middlewares/mention.middleware")

router.get("/", mentionController.getAllMentions)
router.get("/id/:id", mentionMiddleware.validateId, mentionController.getMentionById)
router.get("/sigle/:sigle", mentionMiddleware.validateSigle, mentionController.getMentionBySigle)

module.exports = router