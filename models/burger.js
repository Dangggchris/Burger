var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll(function(result) {
            cb(result);
        })
    },
    insert: function(burger_name, cb) {
        orm.insertOne(burger_name, function(result) {
            cb(result);
        })
    },
    update: function(id, cb) {
        orm.updateOne(id, function(result) {
            cb(result);
        })
    }
}

module.exports = burger;