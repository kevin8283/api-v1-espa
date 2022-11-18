const { orientationService } = require("../services/orientation.service")

const orientationController = {
    recommendOrientation: async (req, res) => {
        try {
            const results = await orientationService.recommendOrientation(req.body)
            return res.json(results)
        } 
        catch (error) {
            console.error(error)
            return res.json(error)
        }
    }
}

module.exports = { orientationController }