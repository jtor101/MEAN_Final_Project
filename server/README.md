# Angular Client for Shredfest (MEAN Final Project)

by John Torres (HartCode Academy 2019)

## Data Rendered:

- **Users Data from PostgreSQL table USERS**

- GET users listing for admins ({ where: { is_admin: "1" }).
  GET: http://localhost:3000/users/allusers

- GET one user
  GET: http://localhost:3000/users/:id

- POST for Login. \*/
  POST http://localhost:3000/users/login

- POST for Register.
  POST http://localhost:3000/users/register

- PUT users for editing user email.
  PUT http://localhost:3000/users/edituser/:id

- DELETE user
  DELETE http://localhost:3000/users/deleteuser/:id

- **Leagues Data from PostgreSQL table LEAGUES**
- GET leagues data.
  GET http://localhost:3000/bands/leagues

- **Bands Data from PostgreSQL table TEAMS**
- GET all bands data.
  GET http://localhost:3000/bands/allbands

## Tech Utilized

- Node.js
- PostgreSQL
- Express
- Sequelize

### PostgreSQL

This example assumes a PostgreSQL User with the following

- username: hca
- password: password
- database: hca
- creds: DBA

## Server and app setup and start

This assumes that the user has Node.js installed globally on their machine and that they have done a git clone or have otherwise copied the MEAN_Final_Project into a folder.

- In the command prompt:

```
$ cd server
$ npm install
```

This will install the npm packages from package.json.

## PostgreSQL Setup

- Create PostgreSQL DB User as defined above
- Create a DB named **hca** in PostgreSQL using [pgAdmin4](http://127.0.0.1:49799/browser/)
- Execute the following to build and populate the DB with test data

```
$ cd db
$ node migrate
$ node seed
```

## Test

- run `npm start` to start the server
- to run in development mode, to use the debugger, run `npm run dev` to start the server
- Test using Postman Collection:
  - MFP.postman_collection

### Input and Outputs for Testing:

**POST Login**
POST http://localhost:3000/users/login
Input:

```
username: req.body.username
password: req.body.password
```

Output (Positive):

```
{
    "USERID": 11,
    "USERNAME": "AirMan",
    "PASSWORD": "PASSWORD",
    "EMAIL": "airman@test.com",
    "IS_ADMIN": 0,
    "createdAt": "2019-09-30T20:34:17.831Z",
    "updatedAt": "2019-09-30T20:34:17.831Z"
}
```

Output (Negative):

```
{
    "error": "Invalid credentials"
}
```

**POST Register**
POST http://localhost:3000/users/register
Input:

```
username: req.body.username
email: req.body.email
password: req.body.password
```

Output (Positive):

```
{
    "IS_ADMIN": 0,
    "USERID": 19,
    "USERNAME": "IceMan",
    "PASSWORD": "password",
    "EMAIL": "iceman@aol.com",
    "updatedAt": "2019-10-01T14:37:20.492Z",
    "createdAt": "2019-10-01T14:37:20.492Z"
}
```

Output (Negative):

```
{
    Creating User error.
}
```

**EDIT user**
PUT http://localhost:3000/users/edituser/11
Input:

```
email: req.body.email
```

Output (Positive):

```
[
    1,
    [
        {
            "USERID": 11,
            "USERNAME": "AirMan",
            "PASSWORD": "PASSWORD",
            "EMAIL": "airman@gmail.com",
            "IS_ADMIN": 0,
            "createdAt": "2019-09-30T20:34:17.831Z",
            "updatedAt": "2019-10-01T14:38:48.040Z"
        }
    ]
]
```

Output (Negative):

```
[
    0
]
```

**DELETE user**
DELETE http://localhost:3000/users/deleteuser/8
Output (Positive):

```
1
```

Output (Negative):

```
0
```

**GET All User Data**
GET http://localhost:3000/users/allusers

Output (Positive):

```
{
        "USERID": 1,
        "USERNAME": "FooBar",
        "PASSWORD": "PASSWORD123",
        "EMAIL": "foobar@hig.com",
        "IS_ADMIN": 0,
        "createdAt": "2019-09-30T20:34:17.831Z",
        "updatedAt": "2019-09-30T20:34:17.831Z"
    },
    {
        "USERID": 2,
        "USERNAME": "BatMan",
        "PASSWORD": "PASSWORD",
        "EMAIL": "batman@test.com",
        "IS_ADMIN": 0,
        "createdAt": "2019-09-30T20:34:17.831Z",
        "updatedAt": "2019-09-30T20:34:17.831Z"
    }

Etc.
```

Output (Negative):

```
No Users found
```

**GET One User**
GET http://localhost:3000/users/3

Output (Positive):

```
{
    "USERID": 3,
    "USERNAME": "megaman",
    "PASSWORD": "PASSWORD",
    "EMAIL": "test@test.com",
    "IS_ADMIN": 1,
    "createdAt": "2019-09-30T20:34:17.831Z",
    "updatedAt": "2019-09-30T21:01:15.281Z"
}

```

Output (Negative):

```
No Users found for User ID.
```

**GET Leagues Data**
GET http://localhost:3000/bands/leagues
Output (Positive):

```
[
    {
        "NAME": "4 Piece Acts",
        "ID": 1,
        "DESCRIPTION": "This division features bands with a maximum of four members i.e. Vocalist, Lead Guitarist, Bassist, and Drummer.",
        "createdAt": "2019-09-30T20:34:17.863Z",
        "updatedAt": "2019-09-30T20:34:17.863Z"
    },
    {
        "NAME": "6 Piece Acts",
        "ID": 2,
        "DESCRIPTION": "This division features bands with a maximum of six members i.e. Vocalist, Lead Guitarist, Rhythm Guitarist, Bassist, Keyboardist, and Drummer.",
        "createdAt": "2019-09-30T20:34:17.863Z",
        "updatedAt": "2019-09-30T20:34:17.863Z"
    },
    {
        "NAME": "Femme Fatales",
        "ID": 3,
        "DESCRIPTION": "This division features all female bands with a maximum of six members.",
        "createdAt": "2019-09-30T20:34:17.863Z",
        "updatedAt": "2019-09-30T20:34:17.863Z"
    },
    {
        "NAME": "Classic Rockers",
        "ID": 4,
        "DESCRIPTION": "This division features bands with members over 50 with a maximum of six members.",
        "createdAt": "2019-09-30T20:34:17.863Z",
        "updatedAt": "2019-09-30T20:34:17.863Z"
    },
    {
        "NAME": "Young Bucks",
        "ID": 5,
        "DESCRIPTION": "This division features bands with members under 30 with a maximum of six members.",
        "createdAt": "2019-09-30T20:34:17.863Z",
        "updatedAt": "2019-09-30T20:34:17.863Z"
    }
]
```

Output (Negative):

```
[]
```

**GET Teams Data**
GET http://localhost:3000/bands/allbands
Output (Positive):

```
[
    {
        "ID": 1,
        "TEAMNAME": "Aerosmith",
        "LEAGUENAME": "ClassicRockers",
        "LEAGUEID": 4,
        "MANAGERNAME": "Steven Tyler",
        "MANAGERPHONE": "8174322198",
        "MANAGEREMAIL": "justpushplay@yahoo.com",
        "MAXTEAMMEMBERS": 4,
        "MINMEMBERAGE": 50,
        "MAXMEMBERAGE": 100,
        "TEAMGENDER": "Any",
        "createdAt": "2019-09-30T20:34:17.873Z",
        "updatedAt": "2019-09-30T20:34:17.873Z"
    },
    {
        "ID": 2,
        "TEAMNAME": "Steely Dan",
        "LEAGUENAME": "ClassicRockers",
        "LEAGUEID": 4,
        "MANAGERNAME": "Walter Becker",
        "MANAGERPHONE": "8175555654",
        "MANAGEREMAIL": "doitagain@aol.com",
        "MAXTEAMMEMBERS": 6,
        "MINMEMBERAGE": 50,
        "MAXMEMBERAGE": 100,
        "TEAMGENDER": "Any",
        "createdAt": "2019-09-30T20:34:17.873Z",
        "updatedAt": "2019-09-30T20:34:17.873Z"
    },
    {
        "ID": 3,
        "TEAMNAME": "The Gaslight Anthem",
        "LEAGUENAME": "4PieceActs",
        "LEAGUEID": 1,
        "MANAGERNAME": "Brian Fallon",
        "MANAGERPHONE": "8175655152",
        "MANAGEREMAIL": "stayvicious@aol.com",
        "MAXTEAMMEMBERS": 4,
        "MINMEMBERAGE": 21,
        "MAXMEMBERAGE": 100,
        "TEAMGENDER": "Male",
        "createdAt": "2019-09-30T20:34:17.873Z",
        "updatedAt": "2019-09-30T20:34:17.873Z"
    },
Etc.
```

Output (Negative):

```
[]
```
