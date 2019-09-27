const Sequelize = require("sequelize");

const sequelize = new Sequelize("hca", "hca", "password", {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false
});

// Data file imports to be added here
const Users = sequelize.import("../models/user");

sequelize.authenticate().then(() => {
    console.log("connected");
})

module.exports = {
    Sequelize,
    sequelize,
    Users
};