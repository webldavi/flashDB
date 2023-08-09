const fs = require('fs');
class flashDB {
    constructor(filePath) {
        this.filePath = filePath;
        this.data = require(filePath)
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
            }
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

    getData(){
        return this.data
    }
}
module.exports = flashDB
