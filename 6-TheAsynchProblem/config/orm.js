var connection = require("../config/connection.js");

var f

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol, func) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol, func], function(err, result) {
      func(result);


        console.log(result); // Data is undefined. Why?
    });

  }
};

module.exports = orm;
