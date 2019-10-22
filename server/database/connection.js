<<<<<<< HEAD
var mysql = require("mysql");
var connect1 = mysql.createPool({
  host: "localhost",
  user: "shirdi",
  password: "password123",
  database: "sai"
});

module.exports = connect1;
=======
var mysql=require('mysql');

var connection=mysql.createPool({

host:'localhost',
user:'vinodh',
password:'password',
database:'isql'

});


module.exports=connection;
>>>>>>> 0348d5876de6fcffc5b94af0bad0592e0bd53a6d
