const Thesis = require("../models/thesis.model")

const thesisService = {
    addThesis: async (body) => {
        try {
            const thesis = new Thesis(body)
            const result = await thesis.save()
            return result
        } 
        catch (error) {
            return error
        }
    },

    getAllThesis: async () => {
        try {
            const results = await Thesis.find()
            return results
        } 
        catch (error) {
            return error
        }
    },

    getThesisById: async (id) => {
        try {
            const thesis = await Thesis.findById(id)
            return thesis    
        } 
        catch (error) {
            return error
        }
    },

    getSamplesPerJobDomains: async () => {
        try {
            const theses = await Thesis.find()
            let results = {
                elec: 0,
                emb: 0,
                dev: 0,
                auto: 0,
                devops: 0,
                ia: 0,
                meca: 0,
                robo: 0,
                total: theses.length
            }

            theses.forEach(thesis => {
                if (thesis.job_domains.includes("Electronique")) {
                    results.elec++
                }
                if (thesis.job_domains.includes("Electronique Embarquée")) {
                    results.emb++
                }
                if (thesis.job_domains.includes("Automatique")) {
                    results.auto++
                }
                if (thesis.job_domains.includes("Développement")) {
                    results.dev++
                }
                if (thesis.job_domains.includes("DevOps")) {
                    results.devops++
                }
                if (thesis.job_domains.includes("Intelligence Artificielle")) {
                    results.ia++
                }
                if (thesis.job_domains.includes("Mécatronique")) {
                    results.meca++
                }
                if (thesis.job_domains.includes("Robotique")) {
                    results.robo++
                }
            })

            return results
        } 
        catch (error) {
            return error    
        }
    },

    getSamplesPerThesisDomains: async () => {
        try {
            const theses = await Thesis.find()
            let results = {
                elec: 0,
                emb: 0,
                dev: 0,
                auto: 0,
                devops: 0,
                ia: 0,
                meca: 0,
                robo: 0,
                total: theses.length
            }

            theses.forEach(thesis => {
                if (thesis.thesis_domains.includes("Electronique")) {
                    results.elec++
                }
                if (thesis.thesis_domains.includes("Electronique Embarquée")) {
                    results.emb++
                }
                if (thesis.thesis_domains.includes("Automatique")) {
                    results.auto++
                }
                if (thesis.thesis_domains.includes("Développement")) {
                    results.dev++
                }
                if (thesis.thesis_domains.includes("DevOps")) {
                    results.devops++
                }
                if (thesis.thesis_domains.includes("Intelligence Artificielle")) {
                    results.ia++
                }
                if (thesis.thesis_domains.includes("Mécatronique")) {
                    results.meca++
                }
                if (thesis.thesis_domains.includes("Robotique")) {
                    results.robo++
                }
            })

            return results
        } 
        catch (error) {
            return error    
        }
    }
}

module.exports = { thesisService }