# flashDB
FlashDB é uma biblioteca simples para modificar arquivos .json rapidamente, usando javascript e node.js

## Instalação

instale o flashDB usando npm

```bash
  $ npm install flashdatabase
```

## Como usar

```js
  import * as Flash from 'flashdatabase'
  const flash = new Flash.db();
  
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
    
