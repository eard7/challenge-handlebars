# Challenge Handlebar

a [Sails](http://sailsjs.org) application with Handlebars as template engine

**You must have installed node with npm**

Steps:

_Install sails if you haven't (npm install -g sails)_

1.- Install dependencies
```javascript
npm install
```
2.- Configure your db connection (by default this project use mysql with a database called ejercicio)
3.- Configure your s3 settings in config/s3.js (this is for file upload)
4.- Run the server
```javascript
sails lift
```
5.- **OPTIONAL:** You can use [PM2](https://github.com/Unitech/pm2) to run the server.
```javascript
pm2 start app.js -n challenge-handlebars
```
