const fs = require('fs');
class flashDB {
    constructor() {
        this.logModel = {
            fileName: "",
            name: "",
            timeStamp: 0,
            created_at: 0,
            dbModel: {}
        }
    }

    connect(filePath) {
        try {
            this.filePath = filePath;
            this.data = require(filePath)
        }catch(err){
            this.data = {}
        }
    }

    save(payload) {
        fs.writeFile(this.filePath, JSON.stringify(payload), "utf8", (err) => {
            if (err) return new Error(err);
        })
    }

    defaults(model) {
        this.data = model
        return {
            save: () => {
                this.save(model)
                return {
                    createLog: (name, path) => {
                        this.logModel.name = name
                        this.logModel.timeStamp = Date.now()
                        this.logModel.created_at = new Date()
                        this.logModel.dbModel = model
                        this.logModel.fileName = `${this.logModel.name}_${this.logModel.timeStamp}.json`
                        fs.writeFile(path + "/" + this.logModel.fileName, JSON.stringify(this.logModel), "utf-8", (err) => {
                            if (err) return console.error(err)
                            return console.log("Success to create log file: " + this.logModel.fileName)
                        })
                    }
                }
            },

        }
    }

    modify(executor) {
        executor(this.data)
        return {
            save: () => {
                this.save(this.data)
            }
        }
    }

    getData() {
        return this.data
    }
}
module.exports = flashDB
