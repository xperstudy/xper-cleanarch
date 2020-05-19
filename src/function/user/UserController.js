"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    UserController.prototype.create = function (req, res) {
        console.log("test333");
        console.log(req.param);
        // res.error = new Error();
        // res.error = new Error("이미 등록된 사용자입니다.");
        // res.status(500);
        res.status(500).json({ error: "이미 등록된 사용자입니다." });
        // res.json('error', { error: "이미 등록된 사용자입니다." });
    };
    return UserController;
}());
exports.UserController = UserController;
