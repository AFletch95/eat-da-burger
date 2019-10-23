const connection = require('./connection.js');

var orm = {
// Display all burgers
selectAll: function(cb){
  let query = 'SELECT * FROM burgers;';
  connection.query(query,function(err,data) {
    if (err) throw err;
    cb(data);
  });
},
// Create new burger with devoured set to false
insertOne: function(burgerName,cb){
  let query = 'INSERT INTO burgers (burger_name) VALUES (?);';
  connection.query(query,[burgerName],function (err,data) {
    if (err) throw err;    
    cb(data);
  })

},
// Change burger to devoured
updateOne: function(burgerID,cb){
  let query = 'UPDATE burgers SET devoured = true WHERE ? = ID;';
  connection.query(query,[burgerID],function (err,data) {
    if (err) throw err;    
    cb(data);
  })
}
};

module.exports = orm;