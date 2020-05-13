import {User} from "./User";
import { UserRepository } from "./UserRepository";

export class UserRepositoryImpl implements UserRepository {
    save(user: User){
    }

    get(username:string) :User{
        return new User("aaa", "dkjf");
    }
}
