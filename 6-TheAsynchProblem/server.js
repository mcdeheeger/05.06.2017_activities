var orm = require("./config/orm.js");


orm.selectWhere("parties", "party_type", "grown-up", function(data) {
    var data = data
    console.log(data); // Data is undefined. Why?
});


