const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

const routes = require('./controllers/burgers_controllers.js');
//app.use(routes);

app.listen(PORT,function(){
  console.log('server listening on: http://localhost:'+PORT);
});
