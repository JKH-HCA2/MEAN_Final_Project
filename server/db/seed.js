const connection = require("./connection");
// Data seed routes to be added here
const userData = require("./seed_data/users.json");

// Connection link to be added here
connection.Users.destroy({ where: {} }).then(() => {
    connection.Users.bulkCreate(userData).then(() => {
        process.exit();
    })
})
//
//
