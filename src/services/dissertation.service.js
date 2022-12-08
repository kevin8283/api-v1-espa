const Dissertation = require("../models/dissertation.model")

const dissertationService = {
    getDissertations: async () => {
        try {
            return await Dissertation.find()
        } 
        catch (error) {
            return error
        }
    },

    getDissertationsByKeywords: async (keywords, title) => {
        try {
            const jsonFilter = []

            if (title) {
                keywords.forEach(keyword => {
                    jsonFilter.push({
                        keywords: {$in: [new RegExp(keyword, "i")]}
                    })
                })
                jsonFilter.push({title: new RegExp(title, "i")})
            }
            
            else {
                keywords.forEach(keyword => {
                    jsonFilter.push({
                        keywords: {$in: [new RegExp(keyword, "i")]}
                    })
                })
            }
           
            return await Dissertation.find().and([...jsonFilter])
        } 
        catch (error) {
            return error
        }
    },

    getDissertationsByDomains: async (domains, title) => {
        const jsonFilter = []

        try {
            if (title) {
                domains.forEach(domain => {
                    jsonFilter.push({
                        thesis_domains: {$in: [new RegExp(domain, "i")]}
                    })
                })
                jsonFilter.push({title: new RegExp(title, "i")})
            }
            
            else {
                domains.forEach(domain => {
                    jsonFilter.push({
                        thesis_domains: {$in: [new RegExp(domain, "i")]}
                    })
                })
            }

            return await Dissertation.find().and([...jsonFilter])
        } 
        catch (error) {
            return error
        }
    }
}

module.exports = { dissertationService }