"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.create = function (req, res) {
        console.log("test");
        console.log(req.param);
    };
    return UserController;
}());
exports.UserController = UserController;
