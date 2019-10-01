# MEAN_Final_Project
Client (Angular) for Capstone 

## Site Author
* Jeremy Han

## Purpose and goals of this site
- To display the leagues and teams for a basketball rec league.
- To register, edit, and delete site users. 

## Audience
- Team members and managers
- Basketball players! 

- ### What do they want from my site?
- To view the leagues and teams for a basketball rec league
- To be able to register, edit, and unregister users.
- To register basketball players and teams

## Site Pages:
- Home Page 
http://localhost:4200/
- Login Page
http://localhost:4200/login
- Register Page
http://localhost:4200/register
- Edit Page (edit email or delete the user account)
http://localhost:4200/user-edit
- Teams Page (Landing Page - cannot access unless logged in)
http://localhost:4200/teams
- Admin Page (Details non-admin users - cannot access unless logged in and the user is an admin)
http://localhost:4200/manager

## Technologies
- HTML5/CSS3/Bootstrap4
- Angular/Typescript

# Steps to create
+ In the Terminal, in the client dir, execute the following:
```
$ ng new client
...
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
CREATE client/angular.json (3409 bytes)
CREATE client/package.json (1277 bytes)
...
Project 'client' successfully created.
$ 
```

## Load App
```
$ cd client
$ ng serve
...
webpack: Compiled successfully.
```
- To view the home page in the browser, you would go to:
http://localhost:4200/

## Modify App 
+ In the Terminal, in the client dir, execute the following to install Bootstrap:
```
npm install bootstrap --save
+ bootstrap@4.3.1
added 1 package from 2 contributors and audited 17092 packages in 18.593s
found 0 vulnerabilities
```

+ Open .angular.json and modify the "styles" property to the following

```
  "styles": [
          "./node_modules/bootstrap/dist/css/bootstrap.min.css",
          "styles.css"
        ]
```
+ Reload the page to confirm Bootstrap has been applied.

Will also need to install:
```
npm install -g @angular/cli@latest
```


# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).