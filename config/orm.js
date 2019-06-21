var connection = require("./connection");

function selectAll() {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) throw err;
      });
}

function insertOne() {
    connection.query("INSERT INTO burgers (burger_name,devoured) VALUEs (?, ?)", [req.body.burger_name,req.body.devoured], function(err, result) {
        if (err) throw err;
      });
}

function updateOne() {
    connection.query(
        "UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = ?",
        [req.body.burger_name, req.body.devoured, req.params.id],
        function(err, result) {
          if (err) {
            // If an error occurred, send a generic server failure
            return res.status(500).end();
          }
          else if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
        }
      );
}