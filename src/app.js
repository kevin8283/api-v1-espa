const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const xss_clean = require("xss-clean")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const app = express()
const logger = require("./utils/logger")
const morganMiddleware = require("./middlewares/morgan.middleware")

//Configure environment variables
dotenv.config()
const port = process.env.PORT
const mongodbURI = process.env.MONGODB_URI
const cookie_secret = process.env.COOKIE_SECRET

//Importing routes
const deliberationRoute = require("./routes/deliberation.route")
const orientationRoute = require("./routes/orientation.route")
const mentionRoute = require("./routes/mention.route")
const thesisRoute = require("./routes/thesis.route")
const dissertationRoute = require("./routes/dissertation.route")
const registerRoute = require("./routes/register.route")
const loginRoute = require("./routes/login.route")
const tokenRoute = require("./routes/authorization.route")
const logoutRoute = require("./routes/logout.route")


//Database connection
mongoDbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(mongodbURI, mongoDbOptions, (error) => {
    if (error) {
        return logger.error(error)
    }
  
    return logger.info("Connection established with database")
})

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser(cookie_secret))
app.use(cors())
app.use(xss_clean())
app.use(morganMiddleware)

//Routes
app.use("/api/v1/deliberation", deliberationRoute)
app.use("/api/v1/orientation", orientationRoute)
app.use("/api/v1/mention", mentionRoute)
app.use("/api/v1/thesis", thesisRoute)
app.use("/api/v1/dissertation", dissertationRoute)
app.use("/api/v1/auth/register", registerRoute)
app.use("/api/v1/auth/login", loginRoute)
app.use("/api/v1/verify-token", tokenRoute)
app.use("/api/v1/auth/logout", logoutRoute)

//Serving
app.listen(port, () => {
    logger.info(`Server running on port ${port}`)
})