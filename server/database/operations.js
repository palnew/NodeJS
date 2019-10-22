<<<<<<< HEAD
var connect2 = require("./connection.js");

var operations = {
  getModules: callback => {
    connect2.query("select * from moduledetails", callback);
  }
};

module.exports = operations;
=======
var connect=require('./connection.js');

var operations={

    getModules:function(callback){
        connect.query("select * from moduledetails",callback);
    }

}

module.exports=operations;
>>>>>>> 0348d5876de6fcffc5b94af0bad0592e0bd53a6d
