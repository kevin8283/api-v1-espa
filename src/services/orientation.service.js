const axios = require("axios")
const orientationURI = "http://127.0.0.1:5000/api/v1/regressor/orientation/recommend"


const orientationService = {
    recommendOrientation: async (body) => {
        try {
           const result = await axios.post(orientationURI, body)

            return result.data 
        } 
        catch (error) {
            return error    
        }
    }
}

module.exports = { orientationService }