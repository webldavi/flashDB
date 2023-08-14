# flashdatabase

Flashdatabase é uma biblioteca simples para modificar arquivos .json rapidamente, usando javascript e node.js

## Instalação

instale o flashdatabase usando npm

```bash
  $ npm install flashdatabase
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
