const winston = require("winston")
const expressWinston = require("express-winston")

const logOptions = {
        transports: [
          new winston.transports.Console()
        ],
        format: winston.format.combine(
          winston.format.colorize({all: true}),
          winston.format.json()
        ),
        meta: false,
        msg: "HTTP {{res.statusCode}} {{req.method}} {{req.url}} {{res.responseTime}}ms",
        colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
        ignoreRoute: function (req, res) { return false; }
}

const logger = expressWinston.logger(logOptions)

module.exports = logger