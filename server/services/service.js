const User = require('../db/connection').Users;

var Service = {};

Service.login = (userObj) => {
    return User.findOne({
            where: userObj
        })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

Service.list = () => {
    return User.findAll()
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};

Service.getUserData = (userId) => {
    return User.findOne({
        where: {id: userId}
        })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

Service.register = (userObj) => {
    return User
        .create(userObj)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

Service.update = (userId, userObj) => {
    return User.update(
        userObj, {returning: true, where: { id: userId } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

Service.delete = (userId) => {
    return User.destroy({ where: { id: userId } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        });
};

module.exports = Service;