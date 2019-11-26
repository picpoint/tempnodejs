const express = require('express');
const app = express();
const port = process.env.port || 4000;
const exphbs = require('express-handlebars');
const fs = require('fs');
const testClass = require('./classes/testClass');
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');




app.get('/', (req, res) => {        
  let semen = 'PETRO';
  let name = new testClass(semen);
  
  fs.readFileSync('package.json', (err, data) => {
    console.log(data.toString());
  });

  res.render('index', {
    semen: semen    
  });  
});


app.listen(port, () => {
  console.log(`---server start on port ${port}---`);  
});