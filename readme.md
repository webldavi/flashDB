# flashDB
FlashDB é uma biblioteca simples para modificar arquivos .json rapidamente, usando javascript e node.js

## Instalação

instale o flashDB usando npm

```bash
  $ npm install flashdatabase
```

## Como usar

```js
    const flashDB = require("flashdatabase")
    const path = require("path")
    const flash = new flashDB(path.join(__dirname, "mydatabase.json"))

    flash.defaults({
        myModel: true
    }).save()

    console.log(flash.getData())

    flash.modify(data=>{
        data.myModel = false
    })

    console.log(flash.getData())

```
    
