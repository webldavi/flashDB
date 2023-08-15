# flashDB
FlashDB é uma biblioteca simples para modificar arquivos .json rapidamente, usando javascript e node.js

## Instalação

instale o flashDB usando npm

```bash
  $ npm install flashdatabase
```

## Como usar

```js
 const flashDB = require("flashdatabase");
  const flash = new flashDB();
  
  flash.connect("./myDb.json");
  
  flash
    .defaults({
      myModel: true,
    })
    .save()
    .createLog("created_default", "./logFolder");
  
  flash.modify((data) => {
    data.myModel = false;
  });
  
  console.log(flash.getData());
```
    
