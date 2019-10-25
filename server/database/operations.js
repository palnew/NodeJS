var connect2 = require("./connection.js");

var operations = {
  getModules: callback => {
    connect2.query("select * from moduledetails", callback);
  },

  addModules: (module1, callback) => {
    connect2.query(
      "insert into moduledetails values(?,?,?,?,?,?)",
      [
        module1.modulecode,
        module1.modulename,
        module1.duration,
        module1.price,
        module1.description,
        module1.filename
      ],
      callback
    );
  }
};

module.exports = operations;
