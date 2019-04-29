"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var auth_1 = require("./auth");
<<<<<<< HEAD
=======
var authz_1 = require("./authz");
>>>>>>> 46459edbcde68d96c822977613d1817f7672a9eb
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);
//middlewares para login
server.post('/login', auth_1.handleAuthentication);
<<<<<<< HEAD
=======
server.use('/orders', authz_1.handleAuthorization);
>>>>>>> 46459edbcde68d96c822977613d1817f7672a9eb
// Use default router
server.use(router);
var options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
};
https.createServer(options, server).listen(3001, function () {
    console.log('JSON Server is running https://localhost:3001');
});
