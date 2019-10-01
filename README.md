# MEAN_Final_Project

![IndexPage](client/src/assets/img/screenshot.png?raw=true "IndexPage")

## Author
- Jeremy Han

## Our Purpose
- To demonstrate how to create an SPA with the angular framework
- To communicate the angular client with the server to deliver dynamic content

## Audience
- Future team members/managers
- Basketball players!

### What are they looking for?
- To view league and team information for a basketball rec league
- To register teams and team members
- To edit users, team members, and teams
- To be able to delete members and teams

## Pages:
- Home
- Register
- Login
- Team Viewer
- Edit User
- Admin View

## Server - Node/Express/PostgreSQL/Sequelize

- User data
http://localhost:3000/users

- Leagues data
http://localhost:3000/leagues/data

- Teams data
http://localhost:3000/teams/data

### Technologies
- HTML5/CSS/Bootstrap
- JavaScript
- JQuery
- Node.js
- PostgreSQL
- Angular CLI

### Start server
```$ cd server```
```$ npm start```

### PostgreSQL startup
- Create a PostgreSQL DB User
- Create a DB named HCA
- Enter the following to migrate and populate the table with test data:

```$ cd db```
```$ node migrate```
```$ node seed```

### Client start
```$ cd client```
```$ ng serve```
- To view the home page in the browser, enter the following url: http://localhost:4200/





