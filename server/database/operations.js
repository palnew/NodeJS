var connect2 = require("./connection.js");

var operations = {
  getModules: callback => {
    connect2.query("select * from moduledetails", callback);
  }
};

module.exports = operations;
