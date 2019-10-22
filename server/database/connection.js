var mysql = require("mysql");
var connect1 = mysql.createPool({
  host: "localhost",
  user: "shirdi",
  password: "password123",
  database: "sai"
});

module.exports = connect1;
