"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
var LoginController = /** @class */ (function () {
    function LoginController(authService) {
        this.authService = authService;
    }
    LoginController.prototype.login = function (req, res) {
        var username = req.param.username;
        this.authService.authenticate(username);
    };
    return LoginController;
}());
exports.LoginController = LoginController;
