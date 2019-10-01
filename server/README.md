# MEAN_Final_Project

## Author
* Jeremy Han

## What is it?
The site contains the homepage from my capstone as well as a more basic version of the team lookup page. The page displays teams data from the teams.json file.

## Whats new?
A working user registration and login page have been added to the website. Users can log into the website and, if successful, will be redirected to the teams display.

## Ajax Calls
- **Users Data from ProsgreSQL file users**

- GET users listing for non-admins ({ where: { is_admin: "0" }).
GET: http://localhost:3000/users/

- POST for Login. */
POST http://localhost:3000/users/login

- POST for Register.
POST http://localhost:3000/users/register

- PUT users for editing user email.
PUT http://localhost:3000/users/edit/:ID

- DELETE user.
DELETE http://localhost:3000/users/delete/:ID

- **Leagues Data from JSON file leagues**

- GET leagues data.
GET http://localhost:3000/leagues/data

- **Teams Data from JSON file teams**

- GET Teams data.
GET http://localhost:3000/teams/data

- GET teams data by team id.
GET http://localhost:3000/teams/data/:id 

- GET Teams data by league.
GET http://localhost:3000/teams/data/byleague/:id

## Technologies
- Node.js
- ProgreSQL

### PostgreSQL

Note: This will use [PostgreSQL](https://www.postgresql.org/) in place of [MongoDB](https://www.mongodb.com/) for our Database. 

This example assumes a PostgreSQL User with the following
+ username: hca
+ password: password
+ creds: DBA


## Server and app setup and start
This assumes that the user has Node.js installed globally on their machine and that they have done a git clone or have otherwise copied the MEAN_Final_Project into a folder.

- In the command prompt:

```
$ cd server
$ npm install 
```
This will install the npm packages from package.json.

## PostgreSQL Setup
+ Create PostgreSQL DB User as defined above
+ Create a DB named **hca** in PostgreSQL using [pgAdmin4](http://127.0.0.1:49799/browser/)
+ Execute the following to build and populate the DB with test data
```
$ cd db
$ node migrate
$ node seed
```

## Test
+ run ```npm start``` to start the server
+ to run in development mode, to use the debugger, run ```npm run dev``` to start the server
+ Test using Postman Collection:
    + MEAN_Final_Project.postman_collection