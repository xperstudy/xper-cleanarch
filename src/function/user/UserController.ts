import { UserService } from "./UserService";

export class UserController {

    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    public create(req, res) {
        console.log("test333");
        console.log(req.param);
        // res.error = new Error();

        // res.error = new Error("이미 등록된 사용자입니다.");
        // res.status(500);
        res.status(500).json({ error: "이미 등록된 사용자입니다." });
        // res.json('error', { error: "이미 등록된 사용자입니다." });
    }
}
