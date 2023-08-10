# flashDB
FlashDB é uma biblioteca simples para modificar arquivos .json rapidamente, usando javascript e node.js

## Instalação

instale o flashDB usando npm

```bash
  $ npm install flashDB
```

## Como usar

```js
  const flashDB = require("flashDB")
  const flash = new flashDB("filePath.json")

  flash.defaults({
      myModel: true
  }).save()

  flash.modify(data=>{
      data.myModel = false
  })

  console.log(flash.getData())

```
    
