'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('USER', {
        username: { 
            type: DataTypes.STRING(25),
            unique: true,
            allowNull: false
        },
        email: { 
            type: DataTypes.STRING(25),
            unique: true,
            allowNull: false
        },
        password: { 
            type: DataTypes.STRING(15),
            allowNull: false
        },
        is_admin: {
            type: DataTypes.INTEGER(1)
        }
    }, {
        tableName: 'USER'
    });
};