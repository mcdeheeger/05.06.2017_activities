var orm = require("./config/orm.js");

orm.selectAndOrder("*", "parties", "id", "ASC");