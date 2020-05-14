"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var AuthService = /** @class */ (function () {
    function AuthService(userRepository) {
        this.userRepository = userRepository;
    }
    AuthService.prototype.authenticate = function (username) {
        this.userRepository.get(username);
    };
    return AuthService;
}());
exports.AuthService = AuthService;
