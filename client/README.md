# Angular Client for Shredfest (MEAN Final Project)

by John Torres (HartCode Academy 2019)

## Site Pages:

- Home Page
  http://localhost:4200/
- Login Page
  http://localhost:4200/login
- Register Page
  http://localhost:4200/register
- Edit Profile Page (Can Update User Email or Delete User - cannot access unless logged in)
  http://localhost:4200/editprofile
- Bands Page (Landing Page - cannot access unless logged in)
  http://localhost:4200/bands
- Admin Page (Usernames and Emails of all registered users - cannot access unless logged in and user is an admin)
  http://localhost:4200/admin

## Tech Used

- HTML5/CSS3/Bootstrap4
- Angular

# Creating The App

- In the Terminal, in the client dir, execute the following:

```
$ ng new client
...
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
...
Project 'client' successfully created.
$
```

## Loading The App

```
$ cd client
$ ng serve (page will automatically reload if any source files are modified.)
...
webpack: Compiled successfully.
```

- To view the home page in the browser, you would go to:
  http://localhost:4200/

## Modifying The App

- In the Terminal, in the client dir, execute the following to install Bootstrap:

```
npm install bootstrap --save
+ bootstrap@4.3.1
added 1 package from 2 contributors and audited 17092 packages in 18.593s
```

- Open .angular.json and modify the "styles" property to the following

```
  "styles": [
          "./node_modules/bootstrap/dist/css/bootstrap.min.css",
          "styles.css"
        ]
```

- Reload the page to confirm Bootstrap has been applied.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
