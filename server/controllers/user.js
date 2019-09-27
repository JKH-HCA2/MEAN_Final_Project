// require new custom Service Module
var Service = require('../services/service');

var Controller = {};

// GET: http://localhost:3000/users/
Controller.list = (req, res) => {
    Service.list()
        .then((users) => {
            if (users) {
                res.json(users);
            } else {
                res.end('No Users found.');
            }
        })
        .catch((err) => {
            console.log(`Listing Users error: ${err}`);
            res.end('Listing Users error.');
        });
};

// GET: http://localhost:3000/users/user
Controller.getUserData = (req, res) => {
    let userId = req.params.id
    Service.getUserData(userId)
        .then((user) => {
            if (user) {
                res.json(user);                
            } else {
                res.end('No User found.');
            }
        })
        .catch((err) => {
            console.log(`Listing Users error: ${err}`);
            res.end('Listing Users error.');
        });
};

// POST: http://localhost:3000/users/register/
Controller.register = (req, res) => {
    Service.register({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            is_admin: 0
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Creating User error: ${err}`);
            res.end('Creating User error.');
        });
};

// POST: http://localhost:3000/users/login
Controller.postUserLogin = (req, res) =>
{
    var username = req.body.username;
    let password = req.body.password;
    Service.login({
        username: username,
        password: password
    })
    .then((user) => {
        if (user == null) {
            res.statusCode = 403;
            res.end('Invalid Creds')
        } else {
            req.session.admin = user.is_admin;       
            req.session.username = username;
            res.json(user);
        }    
    })
    .catch((err) => {
        console.log(`Reading User error: ${err}`);
        res.end('Reading User error.');
    });
    
    
};

// PUT: http://localhost:3000/users/update
Controller.update = (req, res) => {
    let userId = req.params.id;
    let email = req.body.email;
    Service.update(userId, {
            email: email
        })
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.end('User does not exist')
            }
        })
        .catch((err) => {
            console.log(`Updating User error: ${err}`);
            res.end('Updating User error.');
        });
};

// DELETE: http://localhost:3000/users/{id} 
Controller.delete = (req, res) => {
    Service.delete(req.params.id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Deleting User error: ${err}`);
            res.end('Deleting User error.');
        });
};

module.exports = Controller;