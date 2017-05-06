var orm = require("./config/orm.js");

orm.selectAndOrder("*", "parties", "party_cost", "DESC")