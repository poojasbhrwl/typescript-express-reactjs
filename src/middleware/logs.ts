import * as fs from 'fs'

class logs {
    public writeLogs = (logs: object) : any => {
        fs.appendFileSync("debug.logs", JSON.stringify(logs))
    }
}
export const logsData = new logs()