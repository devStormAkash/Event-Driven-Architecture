const fs = require("fs")
const os = require("os")
const EventEmitter = require("events")

class Logger extends EventEmitter{
    logMessage(message) {
        this.emit('message',{message})
    }
}

const logger = new Logger()
const filePath = "./log.txt"
const logToFile = (event) => {
    let logMessage = `${new Date().toISOString()} - ${event.message}\n`
    fs.appendFileSync(filePath, logMessage)
}
logger.on('message', logToFile)
setInterval(() => {
    const memory = (os.freemem() / os.totalmem()) * 100
    logger.logMessage(memory.toFixed(2))
}, 4000)


logger.log("Application Started");
logger.log("Application event occured");