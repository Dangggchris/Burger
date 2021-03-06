var connection = require("./connection");

var orm = {
        selectAll: function(cb) {
            connection.query("SELECT * FROM burgers;", function(err, result) {
                if (err) throw err;
                cb(result);
            });
        },
        insertOne: function(burger_name, cb) {
            connection.query("INSERT INTO burgers SET ?", {
                    burger_name: burger_name,
                    devoured: false
                    }, function(err, result) {
                    if (err) throw err;
                    console.log(result);
                    cb(result);
            });
        },
        updateOne: function(id, cb) {
            connection.query(
                "UPDATE burgers SET ? WHERE ?", [{
                    devoured: true
                },
                {
                    id: id
                }], function(err, result) {
                    if (err) throw err;
                    console.log(result);
                    cb(result);
                    }
            );
        }
}

module.exports = orm;