# Node.js & Mysql
This API can Work with CURD "Create , Update , Read , Delete " Operations to handled data between layout & mysql database using node.js as backend server side ,this API bulid on npm v7.0.12 & node.js v12.19.0 
\
## Tools that i used :
OS       : Kali Lunix\
IDE      : VS Code.\
Database : mysql ,XAMPP v7.4.12-0\
Other    : Postman for testing PUT, POST, GET and DELETE the data between The API and dababase you can download from  https://www.postman.com/downloads/ 
\
## The Dependencies in package.josn file:
1- Body-parser         v1.19.0\
2- Express             v4.17.1\
3- Mysql               v2.18.1\
4- Nodemon             v2.0.7

## Here more information about package.josn file 
```
{
  "name": "node-mysql",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "mysql": "^2.18.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
```
