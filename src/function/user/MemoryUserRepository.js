"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryUserRepository = void 0;
var User_1 = require("./User");
var MemoryUserRepository = /** @class */ (function () {
    function MemoryUserRepository() {
        this.userMap = new Map();
    }
    MemoryUserRepository.prototype.construtor = function () {
        this.initUser();
    };
    MemoryUserRepository.prototype.initUser = function () {
        this.userMap.set("admin", new User_1.User("admin", "admin1234"));
    };
    MemoryUserRepository.prototype.get = function (username) {
        return this.userMap.get(username);
    };
    MemoryUserRepository.prototype.save = function (user) {
        this.userMap.set(user.username, user);
        console.log("helloskfjldskjf");
    };
    return MemoryUserRepository;
}());
exports.MemoryUserRepository = MemoryUserRepository;
