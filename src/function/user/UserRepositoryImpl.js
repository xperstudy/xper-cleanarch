"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var UserRepositoryImpl = /** @class */ (function () {
    function UserRepositoryImpl() {
    }
    UserRepositoryImpl.prototype.save = function (user) {
    };
    UserRepositoryImpl.prototype.get = function (username) {
        return new User_1.User();
    };
    return UserRepositoryImpl;
}());
exports.UserRepositoryImpl = UserRepositoryImpl;
