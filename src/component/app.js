"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express = require('express');
var app = express();
exports.app = app;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.post('/users', function (req, res) {
    console.log('Hello2:' + req.body);
});
app.listen(3000);
