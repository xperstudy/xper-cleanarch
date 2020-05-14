"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginController_1 = require("./login/LoginController");
var UserController_1 = require("./user/UserController");
var AuthService_1 = require("./login/AuthService");
var MemoryUserRepository_1 = require("./user/MemoryUserRepository");
var express = require('express');
var app = express();
exports.app = app;
// Application Configuration
var userRepository = new MemoryUserRepository_1.MemoryUserRepository();
var authService = new AuthService_1.AuthService(userRepository);
var loginController = new LoginController_1.LoginController(authService);
var userController = new UserController_1.UserController();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.post('/users', function (req, res) {
    console.log('Hello2:' + req.body);
    userController.create(req, res);
});
app.listen(3000);
