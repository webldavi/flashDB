# flashDB

FlashDB é uma biblioteca simples para modificar arquivos .json rapidamente, usando javascript e node.js

## Instalação

instale o flashDB usando npm

```bash
  $ npm install flashDB
```

## Como usar

```js
  const flashDB = require("flashdatabase")
  const flash = new flashDB()

  flash.connect("./myFile.json")

  flash.defaults({
      state: 0
  }).save().createLog("created_model", "./logFolder")

  flash.modify(data=>{
      data.state: 1
  }).save()

  console.log(flash.getData())

```
